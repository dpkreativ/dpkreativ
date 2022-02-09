const Experience = ({ title, org, duration, children }) => {
  return (
    <div>
      <h2 className="font-semibold text-xl">{title}</h2>
      <div className="flex space-x-3 items-center text-base">
        <h3 className="font-semibold italic">{org}</h3>
        <div className="w-1 h-1 bg-black rounded-full"></div>
        <div>{duration}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Experience;
