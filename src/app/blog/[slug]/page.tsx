import { fetchAllPostSlugs, fetchPost } from "@/lib/hashnode";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import BlogArchiveButton from "@/components/blog-archive-button";
import RecommendedPosts from "@/components/recommended-posts";
import { HASHNODE_HOST, SITE_URL } from "@/lib/site";

export const revalidate = 3600;

function normalizePostMarkdown(markdown: string) {
  return markdown.replace(
    /!\[([^\]]*)\]\(([^)\s]+)(?:\s+[\w:-]+=(?:"[^"]*"|'[^']*'))+\)/g,
    "![$1]($2)"
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const data = await fetchPost(HASHNODE_HOST, slug);
    const post = data?.publication?.post;
    
    if (!post) return {};
    
    return {
      title: post.title,
      description: post.brief,
      alternates: {
        canonical: `/blog/${slug}`,
      },
      openGraph: {
        url: `${SITE_URL}/blog/${slug}`,
        title: post.title,
        description: post.brief,
        type: "article",
        publishedTime: post.publishedAt,
        authors: ["Divine Orji"],
        tags: post.tags?.map((tag: { name: string }) => tag.name) || [],
        images: post.coverImage?.url ? [post.coverImage.url] : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.brief,
        images: post.coverImage?.url ? [post.coverImage.url] : [],
      },
    };
  } catch {
    return {};
  }
}

export async function generateStaticParams() {
  const slugs = await fetchAllPostSlugs(HASHNODE_HOST);

  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  
  try {
    const data = await fetchPost(HASHNODE_HOST, slug);
    post = data?.publication?.post;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
  
  if (!post) {
    notFound();
  }

  const markdownContent = normalizePostMarkdown(post.content?.markdown || "");

  return (
    <main className="flex-1 w-full flex flex-col pt-[84px]">
      <article className="mx-auto w-full min-w-0 max-w-5xl px-6 py-16 md:px-12 md:py-24">
        <BlogArchiveButton />

        {/* Header */}
        <header className="mb-12 md:mb-16 space-y-6">
          <div className="flex flex-wrap gap-3">
            {post.tags?.map((tag: any) => (
              <span 
                key={tag.slug}
                className="px-3 py-1 bg-faxx-light dark:bg-zinc-900 border-2 border-faxx-dark dark:border-gray-700 font-mono text-xs font-bold uppercase"
              >
                {tag.name}
              </span>
            ))}
          </div>
          
          <h1 className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[1.4] md:leading-[1.15] text-faxx-dark dark:text-white">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 font-mono text-sm text-faxx-dark/60 dark:text-gray-400">
            <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { 
              month: "short", 
              day: "numeric", 
              year: "numeric" 
            })}</span>
            <span>•</span>
            <span>{post.readTimeInMinutes} min read</span>
          </div>
          
          {post.coverImage?.url && (
            <div className="relative w-full aspect-[16/9] border-4 border-faxx-dark dark:border-gray-700 overflow-hidden">
              <Image
                src={post.coverImage.url}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>
        
        {/* Content */}
        <div className="blog-post-markdown prose prose-lg prose-img:h-auto prose-img:max-w-full prose-img:mx-auto dark:prose-invert max-w-none min-w-0">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[[rehypeHighlight, { detect: true, ignoreMissing: true }]]}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>

        {/* Canonical URL at bottom */}
        <div className="mt-12 pt-8 border-t-4 border-faxx-dark dark:border-gray-700">
          <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Original Source</p>
          <a
            href={`https://${HASHNODE_HOST}/${slug}`}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-faxx-blue dark:text-faxx-cyan hover:underline"
          >
            https://{HASHNODE_HOST}/{slug}
          </a>
        </div>

        {/* Recommended Posts */}
        <RecommendedPosts currentSlug={slug} tags={post.tags?.map((t: any) => t.slug) || []} />
      </article>
    </main>
  );
}
