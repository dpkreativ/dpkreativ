import { render, screen, fireEvent } from "@testing-library/react";
import MiniBrowserIframe from "@/components/mini-browser-iframe";

// Mock Next.js Image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ fill, priority, ...props }: any) => (
    <img {...props} alt={props.alt ?? ""} />
  ),
}));

describe("MiniBrowserIframe", () => {
  it("renders live iframe when url is provided", () => {
    render(
      <MiniBrowserIframe
        url="https://merphils.com"
        title="Merphils"
        fallbackImage="/images/project-demos/merphils.png"
      />
    );

    expect(screen.getByText("merphils.com")).toBeInTheDocument();
    expect(screen.getByTitle("Merphils Live Site Preview")).toBeInTheDocument();
    expect(screen.getByText("LIVE EMBED")).toBeInTheDocument();
  });

  it("renders fallback image when in screenshot mode", () => {
    render(
      <MiniBrowserIframe
        url="https://merphils.com"
        title="Merphils"
        fallbackImage="/images/project-demos/merphils.png"
      />
    );

    const captureButton = screen.getByRole("button", { name: /capture/i });
    fireEvent.click(captureButton);

    expect(screen.getByRole("img", { name: "Merphils" })).toBeInTheDocument();
  });

  it("toggles interaction shield on click", () => {
    const handleInteractionChange = jest.fn();
    render(
      <MiniBrowserIframe
        url="https://merphils.com"
        title="Merphils"
        fallbackImage="/images/project-demos/merphils.png"
        onInteractionChange={handleInteractionChange}
      />
    );

    const interactButton = screen.getByRole("button", { name: /click to interact/i });
    fireEvent.click(interactButton);

    expect(handleInteractionChange).toHaveBeenCalledWith(true);
    expect(screen.getByRole("button", { name: /lock scroll/i })).toBeInTheDocument();
  });
});
