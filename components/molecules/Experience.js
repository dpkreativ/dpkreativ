const Experience = ({ title, org, duration, children, location }) => {
  return (
    <div>
      <h2 className="font-bold text-xl">{title}</h2>
      <div className="lg:flex lg:space-x-3 items-center">
        <h3 className="italic text-base font-semibold">{org}</h3>
        <div className="hidden lg:block w-1 h-1 bg-black rounded-full"></div>
        <div className="flex space-x-3 items-center text-sm lg:text-base italic">
          <div>{location}</div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div>{duration}</div>
        </div>
      </div>
      <div className="mt-1">{children}</div>
    </div>
  );
};

export default Experience;
