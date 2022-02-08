import Link from "next/link";

const Navlink = ({ active, children, url }) => {
  return (
    <Link href={url} passHref>
      <a>
        <li
          className={`text-sm md:text-base border-b md:border-b-4 py-1 ${
            active ? "border-primary-normal" : "border-white"
          }`}
        >
          {children}
        </li>
      </a>
    </Link>
  );
};

export default Navlink;
