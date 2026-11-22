import type { FormInputs } from "@/components/form";

export async function sendEmail(data: FormInputs) {
  const response = await fetch("/api/email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Project brief could not be sent.");
  }
}
