const PageTemplate = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen h-full justify-between">
      {/* Header Section */}

      {/* Main Content */}
      <main
        className="flex-grow flex-shrink h-full"
        style={{ flexBasis: 'auto' }}
      >
        {children}
      </main>

      {/* Footer Section */}
    </div>
  );
};

export default PageTemplate;
