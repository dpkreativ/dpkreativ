import type { Metadata } from 'next';
import './globals.css';
import { fonts } from '@/assets';

export const metadata: Metadata = {
  title: 'Divine Orji | Software Engineer',
  description: 'Welcome to my playground!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <header></header>
        {children}
        <footer>
          <section className="p-5"></section>
        </footer>
      </body>
    </html>
  );
}
