export default async function Home() {
  // const posts = await allPosts().then((data) => data.slice(0, 4));
  // const projects = await gitHubRepos().then((data) => data.slice(0, 2));

  return (
    <>
      {/* Hero */}
      <section className="w-full max-w-4xl mx-auto p-5 grid gap-10">
        {/* Intro */}
        <h1 className="text-5xl leading-relaxed text-center code font-semibold">
          I spin delightful and seamless web experiences.
        </h1>

        {/* Code with my name. Maybe I should animate this? */}
        <div className="card w-max mx-auto">
          <p className="code text-xs font-bold">
            <span className="text-purple-800 dark:text-purple-600">const </span>
            name:
            <span className="text-blue-600"> string </span>=
            <span className="text-green-600"> 'Divine Orji'</span>;
          </p>
        </div>
      </section>

      {/* My projects */}
      <section className="w-full max-w-4xl mx-auto p-5 grid gap-10">
        <div className="grid gap-3">
          <h2 className="text-3xl">Projects</h2>
          <p className="code text-xs text-slate-800/90 dark:text-slate-300">
            Cool stuff I've worked on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* The top three projects will be displayed here */}
        </div>
      </section>

      {/* My blog posts */}
      <section className="w-full max-w-4xl mx-auto p-5 grid gap-10">
        <div className="grid gap-3">
          <h2 className="text-3xl">Blog posts</h2>
          <p className="code text-xs text-slate-800/90 dark:text-slate-300">
            My musings on tech tools, developer experience, and a few wacky
            stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Links to different blogging platforms here */}
          <a
            href="https://dpkreativ.hashnode.dev"
            target="_blank"
            className="card flex gap-3 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962M12 15.953a3.953 3.953 0 1 1 0-7.906a3.953 3.953 0 0 1 0 7.906"
              />
            </svg>
            <div>Hashnode</div>
          </a>

          <a
            href="https://dev.to/dpkreativ"
            target="_blank"
            className="card flex gap-3 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="48"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35c3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06M404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8M154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72l29.57-113.72h32.58z"
              />
            </svg>
            <div>Dev.to</div>
          </a>
          <a
            href="https://dpkreativ.medium.com"
            target="_blank"
            className="card flex gap-3 items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12m7.42 0c0 3.54-1.51 6.42-3.38 6.42c-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42s3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75c-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12"
              />
            </svg>
            <div>Medium</div>
          </a>
        </div>
      </section>
    </>
  );
}
