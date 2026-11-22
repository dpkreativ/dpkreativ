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
});
