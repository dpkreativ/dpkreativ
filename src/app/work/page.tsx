import type { Metadata } from "next";
import WorkClient from "./work-client";

export const metadata: Metadata = {
  title: "Work",
  description: "A showcase of digital products and engineering solutions built by Divine Orji. Explore featured projects across commerce, education, and social platforms.",
  openGraph: {
    title: "Work | Divine Orji",
    description: "Featured projects and engineering solutions delivered by Divine Orji.",
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
