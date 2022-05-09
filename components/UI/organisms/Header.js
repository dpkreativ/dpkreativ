import Brand from '../atoms/Brand';

const Header = () => {
  return (
    <header className="border-b border-line">
      <div className="w-full max-w-xs p-5 md:border-r border-line">
        <Brand />
      </div>
      <nav></nav>
    </header>
  );
};

export default Header;
