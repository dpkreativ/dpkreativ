import { FormInputs } from "@/components/form";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const {
    fullName,
    email,
    phoneNumber,
    businessName,
    projectDescription,
    budgetRange,
    projectTimeline,
    preferredContactMethod,
  }: FormInputs = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const htmlContent = `
<html>
<head>
  <meta name="viewport" content="width=device-width" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
</head>
<body style="font-family: Arial, sans-serif; background-color: #fafafa;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #eeeeee; border-radius: 5px;">
    <tr>
      <td style="padding: 20px;">
        <h1 style="font-size: 24px; margin-bottom: 20px; color: #333333;">New Project Inquiry</h1>

        <h2 style="font-size: 18px; margin-bottom: 10px; color: #333333;">Contact Details</h2>
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
          <tr>
            <td style="width: 50%; padding: 5px;"><strong>Full Name:</strong></td>
            <td style="width: 50%; padding: 5px;">${fullName}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 5px;"><strong>Email:</strong></td>
            <td style="width: 50%; padding: 5px;">${email}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 5px;"><strong>Phone Number:</strong></td>
            <td style="width: 50%; padding: 5px;">${phoneNumber}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 5px;"><strong>Business Name:</strong></td>
            <td style="width: 50%; padding: 5px;">${businessName}</td>
          </tr>
        </table>

        <h2 style="font-size: 18px; margin-bottom: 10px; color: #333333;">Project Details</h2>
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
          <tr>
            <td style="width: 50%; padding: 5px;"><strong>Description:</strong></td>
            <td style="width: 50%; padding: 5px;">${projectDescription}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 5px;"><strong>Budget Range:</strong></td>
            <td style="width: 50%; padding: 5px;">${budgetRange}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 5px;"><strong>Project Timeline:</strong></td>
            <td style="width: 50%; padding: 5px;">${projectTimeline}</td>
          </tr>
          <tr>
            <td style="width: 50%; padding: 5px;"><strong>Preferred Contact Method:</strong></td>
            <td style="width: 50%; padding: 5px;">${preferredContactMethod}</td>
          </tr>
        </table>

        <p style="margin-top: 20px; font-size: 12px; color: #888888;">This email was automatically generated from your contact form submission.</p>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `New project inquiry from ${fullName} (${email})`,
    html: htmlContent,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: `${err}` }, { status: 500 });
  }
}
