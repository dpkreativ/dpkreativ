import { act } from "react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { render } from "@testing-library/react";
import SparkleBackground, {
  type SparkleVariant,
} from "@/components/sparkle-background";

const ALL_VARIANTS: SparkleVariant[] = [
  "sparkle",
  "lightning",
  "code",
  "terminal",
  "layers",
  "pen",
  "scroll",
  "mic",
  "briefcase",
  "gradcap",
  "mail",
  "chat",
  "target",
  "trophy",
  "compass",
];

describe("SparkleBackground", () => {
  it("hydrates SSR HTML without mismatch warnings and renders a single icon", () => {
    const serverHtml = renderToString(<SparkleBackground variant="scroll" />);
    expect(serverHtml).toContain('data-icon="scroll"');

    const container = document.createElement("div");
    container.innerHTML = serverHtml;
    document.body.appendChild(container);

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    let root: ReturnType<typeof hydrateRoot> | null = null;
    try {
      act(() => {
        root = hydrateRoot(container, <SparkleBackground variant="scroll" />);
      });

      expect(consoleErrorSpy).not.toHaveBeenCalled();

      const icons = container.querySelectorAll("svg");
      expect(icons).toHaveLength(1);
      expect(icons[0]).toHaveAttribute("data-icon", "scroll");
    } finally {
      act(() => {
        root?.unmount();
      });
      container.remove();
      consoleErrorSpy.mockRestore();
    }
  });

  it("renders strictly one icon matching each contextual variant", () => {
    for (const variant of ALL_VARIANTS) {
      const { container, unmount } = render(
        <SparkleBackground variant={variant} />,
      );
      const icons = container.querySelectorAll("svg");
      expect(icons).toHaveLength(1);
      expect(icons[0]).toHaveAttribute("data-icon", variant);
      unmount();
    }
  });

  it("positions accents consistently at the bottom right with floating animation", () => {
    const { container } = render(<SparkleBackground variant="code" size={34} />);
    const outer = container.firstElementChild as HTMLElement;

    expect(outer).toHaveAttribute("aria-hidden", "true");
    expect(outer).toHaveAttribute("data-sparkle-accent", "code");
    expect(outer).toHaveAttribute("data-sparkle-position", "bottom-right");
    expect(outer).toHaveClass("-bottom-4", "right-0", "sm:-bottom-3", "sm:-right-10");
    expect(outer.style.width).toBe("34px");
    expect(outer.style.height).toBe("34px");

    const inner = outer.firstElementChild as HTMLElement;
    expect(inner).toHaveClass("animate-sparkle-float");
    expect(parseFloat(inner.style.animationDelay)).toBeLessThanOrEqual(0);
  });
});
