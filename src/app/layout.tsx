import type { Metadata } from "next";
import {
  Space_Mono,
  Outfit,
  Archivo_Black,
  Give_You_Glory, Geist } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeScript } from "@/components/theme-script";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const mono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
});
const body = Outfit({
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  subsets: ["latin"],
});
const display = Archivo_Black({
  weight: "400",
  variable: "--font-display",
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
      className={cn(mono.variable, body.variable, display.variable, script.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <ThemeProvider>
        <body className="font-body bg-faxx-light dark:bg-faxx-dark text-faxx-dark dark:text-faxx-light flex flex-col min-h-screen items-center selection:bg-faxx-blue selection:text-white transition-colors duration-300 overflow-x-hidden">
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
