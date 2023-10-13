import { getData } from "@/lib/utils";

export default async function Page() {
  const blogData = await getData(
    "https://dev.to/api/articles?username=dpkreativ"
  );

  return (
    <>
      {/* Page title and Search */}
      <section className="w-full max-w-4xl mx-auto p-5">
        {/* Page title */}
        <h1 className="text-3xl text-center">Blog</h1>
        {/* Search - might need to change this component to a client component, and fetch the data with useEffect, so I can implement search with useState */}
        {/* <aside className="my-5">
        <p className="text-xs">Wanna find something more specific?</p>
        <form className="card w-max mx-auto">
          <input
            type="text"
            placeholder="Search"
            // className="bg-transparent"
          />
        </form>
      </aside> */}
      </section>

      {/* All articles here */}
      <section className="w-full max-w-4xl mx-auto p-5 grid md:grid-cols-2 gap-5">
        {blogData?.map((post: any) => (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            key={post.id}
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="my-2 text-sm">{post.description}</p>
          </a>
        ))}
      </section>
    </>
  );
}
