import type { Metadata } from "next";
import WorkClient from "./work-client";
import { SITE_URL } from "@/lib/site";

const description = "Explore Divine Orji’s web projects in online ordering, education, publishing, and events.";

export const metadata: Metadata = {
  title: "Work",
  description,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    url: `${SITE_URL}/work`,
    title: "Work | Divine Orji",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Divine Orji",
    description,
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
