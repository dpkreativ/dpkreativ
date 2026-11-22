import type { Metadata } from "next";
import AboutClient from "./about-client";
import { SITE_URL } from "@/lib/site";

const description =
  "Meet Divine Orji, a full-stack software engineer and Head of Engineering at The Kreativ Studio. Explore his work in food ordering, education, and publishing.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: `${SITE_URL}/about`,
    title: "About | Divine Orji",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Divine Orji",
    description,
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
