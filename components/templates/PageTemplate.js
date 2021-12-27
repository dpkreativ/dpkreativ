import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const PageTemplate = ({ activeIndex, children }) => {
  return (
    <div className="flex flex-col min-h-screen h-full justify-between">
      {/* Header Section */}
      <Header active={activeIndex} />

      {/* Main Content */}
      <main
        className="flex-grow flex-shrink h-full"
        style={{ flexBasis: "auto" }}
      >
        {children}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PageTemplate;
