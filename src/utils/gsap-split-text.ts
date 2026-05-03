import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

type SplitRevealOptions = {
  at?: string | number;
  lineDelay?: number;
  charStagger?: gsap.TweenVars["stagger"];
  duration?: number;
  ease?: string;
  yPercent?: number;
};

export function addSplitTextReveal(
  timeline: gsap.core.Timeline,
  target: gsap.DOMTarget,
  {
    at = 0,
    lineDelay = 0.14,
    charStagger = 0.018,
    duration = 0.75,
    ease = "power4.out",
    yPercent = 110,
  }: SplitRevealOptions = {},
) {
  // Split into lines first
  const parentSplit = new SplitText(target, {
    type: "lines",
    linesClass: "split-line",
  });

  const allChars: Element[] = [];
  const revertFns: (() => void)[] = [];

  parentSplit.lines.forEach((line, lineIndex) => {
    // Get the text content and manually split into words
    const text = line.textContent || "";
    const words = text.split(/(\s+)/).filter(Boolean);
    
    // Clear the line
    line.textContent = "";
    
    const lineChars: Element[] = [];
    
    words.forEach((word, wordIndex) => {
      if (/^\s+$/.test(word)) {
        // Add space as text node
        line.appendChild(document.createTextNode(word));
      } else {
        // Wrap word in a span and split into chars
        const wordSpan = document.createElement("span");
        wordSpan.className = "split-word inline-block";
        wordSpan.textContent = word;
        line.appendChild(wordSpan);
        
        // Split word into characters
        const charSplit = new SplitText(wordSpan, {
          type: "chars",
          charsClass: "split-char",
        });
        
        lineChars.push(...charSplit.chars);
        revertFns.push(() => charSplit.revert());
      }
      
      // Add space after word (except last)
      if (wordIndex < words.length - 1) {
        line.appendChild(document.createTextNode(" "));
      }
    });
    
    allChars.push(...lineChars);
    
    const position = typeof at === "number" 
      ? at + (lineIndex * lineDelay) 
      : `${at}+=${(lineIndex * lineDelay)}`;

    timeline.from(
      lineChars,
      {
        yPercent,
        autoAlpha: 0,
        duration,
        ease,
        stagger: charStagger,
      },
      position,
    );
  });

  return () => {
    revertFns.reverse().forEach((revert) => revert());
    parentSplit.revert();
  };
}
