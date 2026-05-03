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
      <h2>We&apos;re still working on this page</h2>
      {/* <p>Could not find requested resource</p> */}
      <Link href="/">Return Home</Link>
    </main>
  );
}
