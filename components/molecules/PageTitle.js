const PageTitle = ({ title }) => {
  return (
    <div className="pt-12 md:pt-16">
      <div className="p-5 md:p-8 bg-purple-600 w-3/5">
        <h1 className="font-semibold text-right text-white text-4xl md:text-5xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageTitle;
