import { AnalyticsWrapper } from "@/components/analytics";
import { GitHub, LinkedIn, Twitter } from "@/components/icons";
import "@/styles/globals.css";
import styles from "@/styles/layout.module.css";
import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={styles.layout}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.top}>
            <Link href="/">
              <Image
                src="/Logo-01.svg"
                alt="Divine's logo"
                className="logo"
                width={36}
                height={36}
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
        <main className={styles.content}>{children}</main>

        {/* Vercel analytics */}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
