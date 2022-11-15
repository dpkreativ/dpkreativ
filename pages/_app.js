import { Dancing_Script, Inter } from '@next/font/google';
import '../styles/globals.css';

const inter = Inter();
const dancingScript = Dancing_Script();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${inter.style.fontFamily};
          }
          .dance {
            font-family: ${dancingScript.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
