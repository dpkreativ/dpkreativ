"use client";

import { logo } from "@/assets/data";
import { CloseIcon, HamburgerIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Socials from "./socials";

export default function Header() {
  const [viewModal, setViewModal] = useState(false);

  return (
    <header className="max-w-6xl mx-auto z-50 sticky top-0 bg-[--ghost-white]">
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
            {viewModal ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {viewModal ? (
        <nav className="p-5 flex flex-col justify-between h-[calc(100vh-12rem)]">
          <div className="grid md:grid-cols-2 justify-end items-center md:h-full gap-16 text-7xl text-right md:text-center font-serif">
            <Link onClick={() => setViewModal(!viewModal)} href="/">
              Home
            </Link>
            <Link onClick={() => setViewModal(!viewModal)} href="/work">
              Work
            </Link>
          </div>

          <Socials />
        </nav>
      ) : null}
    </header>
  );
}
