import { logoword } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-black text-white">
      <div className="md:flex md:items-center md:justify-between grid justify-center gap-8 p-4 w-full max-w-6xl mx-auto">
        <div className="grid md:flex gap-4 items-center">
          <h2 className="font-serif text-2xl">Let&apos;s work together?</h2>

          <Link
            className={`bg-white text-black border border-black/10 px-5 py-2 flex items-center gap-2 rounded-full shadow mx-auto w-max`}
            href="/contact"
          >
            start here
          </Link>
        </div>

        <div className="flex justify-center gap-8 underline font-bold">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
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
