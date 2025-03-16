import { logoword } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

export default function Footer() {
  return (
    <footer className="p-4 mt-20 bg-black text-white w-full">
      <div className="md:flex md:items-center md:justify-between grid justify-center gap-12 p-4 w-full max-w-6xl mx-auto">
        <div className="w-max mx-auto md:mx-0">
          <Link
            href="/"
            className="flex gap-3 items-center p-2 bg-black rounded-full"
          >
            <Image
              src={logoword}
              alt="Divine's logo"
              className="logo invert"
              width={100}
            />
          </Link>
        </div>

        <div className="flex font-mono justify-center gap-8 md:gap-16">
          <Link href="/" className="flex items-baseline gap-2">
            <i className="ri-home-5-line"></i>
            <span>Home</span>
          </Link>
          <Link href="/work" className="flex items-baseline gap-2">
            <i className="ri-briefcase-line"></i>
            <span>Work</span>
          </Link>
        </div>

        <div className="grid md:flex gap-4 items-center">
          <h2 className="font-serif text-2xl">Let&apos;s work together?</h2>

          <Link href="/contact" className="w-max mx-auto">
            <Button>
              <i className="ri-rocket-fill"></i>
              <span>start here</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
