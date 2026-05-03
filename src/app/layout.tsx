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
import { cn } from "@/lib/utils";
import Script from "next/script";

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
  metadataBase: new URL("https://dpkreativ.vercel.app"),
  title: {
    default: "Divine Orji | Software Engineer & Product Builder",
    template: "%s | Divine Orji",
  },
  description: "Divine Orji is a software engineer and product leader building high-impact digital experiences. Focused on engineering excellence, technical writing, and community growth.",
  keywords: [
    "Divine Orji",
    "Software Engineer",
    "Product Engineer",
    "Frontend Engineer",
    "Technical Writer",
    "Next.js Developer",
    "React Developer",
    "The Kreativ Studio",
    "Nigeria",
    "Abia",
  ],
  authors: [{ name: "Divine Orji", url: "https://github.com/dpkreativ" }],
  creator: "Divine Orji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dpkreativ.vercel.app",
    siteName: "Divine Orji",
    title: "Divine Orji | Software Engineer & Product Builder",
    description: "Building high-impact digital experiences with a focus on engineering excellence and user value.",
    images: [
      {
        url: "/og-image.png", // We should probably create or point to an image
        width: 1200,
        height: 630,
        alt: "Divine Orji | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Orji | Software Engineer",
    description: "Building high-impact digital experiences with a focus on engineering excellence and user value.",
    creator: "@dpkreativ",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var theme = localStorage.getItem("theme");
                if (!theme) theme = "system";
                if (theme === "system") {
                  theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                }
                document.documentElement.classList.remove("dark", "light");
                document.documentElement.classList.add(theme);
              } catch (e) {}
            })();
          `}
        </Script>
      </head>
      <body className="font-body bg-faxx-light dark:bg-faxx-dark text-faxx-dark dark:text-faxx-light flex flex-col min-h-screen items-center selection:bg-faxx-blue selection:text-white transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
