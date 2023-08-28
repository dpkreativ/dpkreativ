import Link from "next/link";

export default function Page() {
  return (
    <section>
      {/* Page title */}
      <h1 className="text-3xl text-center mb-10">Projects</h1>

      {/* All projects here */}
      <section>
        <p className="text-center">
          This page is still in development. Please check back later. Thank you!
        </p>
        <Link href="/" className="card my-10 w-max mx-auto">
          <p>
            go to home <span>-&gt;</span>
          </p>
        </Link>
      </section>
    </section>
  );
}
