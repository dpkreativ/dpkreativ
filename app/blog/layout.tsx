import { AnalyticsWrapper } from "@/components/analytics";
import Image from "next/image";
import { Inter } from "@next/font/google";
import "@/styles/globals.css";
import Link from "next/link";
import { GitHub, LinkedIn, Twitter } from "@/components/icons";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Head */}
      <head />

      {/* Body (main website layout) */}
      <body className={inter.className}>
        {/* Header and navigation */}
        <header className="box">
          <div>
            <Link href="/">
              <Image
                src="/Logo-02.svg"
                alt="Kreativ Logo"
                className="logo"
                width={100}
                height={24}
                priority
              />
            </Link>
          </div>

          <nav>
            <div className="flex gap-5">
              <a
                href="https://github.com/dpkreativ"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
              >
                <GitHub />
              </a>
              <a
                href="https://linkedin.com/in/dpkreativ"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
              >
                <LinkedIn />
              </a>
              <a
                href="https://twitter.com/dpkreativ"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
              >
                <Twitter />
              </a>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="box">{children}</main>

        {/* Vercel analytics */}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
