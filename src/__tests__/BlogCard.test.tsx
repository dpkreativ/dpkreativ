import React from "react";
import { render, screen } from "@testing-library/react";
import BlogCard from "@/components/blog-card";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, className }: any) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

describe("BlogCard", () => {
  it("uses a valid dark-mode text class for the Read Article CTA", () => {
    render(
      <BlogCard
        blog={{
          title: "Testing Dark Mode Contrast",
          excerpt: "Ensuring article cards stay readable in dark mode.",
          date: "2026-10-05T00:00:00.000Z",
          source: "Hashnode",
          url: "/blog/testing-dark-mode-contrast",
          slug: "testing-dark-mode-contrast",
        }}
      />,
    );

    const readArticleCta = screen.getByText("Read Article").parentElement;

    expect(readArticleCta).toHaveClass("dark:text-white/70", "dark:group-hover:text-white");
    expect(readArticleCta).not.toHaveClass("dark:text-white/58");
  });
});
