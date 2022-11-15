import Navbar from '../molecules/Navbar';

export default function Header() {
  return (
    <header className="p-16 flex justify-between items-center">
      <Navbar />
      <div className="font-semibold text-2xl">Menu</div>
    </header>
  );
}
