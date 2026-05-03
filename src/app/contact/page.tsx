import type { Metadata } from "next";
import ContactClient from "./contact-client";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Divine Orji for collaboration, speaking engagements, or engineering projects. Let's build something iconic.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact | Divine Orji",
    description: "Connect with Divine Orji for high-impact software engineering projects.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Divine Orji",
    description: "Connect with Divine Orji for high-impact software engineering projects.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
