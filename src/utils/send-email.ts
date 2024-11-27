import { FormInputs } from "@/components/form";

export async function sendEmail(data: FormInputs) {
  const apiEndpoint = "/api/email";

  await fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
