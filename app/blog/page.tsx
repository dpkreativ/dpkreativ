import { getData } from "@/lib/data";

export default async function Page() {
  const blogData = await getData(
    "https://dev.to/api/articles?username=dpkreativ"
  );

  return (
    <section>
      {/* Page title */}
      <h1 className="text-3xl text-center mb-10">Blog</h1>
      {/* Search */}
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

      {/* All articles here */}
      <section className="my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogData &&
          blogData.map((post: any) => (
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
    </section>
  );
}
