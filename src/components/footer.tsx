import { logoword, navlinks } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

export default function Footer() {
  return (
    <footer className="mt-16 md:mt-24 bg-faxx-dark dark:bg-black text-white w-full border-t-4 md:border-t-8 border-faxx-cyan dark:border-gray-700">
      <div className="md:flex md:items-center md:justify-between grid justify-center gap-12 md:gap-16 p-8 md:p-12 w-full max-w-7xl mx-auto">
        <div className="w-max mx-auto md:mx-0">
          <Link
            href="/"
            className="flex gap-3 items-center p-2 bg-faxx-dark dark:bg-black"
          >
            <Image
              src={logoword}
              alt="Divine's logo"
              className="logo invert"
              width={140}
              height={56}
            />
          </Link>
        </div>

        <div className="flex font-mono font-bold uppercase justify-center gap-6 md:gap-16">
          {navlinks
            .filter((l) => ["Home", "Work"].includes(l.title))
            .map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="flex items-center gap-2 hover:text-faxx-cyan transition-colors"
              >
                <i className={`${link.icon} text-xl`}></i>
                <span className="tracking-widest hidden sm:inline-block">
                  {link.title}
                </span>
              </Link>
            ))}
        </div>

        <div className="grid md:flex gap-4 md:gap-6 items-center text-center md:text-left">
          <h2 className="font-display uppercase text-2xl sm:text-3xl md:text-4xl">
            Work together?
          </h2>

          <Link href="/contact" className="w-max mx-auto">
            <Button className="!px-6 !py-3">
              <i className="ri-rocket-fill text-xl"></i>
              <span>START HERE</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
