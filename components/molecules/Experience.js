const Experience = ({ title, org, duration, children }) => {
  return (
    <div className="text-lg">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <div className="flex space-x-3 items-center">
        <h3>{org}</h3>
        <div className="w-1 h-1 bg-black"></div>
        <div>{duration}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Experience;
