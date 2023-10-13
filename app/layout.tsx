import { fonts, logo } from "@/assets";
import { AnalyticsWrapper } from "@/components/analytics";
import { GitHub, LinkedIn, Twitter } from "@/components/icons";
import "@/styles/globals.css";
import styles from "@/styles/layout.module.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.className}>
      <head />

      <body className={styles.layout}>
        {/* Header */}
        <header className={`max-w-4xl mx-auto ${styles.header}`}>
          <div className={styles.top}>
            <Link href="/" className="flex gap-3 items-center">
              <Image
                src={logo}
                alt="Divine's logo"
                className="logo"
                width={30}
                height={30}
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
        <main className="py-28 grid gap-16">{children}</main>

        {/* Vercel analytics */}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
