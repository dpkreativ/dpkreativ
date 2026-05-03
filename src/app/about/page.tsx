import type { Metadata } from "next";
import AboutClient from "./about-client";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Divine Orji, a software engineer and product builder dedicated to engineering excellence, technical writing, and building high-impact digital products.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: "About | Divine Orji",
    description: "The story behind Divine Orji, a software engineer focused on impact and clarity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Divine Orji",
    description: "The story behind Divine Orji, a software engineer focused on impact and clarity.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
