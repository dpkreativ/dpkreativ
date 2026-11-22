import type { Metadata } from "next";
import Link from "next/link";
import SparkleBackground from "@/components/sparkle-background";

export const metadata: Metadata = {
  title: "Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-5 relative overflow-hidden">
      <div className="relative w-fit">
        <SparkleBackground variant="compass" size={28} />
        <h1>Page not found</h1>
      </div>
      <p>The page may have moved, or the address may be incorrect.</p>
      <Link href="/">Return home</Link>
    </main>
  );
}
