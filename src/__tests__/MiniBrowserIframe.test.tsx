import { render, screen, fireEvent } from "@testing-library/react";
import MiniBrowserIframe from "@/components/mini-browser-iframe";

describe("MiniBrowserIframe", () => {
  it("renders live iframe without capture controls when url is provided", () => {
    const { container } = render(
      <MiniBrowserIframe url="https://merphils.com" title="Merphils" />,
    );

    expect(screen.getByText("merphils.com")).toBeInTheDocument();
    expect(screen.getByTitle("Merphils Live Site Preview")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /capture/i })).not.toBeInTheDocument();
    expect(container.querySelector("img")).not.toBeInTheDocument();
    expect(screen.queryByText("LIVE EMBED")).not.toBeInTheDocument();
  });

  it("links directly to sites that block iframe embedding", () => {
    render(<MiniBrowserIframe url="https://grooovy.fun" title="Grooovy" embeddable={false} />);

    expect(screen.queryByTitle("Grooovy Live Site Preview")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Open live site" })).toHaveAttribute("href", "https://grooovy.fun");
  });

  it("waits to mount the live iframe while deferred and shows loading state until loaded", () => {
    const props = {
      url: "https://merphils.com",
      title: "Merphils",
    };
    const { rerender, container } = render(
      <MiniBrowserIframe {...props} liveLoading="deferred" />,
    );
    expect(screen.queryByTitle("Merphils Live Site Preview")).not.toBeInTheDocument();
    expect(container.querySelector("img")).not.toBeInTheDocument();

    rerender(<MiniBrowserIframe {...props} liveLoading="eager" />);
    const iframe = screen.getByTitle("Merphils Live Site Preview");
    expect(iframe).toHaveAttribute("loading", "eager");
    expect(screen.getByRole("status")).toBeInTheDocument();

    fireEvent.load(iframe);
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(container.querySelector("img")).not.toBeInTheDocument();
  });

  it("toggles interaction shield on click", () => {
    const handleInteractionChange = jest.fn();
    render(
      <MiniBrowserIframe
        url="https://merphils.com"
        title="Merphils"
        onInteractionChange={handleInteractionChange}
      />,
    );

    fireEvent.load(screen.getByTitle("Merphils Live Site Preview"));
    const interactButton = screen.getByRole("button", { name: /click to interact/i });
    fireEvent.click(interactButton);

    expect(handleInteractionChange).toHaveBeenCalledWith(true);
    expect(screen.getByRole("button", { name: /lock scroll/i })).toBeInTheDocument();
  });
});
