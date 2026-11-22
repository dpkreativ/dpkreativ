import { act } from "react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { render } from "@testing-library/react";
import SparkleBackground from "@/components/sparkle-background";

describe("SparkleBackground", () => {
  it("hydrates SSR HTML without mismatch warnings and renders 5-8 icons on the client", () => {
    const serverHtml = renderToString(<SparkleBackground />);
    expect(serverHtml).not.toContain("<svg");

    const container = document.createElement("div");
    container.innerHTML = serverHtml;
    document.body.appendChild(container);

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    let root: ReturnType<typeof hydrateRoot> | null = null;
    try {
      act(() => {
        root = hydrateRoot(container, <SparkleBackground />);
      });

      expect(consoleErrorSpy).not.toHaveBeenCalled();

      const icons = container.querySelectorAll("svg");
      expect(icons.length).toBeGreaterThanOrEqual(5);
      expect(icons.length).toBeLessThanOrEqual(8);
    } finally {
      act(() => {
        root?.unmount();
      });
      container.remove();
      consoleErrorSpy.mockRestore();
    }
  });

  it("keeps icon positions stable across remounts in the same session", () => {
    const first = render(<SparkleBackground />);
    const firstHtml = first.container.innerHTML;
    first.unmount();

    const second = render(<SparkleBackground />);
    expect(second.container.innerHTML).toBe(firstHtml);
  });

  it("places icons inside the visible viewport with full-size animation wrappers", () => {
    const { container } = render(<SparkleBackground />);
    const wrappers = container.querySelectorAll(".animate-sparkle-float");

    expect(wrappers.length).toBeGreaterThanOrEqual(5);
    wrappers.forEach((wrapper) => {
      expect(wrapper).toHaveClass("h-full", "w-full");
      const parent = wrapper.parentElement as HTMLElement;
      const left = parseFloat(parent.style.left);
      const top = parseFloat(parent.style.top);
      expect(left).toBeGreaterThanOrEqual(4);
      expect(left).toBeLessThanOrEqual(94);
      expect(top).toBeGreaterThanOrEqual(10);
      expect(top).toBeLessThanOrEqual(92);
    });
  });
});
