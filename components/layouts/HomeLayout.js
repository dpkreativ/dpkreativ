import Footer from '../ui/organisms/Footer';
import Header from '../ui/organisms/Header';

export default function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
