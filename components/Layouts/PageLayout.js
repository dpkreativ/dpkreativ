import Footer from '../UI/organisms/Footer';
import Header from '../UI/organisms/Header';

const PageLayout = ({ activeIndex, children }) => {
  return (
    <div className="grid grid-rows-[max-content_minmax(0,100%)_max-content] min-h-screen h-full">
      {/* Header Section */}
      <Header activeTab={activeIndex} />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PageLayout;