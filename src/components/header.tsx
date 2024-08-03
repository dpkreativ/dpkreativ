import { GitHub, Twitter } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={`max-w-4xl mx-auto z-50`}>
      <div>
        <Link href="/" className="flex gap-3 items-center">
          {/* <Image
                src={logo}
                alt="Divine's logo"
                className="logo"
                width={30}
                height={30}
              /> */}
        </Link>
      </div>
      <nav>
        <div className="flex gap-5">
          <a
            href="https://twitter.com/dpkreativ"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com/dpkreativ"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
          >
            <GitHub />
          </a>
        </div>
      </nav>
    </header>
  );
}
