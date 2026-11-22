import type { Metadata } from "next";
import ContactClient from "./contact-client";
import { SITE_URL } from "@/lib/site";

const description = "Contact Divine Orji about building a new web app or improving an existing one. Send a project brief or reach out by email.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: `${SITE_URL}/contact`,
    title: "Contact | Divine Orji",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Divine Orji",
    description,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
