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
            Click to view my&nbsp;
            <code className={styles.code}>GitHub</code>
          </p>
        </a>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h2 className={inter.className}>Divine Orji</h2>
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
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
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
