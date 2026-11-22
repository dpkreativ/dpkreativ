import { fireEvent, render, screen } from "@testing-library/react";
import ContactForm from "@/components/form";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

function submitBrief() {
  render(<ContactForm />);
  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Example Name" } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: "you@example.com" } });
  const brief = screen.getByRole("textbox", { name: /project brief/i });
  expect(brief).toHaveAccessibleDescription(/describe what you want to build or improve/i);
  fireEvent.change(brief, { target: { value: "A site for ordering bread online." } });
  fireEvent.click(screen.getByRole("button", { name: "Send project brief" }));
}

test("thanks the visitor after the brief is sent", async () => {
  globalThis.fetch = jest.fn().mockResolvedValue({ ok: true });
  submitBrief();

  expect(await screen.findByRole("heading", { name: "Thanks for getting in touch" })).toBeInTheDocument();
});

test("gives a recovery path when the brief cannot be sent", async () => {
  globalThis.fetch = jest.fn().mockResolvedValue({ ok: false, status: 500 });
  submitBrief();

  expect(await screen.findByRole("alert")).toHaveTextContent("Try again or email me directly.");
  expect(screen.queryByRole("heading", { name: "Thanks for getting in touch" })).not.toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: /project brief/i })).toHaveValue("A site for ordering bread online.");
});
