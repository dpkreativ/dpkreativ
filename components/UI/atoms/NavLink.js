import Link from 'next/link';

const NavLink = ({
  active,
  children,
  rightBorder,
  leftBorder,
  bottomBorder,
  url = '/',
  target = '',
}) => {
  return (
    <Link href={url}>
      <a
        target={target}
        rel="noreferrer"
        className={`text-secondary-01 border-line relative block ${
          rightBorder && 'border-r'
        } ${leftBorder && 'border-l'} ${bottomBorder && 'border-b'}`}
      >
        <div className={`p-5 ${active ? 'text-primary-04' : ''}`}>
          {children}
        </div>
        <div
          className={`h-1 w-full absolute bottom-0 ${
            active ? 'bg-accent-01' : 'bg-transparent'
          }`}
        ></div>
      </a>
    </Link>
  );
};

export default NavLink;
