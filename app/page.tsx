import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/page.module.css";
import Link from "next/link";
import { GitHub, LinkedIn, Twitter } from "@/components/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.top}>
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
      </div>

      <div className={styles.center}>
        <div>
          <h2 className={`text-5xl font-semibold ${inter.className}`}>Hi!</h2>

          <p className={`mt-10 ${styles.code}`}>
            I'm Divine. I began coding in 2019, and since then I've been
            exploring different technologies to make helpful software.
          </p>
          <p className={`my-10 ${styles.code}`}>
            I love creating attractive, user-friendly interfaces, and
            documenting my experiences with different aspects of software
            engineering.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <Link
          href="/projects"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            My projects <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Cool stuff I've worked on.</p>
        </Link>

        <Link href="/blog" className={styles.card}>
          <h2 className={inter.className}>
            My blog <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            All my musings on tech tools, developer experience, and one or two
            wacky stories.
          </p>
        </Link>

        <Link
          href="/contact"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Contact me <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Let's get schwifty!</p>
        </Link>
      </div>
    </main>
  );
}
