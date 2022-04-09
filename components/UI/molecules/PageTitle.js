const PageTitle = ({ title }) => {
  return (
    <div className="p-5 md:p-8 bg-primary-normal w-3/5">
      <h1 className="font-semibold text-right text-white text-3xl md:text-5xl">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
