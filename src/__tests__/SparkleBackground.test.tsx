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
  it("hydrates SSR HTML without mismatch warnings and renders a single icon on the client", () => {
    const serverHtml = renderToString(<SparkleBackground variant="code" />);
    expect(serverHtml).toBe("");

    const container = document.createElement("div");
    container.innerHTML = serverHtml;
    document.body.appendChild(container);

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    let root: ReturnType<typeof hydrateRoot> | null = null;
    try {
      act(() => {
        root = hydrateRoot(container, <SparkleBackground variant="code" />);
      });

      expect(consoleErrorSpy).not.toHaveBeenCalled();

      const icons = container.querySelectorAll("svg");
      expect(icons).toHaveLength(1);
      expect(icons[0]).toHaveAttribute("data-icon", "code");
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

  it("randomizes positions across sibling headings without repeating back-to-back slots", () => {
    const { container } = render(
      <div>
        <SparkleBackground variant="code" />
        <SparkleBackground variant="lightning" />
        <SparkleBackground variant="pen" />
        <SparkleBackground variant="layers" />
      </div>,
    );

    const accents = Array.from(
      container.querySelectorAll("[data-sparkle-accent]"),
    );
    expect(accents).toHaveLength(4);

    const positions = accents.map((el) =>
      el.getAttribute("data-sparkle-position"),
    );
    expect(positions.every(Boolean)).toBe(true);
    for (let i = 1; i < positions.length; i++) {
      expect(positions[i]).not.toBe(positions[i - 1]);
    }

    accents.forEach((el) => {
      const inner = el.firstElementChild as HTMLElement;
      expect(el).toHaveAttribute("aria-hidden", "true");
      expect(
        inner.classList.contains("animate-sparkle-float") ||
          inner.classList.contains("animate-sparkle-float-alt"),
      ).toBe(true);
      expect(parseFloat(inner.style.animationDelay)).toBeLessThanOrEqual(0);
    });
  });
});
