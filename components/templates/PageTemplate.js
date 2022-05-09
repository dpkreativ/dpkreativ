import Footer from '../UI/organisms/Footer';
import Header from '../UI/organisms/Header';

const PageTemplate = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen h-full justify-between">
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main
        className="flex-grow flex-shrink h-full"
        style={{ flexBasis: 'auto' }}
      >
        {children}
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PageTemplate;
