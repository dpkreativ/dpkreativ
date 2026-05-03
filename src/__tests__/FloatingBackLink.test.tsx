import React from "react";
import { render, screen } from "@testing-library/react";
import FloatingBackLink from "@/components/floating-back-link";

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, className }: any) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

describe("FloatingBackLink", () => {
  it("renders the button in a sticky top position", () => {
    render(<FloatingBackLink href="/blog" label="Back to Archive" />);

    expect(screen.getByRole("link", { name: /back to archive/i }).parentElement).toHaveClass(
      "sticky",
      "top-24",
      "md:top-28",
    );
  });
});
