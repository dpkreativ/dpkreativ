import { act } from "react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { render } from "@testing-library/react";
import SparkleBackground from "@/components/sparkle-background";

describe("SparkleBackground", () => {
  it("renders a single sparkle icon without hydration warnings", () => {
    const serverHtml = renderToString(<SparkleBackground variant="sparkle" />);
    expect(serverHtml).toContain('data-icon="sparkle"');
    expect(serverHtml).not.toContain('data-icon="lightning"');

    const container = document.createElement("div");
    container.innerHTML = serverHtml;
    document.body.appendChild(container);

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    let root: ReturnType<typeof hydrateRoot> | null = null;
    try {
      act(() => {
        root = hydrateRoot(container, <SparkleBackground variant="sparkle" />);
      });

      expect(consoleErrorSpy).not.toHaveBeenCalled();

      const icons = container.querySelectorAll("svg");
      expect(icons).toHaveLength(1);
      expect(icons[0]).toHaveAttribute("data-icon", "sparkle");
    } finally {
      act(() => {
        root?.unmount();
      });
      container.remove();
      consoleErrorSpy.mockRestore();
    }
  });

  it("renders either sparkle or lightning, never both", () => {
    const { container: sparkleContainer } = render(
      <SparkleBackground variant="sparkle" />,
    );
    expect(
      sparkleContainer.querySelectorAll('svg[data-icon="sparkle"]'),
    ).toHaveLength(1);
    expect(
      sparkleContainer.querySelectorAll('svg[data-icon="lightning"]'),
    ).toHaveLength(0);

    const { container: lightningContainer } = render(
      <SparkleBackground variant="lightning" />,
    );
    expect(
      lightningContainer.querySelectorAll('svg[data-icon="lightning"]'),
    ).toHaveLength(1);
    expect(
      lightningContainer.querySelectorAll('svg[data-icon="sparkle"]'),
    ).toHaveLength(0);
  });

  it("applies floating animation styles and decorative accessibility attributes", () => {
    const { container } = render(
      <SparkleBackground variant="lightning" size={30} rotate={-12} delay={-2} />,
    );
    const outer = container.firstElementChild as HTMLElement;
    expect(outer).toHaveAttribute("aria-hidden", "true");
    expect(outer).toHaveAttribute("data-sparkle-accent", "lightning");
    expect(outer.style.width).toBe("30px");
    expect(outer.style.height).toBe("30px");
    expect(outer.style.transform).toBe("rotate(-12deg)");

    const inner = outer.firstElementChild as HTMLElement;
    expect(inner).toHaveClass("animate-sparkle-float-alt");
    expect(inner.style.animationDelay).toBe("-2s");
  });
});
