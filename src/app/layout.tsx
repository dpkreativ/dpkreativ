import type { Metadata } from "next";
import {
  Space_Mono,
  Outfit,
  Archivo_Black,
  Give_You_Glory,
} from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Preloader from "@/components/preloader";
import { ThemeProvider } from "@/components/theme-provider";

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
      className={`${mono.variable} ${body.variable} ${display.variable} ${script.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-faxx-light dark:bg-faxx-dark text-faxx-dark dark:text-faxx-light flex flex-col min-h-screen items-center selection:bg-faxx-blue selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <Preloader />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
