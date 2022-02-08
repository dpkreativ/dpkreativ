const SectionTitle = ({ title }) => {
  return (
    <div
      className="w-max"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h1 className="text-2xl lg:text-4xl">{title}</h1>
      <div className="bg-primary-normal w-4/5 h-4 -mt-2"></div>
    </div>
  );
};

export default SectionTitle;
