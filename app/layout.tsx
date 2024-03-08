import { fonts, logo } from "@/assets";
import { AnalyticsWrapper } from "@/components/analytics";
import { GitHub, Twitter } from "@/components/icons";
import { profileImage } from "@/lib/data";
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
        <header className={`max-w-4xl mx-auto z-50 ${styles.header}`}>
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
                href="https://twitter.com/dpkreativ"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
              >
                <Twitter />
              </a>
              <a
                href="https://github.com/dpkreativ"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
              >
                <GitHub />
              </a>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="py-28 grid gap-16">{children}</main>

        {/* Footer */}
        <footer className="grid gap-16">
          {/* About Me */}
          <section className="w-full max-w-4xl mx-auto p-5 grid gap-10">
            <h2 className="text-3xl">About me</h2>

            <div className="grid md:flex gap-10">
              {/* Picture */}
              <a
                href="https://linkedin.com/in/dpkreativ"
                target="_blank"
                className="relative w-full aspect-square card overflow-clip"
              >
                {profileImage ? (
                  <Image
                    src={profileImage}
                    alt="Divine Orji's profile"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                    priority
                  />
                ) : null}
              </a>

              {/* Text */}
              <div className="grid gap-5 h-max text-lg text-slate-800/90 dark:text-slate-300">
                <p>
                  Hi! I'm<span className="font-bold"> Divine</span>, a web
                  developer passionate about creating interactive and engaging
                  websites.
                </p>
                <p>
                  I have a strong understanding of HTML, CSS, JavaScript, and
                  frontend frameworks. I also have experience with CMS
                  platforms, backend technologies, and serverless functions.
                </p>
                <p>
                  In addition to my coding skills, I am adept at explaining
                  complex concepts in a clear and concise way. I am also active
                  in developer communities, collaborating with others,
                  documenting my work, and sharing my experiences.
                </p>
              </div>
            </div>
          </section>

          {/* Contact me */}
          <section className="w-full max-w-4xl mx-auto p-5 grid gap-10">
            <div className="grid gap-3">
              <h2 className="text-3xl">Contact me</h2>
              <p className="code text-xs text-slate-800/90 dark:text-slate-300">
                Let's get schwifty!
              </p>
            </div>

            <div className="pb-28">
              {/* The contact form will be displayed here */}
            </div>
          </section>
        </footer>

        {/* Vercel analytics */}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
