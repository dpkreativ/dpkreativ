import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const PageTemplate = ({ activeIndex, children }) => {
  return (
    <>
      {/* Header Section */}
      <Header active={activeIndex} />

      {/* Main Content */}
      {children}

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default PageTemplate;
