import { act, fireEvent, render, screen } from "@testing-library/react";
import { projects } from "@/assets/data";
import HeroShowreel from "@/components/hero-showreel";

const featuredProjects = [
  { ...projects[0], slug: "first", title: "First project", url: "https://first.example", featured: true },
  { ...projects[0], slug: "second", title: "Second project", url: "https://second.example", featured: true },
  { ...projects[0], slug: "third", title: "Third project", url: "https://third.example", featured: true },
];

describe("HeroShowreel preview preloading", () => {
  const observers = new Map<string, (isIntersecting: boolean) => void>();
  const originalObserver = window.IntersectionObserver;
  const originalConnection = Object.getOwnPropertyDescriptor(navigator, "connection");

  beforeEach(() => {
    jest.useFakeTimers();
    observers.clear();
    window.IntersectionObserver = class implements IntersectionObserver {
      root = null;
      rootMargin: string;
      thresholds = [0];
      observe = jest.fn();
      disconnect = jest.fn();
      unobserve = jest.fn();
      takeRecords = () => [];

      constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
        this.rootMargin = options?.rootMargin ?? "0px";
        observers.set(options?.rootMargin ?? "viewport", (isIntersecting) => {
          act(() => callback([{ isIntersecting } as IntersectionObserverEntry], this));
        });
      }
    };
  });

  afterEach(() => {
    jest.useRealTimers();
    window.IntersectionObserver = originalObserver;
    if (originalConnection) {
      Object.defineProperty(navigator, "connection", originalConnection);
    } else {
      Reflect.deleteProperty(navigator, "connection");
    }
  });

  it("loads the first preview before it is visible and reuses the warmed next iframe", () => {
    const { container } = render(<HeroShowreel projects={featuredProjects} />);
    expect(container.querySelectorAll("iframe")).toHaveLength(0);

    observers.get("1200px 0px")?.(true);
    const first = screen.getByTitle("First project Live Site Preview");
    expect(first).toHaveAttribute("loading", "eager");
    expect(container.querySelector("img")).not.toBeInTheDocument();
    expect(container.querySelectorAll("iframe")).toHaveLength(1);
    fireEvent.load(first);

    const preloaded = screen.getByTitle("Second project Live Site Preview");
    expect(preloaded.closest("[inert]")).not.toBeNull();
    expect(container.querySelectorAll("iframe")).toHaveLength(2);
    fireEvent.load(preloaded);
    act(() => jest.advanceTimersByTime(10_000));
    expect(screen.getByRole("heading", { name: "First project" })).toBeInTheDocument();

    observers.get("viewport")?.(true);
    fireEvent.click(screen.getByRole("button", { name: "Next project" }));
    expect(screen.getByTitle("Second project Live Site Preview")).toBe(preloaded);
    expect(preloaded.closest("[inert]")).toBeNull();
  });

  it("keeps the current slide on screen until the next live embed has loaded", () => {
    render(<HeroShowreel projects={featuredProjects} />);
    observers.get("viewport")?.(true);
    fireEvent.load(screen.getByTitle("First project Live Site Preview"));

    act(() => jest.advanceTimersByTime(10_000));
    expect(screen.getByRole("heading", { name: "First project" })).toBeInTheDocument();

    fireEvent.load(screen.getByTitle("Second project Live Site Preview"));
    act(() => jest.advanceTimersByTime(5_000));
    expect(screen.getByRole("heading", { name: "Second project" })).toBeInTheDocument();
  });

  it("only loads the visible preview when data saver is enabled", () => {
    Object.defineProperty(navigator, "connection", {
      configurable: true,
      value: { saveData: true },
    });
    const { container } = render(<HeroShowreel projects={featuredProjects} />);

    expect(observers.has("1200px 0px")).toBe(false);
    expect(container.querySelectorAll("iframe")).toHaveLength(0);

    observers.get("viewport")?.(true);
    fireEvent.load(screen.getByTitle("First project Live Site Preview"));
    act(() => jest.advanceTimersByTime(10_000));
    expect(container.querySelectorAll("iframe")).toHaveLength(1);
    expect(screen.getByRole("heading", { name: "First project" })).toBeInTheDocument();
  });
});
