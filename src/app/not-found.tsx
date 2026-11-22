import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen p-5">
      <h1>Page not found</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <Link href="/">Return home</Link>
    </main>
  );
}
