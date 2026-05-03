import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Divine Orji for collaboration, speaking engagements, or engineering projects. Let's build something iconic.",
  openGraph: {
    title: "Contact | Divine Orji",
    description: "Connect with Divine Orji for high-impact software engineering projects.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
