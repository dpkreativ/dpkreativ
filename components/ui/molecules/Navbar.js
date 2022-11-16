import Brand from '../atoms/Brand';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Brand />
      <div className="font-semibold text-2xl">Menu</div>
    </nav>
  );
}
