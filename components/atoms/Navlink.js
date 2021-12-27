import Link from "next/link";

const Navlink = ({ active, children, url }) => {
  return (
    <Link href={url} passHref>
      <a>
        <li
          className={`text-base border-b-4 border-white py-1 ${
            active ? "border-purple-600" : ""
          }`}
        >
          {children}
        </li>
      </a>
    </Link>
  );
};

export default Navlink;
