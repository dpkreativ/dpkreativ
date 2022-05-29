const NavLink = ({
  children,
  className,
  rightBorder,
  leftBorder,
  bottomBorder,
  active,
}) => {
  return (
    <div
      className={`text-secondary-01 border-line relative ${
        rightBorder && 'border-r'
      } ${leftBorder && 'border-l'} ${bottomBorder && 'border-b'}`}
    >
      <div className="p-5">{children}</div>
      <div
        className={`h-1 w-full absolute bottom-0 ${
          active ? 'bg-accent-01' : 'bg-transparent'
        }`}
      ></div>
    </div>
  );
};

export default NavLink;
