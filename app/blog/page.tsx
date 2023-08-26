import { blogData } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section>
        <div className="flex gap-3 flex-wrap">
          <span className="card">All</span>
          <span className="card">Dev.to</span>
          <span className="card">Hashnode</span>
          <span className="card">FreeCodeCamp</span>
          <span className="card">Others</span>
        </div>

        {/* Search here */}
        <div className="my-5">
          <p className="text-xs">Wanna find something more specific?</p>
          <h2>Search</h2>
          {/* Add search input here */}
        </div>

        {/* All articles here */}
        <div className="my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogData &&
            blogData.map((post) => (
              <a
                href={post.src}
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                key={post.id}
              >
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="my-2 text-sm">{post.description}</p>
              </a>
            ))}
        </div>
      </section>
    </>
  );
}
