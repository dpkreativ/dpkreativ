import { render, screen } from "@testing-library/react";
import Work from "@/app/work/work-client";
import WorkProjectPage from "@/app/work/[id]/page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ fill, priority, ...props }: any) => (
    <img {...props} alt={props.alt ?? ""} />
  ),
}));

jest.mock("gsap", () => ({
  registerPlugin: jest.fn(),
  timeline: jest.fn(() => ({
    from: jest.fn().mockReturnThis(),
  })),
}));

jest.mock("@gsap/react", () => ({
  useGSAP: jest.fn(),
}));

jest.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: {},
}));

describe("Work Page", () => {
  it("renders live previews for embeddable projects and external fallback for non-embeddable ones", () => {
    render(<Work />);

    expect(screen.queryByText(/preview unavailable/i)).not.toBeInTheDocument();

    const crunchiesIframe = screen.getByTitle("Crunchies Online Live Site Preview");
    expect(crunchiesIframe).toHaveAttribute("src", "https://crunchiesonline.com");

    const bonjourIframe = screen.getByTitle("Bonjour Quick Bites Live Site Preview");
    expect(bonjourIframe).toHaveAttribute("src", "https://bonjourquickbites.com");

    expect(screen.queryByTitle("Grooovy Live Site Preview")).not.toBeInTheDocument();
    expect(screen.getByText(/Grooovy does not allow embedded previews/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open live site/i })).toHaveAttribute(
      "href",
      "https://grooovy.fun",
    );
  });

  it("passes embeddable to MiniBrowserIframe on the project detail page", async () => {
    const ui = await WorkProjectPage({
      params: Promise.resolve({ id: "grooovy" }),
    });
    render(ui);

    expect(screen.queryByTitle("Grooovy Live Site Preview")).not.toBeInTheDocument();
    expect(screen.getByText(/Grooovy does not allow embedded previews/i)).toBeInTheDocument();
  });
});
