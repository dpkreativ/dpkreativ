"use client";

import { useRef } from "react";
import Button from "./button";
import ContactForm from "./form";

export default function ContactModal() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <section className="w-max mx-auto">
      <Button onClick={() => dialogRef.current?.showModal()}>start here</Button>
      <dialog
        ref={dialogRef}
        className="p-4 rounded-2xl backdrop:bg-black/85 w-max"
      >
        <button
          className="flex items-center justify-center w-5 h-5 bg-zinc-200 rounded-full shadow ml-auto"
          onClick={() => dialogRef.current?.close()}
        >
          <svg
            className="w-4 h-4 text-zinc-900"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
          <span className="sr-only">Close</span>
        </button>
        <ContactForm />
      </dialog>
    </section>
  );
}
