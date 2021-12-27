import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const PageTemplate = ({ activeIndex, children }) => {
  return (
    <>
      {/* Header Section */}
      <Header active={activeIndex} />

      {/* Main Content */}
      <main className="min-h-screen">{children}</main>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default PageTemplate;
