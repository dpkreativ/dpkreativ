import type { Metadata } from "next";
import { DM_Mono, DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const mono = DM_Mono({
  weight: "400",
  variable: "--font-mono",
  subsets: ["latin"],
});
const sans = DM_Sans({
  weight: "400",
  variable: "--font-sans",
  subsets: ["latin"],
});
const serif = DM_Serif_Display({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divine Orji | Software Engineer",
  description: "Divine Orji's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${sans.variable} ${serif.variable}`}
    >
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
