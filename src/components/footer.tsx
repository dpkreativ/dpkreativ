import { logoword } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "./modal";

export default function Footer() {
  return (
    <footer className="p-4 bg-black text-white">
      <div className="md:flex md:items-center md:justify-between grid justify-center gap-4 p-4 max-w-6xl mx-auto">
        <div className="grid md:flex gap-4 items-center">
          <h2 className="font-serif text-2xl">Let's work together?</h2>

          <ContactModal />
        </div>
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
      </div>
    </footer>
  );
}
