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
    const { container } = render(ui);

    expect(screen.queryByTitle("Grooovy Live Site Preview")).not.toBeInTheDocument();
    expect(screen.getByText(/Grooovy does not allow embedded previews/i)).toBeInTheDocument();

    const previewFrame = container.querySelector(".group\\/minibrowser");
    expect(previewFrame).toHaveClass("min-h-[240px]", "sm:min-h-[320px]");
  });

  it("renders mobile-responsive grids, buttons, metrics, and navigation on project detail pages", async () => {
    const ui = await WorkProjectPage({
      params: Promise.resolve({ id: "crunchies-online" }),
    });
    const { container } = render(ui);

    const main = container.querySelector("main");
    expect(main).toHaveClass("min-w-0");

    const outerGrid = main?.querySelector(":scope > div:last-child");
    expect(outerGrid).toHaveClass("grid", "grid-cols-1");

    const visitLink = screen.getByRole("link", { name: /visit project website/i });
    expect(visitLink).toHaveClass("w-full", "sm:w-auto");
    expect(visitLink.querySelector("button")).toHaveClass(
      "w-full",
      "sm:w-auto",
      "!tracking-widest",
      "!whitespace-normal",
    );

    const timelineCell = screen.getByText("[ TIMELINE ]").closest("div");
    expect(timelineCell).toHaveClass("min-w-0");
    expect(timelineCell?.parentElement).toHaveClass("grid-cols-2", "lg:grid-cols-4", "gap-px");

    const resultsHeading = screen.getByRole("heading", { name: /project results/i });
    const resultsGrid = resultsHeading.closest("section")?.querySelector(":scope > div:last-child");
    expect(resultsGrid).toHaveClass("grid-cols-1");
    expect(resultsGrid).not.toHaveClass("sm:grid-cols-3");

    const prevLink = screen.getByRole("link", { name: /previous case study/i });
    expect(prevLink.querySelector("div")).toHaveClass("flex-col", "lg:flex-row");

    const previewFrame = container.querySelector(".group\\/minibrowser");
    expect(previewFrame).toHaveClass("aspect-[4/3]", "sm:aspect-[16/9]", "min-h-[300px]");
  });

  it("adapts telemetry strip layout for 3-metric and 1-metric projects", async () => {
    const alchemyUi = await WorkProjectPage({
      params: Promise.resolve({ id: "alchemy-of-code" }),
    });
    const { unmount } = render(alchemyUi);

    expect(screen.getByText("1 Track")).toBeInTheDocument();
    const statusCell = screen.getByText("[ STATUS ]").closest("div");
    expect(statusCell).toHaveClass("col-span-2", "sm:col-span-1");
    expect(statusCell?.parentElement).toHaveClass("grid-cols-2", "sm:grid-cols-3");

    unmount();

    const nomaUi = await WorkProjectPage({
      params: Promise.resolve({ id: "noma" }),
    });
    render(nomaUi);

    const nomaStatusCell = screen.getByText("[ STATUS ]").closest("div");
    expect(nomaStatusCell?.parentElement).toHaveClass("grid-cols-1");
  });
});
