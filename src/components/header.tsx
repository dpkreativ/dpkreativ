"use client";

import { logo } from "@/assets/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Socials from "./socials";

export default function Header() {
  const [viewModal, setViewModal] = useState(false);

  return (
    <header className="w-full max-w-6xl mx-auto z-50 fixed top-0 bg-[--ghost-white] rounded-b-3xl">
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="w-max">
          <Link
            href="/"
            className="flex gap-3 items-center p-2 bg-black rounded-full"
          >
            <Image
              src={logo}
              alt="Divine's logo"
              className="logo invert"
              width={16}
            />
          </Link>
        </div>

        <div>
          <button onClick={() => setViewModal(!viewModal)}>
            {viewModal ? (
              <i className="ri-close-large-line text-3xl"></i>
            ) : (
              <i className="ri-menu-line text-3xl"></i>
            )}
          </button>
        </div>
      </div>

      {viewModal ? (
        <nav className="px-5 py-10 flex flex-col gap-10 justify-between min-h-[calc(100vh-12rem)] h-full rounded-b-3xl bg-black text-white backdrop-blur-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 md:h-full gap-16 text-7xl text-right md:text-center font-serif">
            <Link onClick={() => setViewModal(!viewModal)} href="/">
              Home
            </Link>
            <Link onClick={() => setViewModal(!viewModal)} href="/work">
              Work
            </Link>
            <Link onClick={() => setViewModal(!viewModal)} href="/contact">
              Contact
            </Link>
          </div>

          <div className="w-max ml-auto md:mx-auto px-5">
            <Socials />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
