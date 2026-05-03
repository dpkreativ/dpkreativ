import type { Metadata } from "next";
import WorkClient from "./work-client";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: "A showcase of digital products and engineering solutions built by Divine Orji. Explore featured projects across commerce, education, and social platforms.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    url: `${SITE_URL}/work`,
    title: "Work | Divine Orji",
    description: "Featured projects and engineering solutions delivered by Divine Orji.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Divine Orji",
    description: "Featured projects and engineering solutions delivered by Divine Orji.",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
