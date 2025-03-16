import ContactForm from "@/components/form";

export default function Page() {
  return (
    <main className="flex-1 flex flex-col gap-8 w-full max-w-6xl mx-auto p-4 mt-16">
      <h1 className="font-serif text-4xl">
        Let&apos;s Build Something Exceptional Together
      </h1>

      <ContactForm />
    </main>
  );
}
