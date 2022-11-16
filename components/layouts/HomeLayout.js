import Header from '../ui/organisms/Header';

export default function HomeLayout({ children }) {
  return (
    <>
      {/* Header */}
      <Header />
      <main>{children}</main>
      {/* Footer */}
    </>
  );
}
