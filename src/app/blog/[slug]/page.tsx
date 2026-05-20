import { fetchAllPostSlugs, fetchPost } from "@/lib/hashnode";
import { notFound, redirect } from "next/navigation";
import { HASHNODE_HOST, SITE_URL } from "@/lib/site";

export const revalidate = 3600;

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
        canonical: post.blogUrl || `${SITE_URL}/blog/${slug}`,
      },
      openGraph: {
        url: post.blogUrl || `${SITE_URL}/blog/${slug}`,
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
      robots: {
        index: false,
        follow: true,
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

  const data = await fetchPost(HASHNODE_HOST, slug);
  const post = data?.publication?.post;

  if (!post?.blogUrl) {
    notFound();
  }

  redirect(post.blogUrl);
}
