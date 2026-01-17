import type { Metadata } from "next";
import {
  DM_Mono,
  DM_Sans,
  DM_Serif_Display,
  Give_You_Glory,
} from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Preloader from "@/components/preloader";

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
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
});
const script = Give_You_Glory({
  weight: "400",
  variable: "--font-script",
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
      className={`${mono.variable} ${sans.variable} ${script.variable} ${serif.variable}`}
    >
      <body className="font-sans bg-[--ghost-white] flex flex-col min-h-screen items-center">
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
