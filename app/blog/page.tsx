import { allPosts } from "@/lib/data";
import Image from "next/image";

export default async function Page() {
  const posts = await allPosts();

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
      <section className="w-full max-w-4xl mx-auto p-5 grid md:grid-cols-2 gap-10">
        {posts?.map((post: any) => (
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            key={post.id}
          >
            <div className="card relative w-full aspect-video overflow-clip">
              {
                <Image
                  src={post.social_image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                  priority
                />
              }
            </div>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="my-2 text-sm">{post.description}</p>
          </a>
        ))}
      </section>
    </>
  );
}
