import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Divine Orji, a software engineer and product builder dedicated to engineering excellence, technical writing, and building high-impact digital products.",
  openGraph: {
    title: "About | Divine Orji",
    description: "The story behind Divine Orji, a software engineer focused on impact and clarity.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
