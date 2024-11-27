import { FormInputs } from "@/components/form";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

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

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `New project inquiry from ${fullName} (${email})`,
    text: `
      You have received a new project inquiry from ${fullName} (${email}).

      Contact Details:
      - Full Name: ${fullName}
      - Email: ${email}
      - Phone Number: ${phoneNumber}
      - Business Name: ${businessName}
      
      Project Details:
      - Description: ${projectDescription}
      - Budget Range: ${budgetRange}
      - Project Timeline: ${projectTimeline}
      - Preferred Contact Method: ${preferredContactMethod}
    `,
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
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
