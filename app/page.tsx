import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a
          href="https://github.com/dpkreativ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            <code className={styles.code}>GitHub</code>
          </p>
        </a>
        <div>
          <a
            href="https://linkedin.com/in/dpkreativ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered By{' '}
            <Image
              src="/Logo-02.svg"
              alt="Kreativ Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h2 className={inter.className}>
          <div>Divine Orji</div>
          <div>software engineer</div>
          <div>technical writer</div>
        </h2>
      </div>

      <div className={styles.grid}>
        <a
          href="https://blog.dpkreativ.dev"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Blog <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            A collection of all my technical articles. Check them out.
          </p>
        </a>

        <a
          href="https://twitter.com/dpkreativ"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Twitter <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Shitposts, memes, and the occasional geeky stuff.
          </p>
        </a>

        <a
          href="https://linkedin.com/in/dpkreativ"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            LinkedIn <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Professional posts about software development.
          </p>
        </a>
      </div>
    </main>
  );
}
