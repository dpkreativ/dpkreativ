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
            font-weight: 300;
          }
          .dance {
            font-family: ${dancingScript.style.fontFamily};
          }
          .gray {
            color: #7c7c7c;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
