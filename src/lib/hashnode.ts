import { cache } from "react";
import { HASHNODE_PROFILE_URL } from "@/lib/site";

const HASHNODE_PROFILE_POSTS_API = "https://hashnode.com/api/profile/posts";
const HASHNODE_REQUEST_HEADERS = {
  "user-agent": "Mozilla/5.0",
  accept: "text/html,application/json,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
};

interface HashnodeProfileApiPost {
  postId: string;
  slug: string;
  title: string;
  brief: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage?: {
    url: string;
  };
  authorName: string;
  authorUsername: string;
  authorAvatarUrl?: string;
  blogUrl: string;
  views?: number;
  responseCount?: number;
}

interface HashnodeProfilePostsApiResponse {
  success: boolean;
  posts?: HashnodeProfileApiPost[];
  pagination?: {
    page: number;
    limit: number;
    totalCount: number;
    hasMore: boolean;
  };
}

export interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage?: {
    url: string;
  };
  blogUrl?: string;
  authorName?: string;
  authorUsername?: string;
  authorAvatarUrl?: string;
  views?: number;
  responseCount?: number;
  tags?: Array<{
    name: string;
    slug: string;
  }>;
}

export interface HashnodePostsResponse {
  publication: {
    title: string;
    posts: {
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
      edges: Array<{
        node: HashnodePost;
      }>;
    };
  };
}

export interface HashnodePostResponse {
  publication: {
    post: {
      id: string;
      title: string;
      brief: string;
      content: {
        html: string;
        markdown: string;
      };
      publishedAt: string;
      readTimeInMinutes: number;
      coverImage?: {
        url: string;
      };
      blogUrl?: string;
      tags?: Array<{
        name: string;
        slug: string;
      }>;
    } | null;
  };
}

const EMPTY_POSTS_RESPONSE: HashnodePostsResponse = {
  publication: {
    title: "",
    posts: {
      pageInfo: {
        hasNextPage: false,
        endCursor: "",
      },
      edges: [],
    },
  },
};

function getBlogHostname(blogUrl?: string): string | null {
  if (!blogUrl) {
    return null;
  }

  try {
    return new URL(blogUrl).hostname;
  } catch {
    return null;
  }
}

function mapProfilePostToHashnodePost(post: HashnodeProfileApiPost): HashnodePost {
  return {
    id: post.postId,
    title: post.title,
    brief: post.brief,
    slug: post.slug,
    publishedAt: post.publishedAt,
    readTimeInMinutes: post.readTimeInMinutes,
    coverImage: post.coverImage,
    blogUrl: post.blogUrl,
    authorName: post.authorName,
    authorUsername: post.authorUsername,
    authorAvatarUrl: post.authorAvatarUrl,
    views: post.views,
    responseCount: post.responseCount,
    tags: [],
  };
}

const fetchHashnodeUserId = cache(async () => {
  const response = await fetch(HASHNODE_PROFILE_URL, {
    headers: HASHNODE_REQUEST_HEADERS,
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Hashnode profile request failed with status ${response.status}`);
  }

  const html = await response.text();
  const userId = html.match(/\\"userId\\":\\"([^\\"]+)\\"/)?.[1];

  if (!userId) {
    throw new Error("Could not extract Hashnode user id from profile page");
  }

  return userId;
});

async function fetchHashnodeProfilePostsPage(
  userId: string,
  page: number,
  limit: number
): Promise<HashnodeProfilePostsApiResponse> {
  const searchParams = new URLSearchParams({
    limit: String(limit),
    page: String(page),
    userId,
  });

  const response = await fetch(`${HASHNODE_PROFILE_POSTS_API}?${searchParams.toString()}`, {
    headers: HASHNODE_REQUEST_HEADERS,
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Hashnode posts request failed with status ${response.status}`);
  }

  const data = (await response.json()) as HashnodeProfilePostsApiResponse;

  if (!data.success) {
    throw new Error("Hashnode profile posts API returned an unsuccessful response");
  }

  return data;
}

const fetchPublicationPosts = cache(async (host: string) => {
  const userId = await fetchHashnodeUserId();
  const publicationPosts: HashnodePost[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const data = await fetchHashnodeProfilePostsPage(userId, page, 20);
    const posts = (data.posts ?? [])
      .filter((post) => getBlogHostname(post.blogUrl) === host)
      .map(mapProfilePostToHashnodePost);

    publicationPosts.push(...posts);
    hasMore = data.pagination?.hasMore ?? false;
    page += 1;
  }

  return publicationPosts;
});

const EMPTY_POST_RESPONSE: HashnodePostResponse = {
  publication: {
    post: null,
  },
};

export async function fetchPosts(
  host: string,
  first: number = 10,
  after?: string
): Promise<HashnodePostsResponse> {
  try {
    const posts = await fetchPublicationPosts(host);
    const startIndex = Number.parseInt(after ?? "0", 10);
    const safeStartIndex = Number.isFinite(startIndex) && startIndex > 0 ? startIndex : 0;
    const edges = posts.slice(safeStartIndex, safeStartIndex + first).map((node) => ({ node }));
    const nextIndex = safeStartIndex + edges.length;

    return {
      publication: {
        title: host,
        posts: {
          pageInfo: {
            hasNextPage: nextIndex < posts.length,
            endCursor: nextIndex < posts.length ? String(nextIndex) : "",
          },
          edges,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching Hashnode posts:", error);
    return EMPTY_POSTS_RESPONSE;
  }
}

export async function fetchAllPostSlugs(host: string): Promise<string[]> {
  try {
    return (await fetchPublicationPosts(host)).map((post) => post.slug);
  } catch (error) {
    console.error("Error fetching Hashnode post slugs:", error);
    return [];
  }
}

export async function fetchPost(
  host: string,
  slug: string
): Promise<HashnodePostResponse> {
  try {
    const post = (await fetchPublicationPosts(host)).find((entry) => entry.slug === slug);

    if (!post) {
      return EMPTY_POST_RESPONSE;
    }

    return {
      publication: {
        post: {
          id: post.id,
          title: post.title,
          brief: post.brief,
          content: {
            html: "",
            markdown: "",
          },
          publishedAt: post.publishedAt,
          readTimeInMinutes: post.readTimeInMinutes,
          coverImage: post.coverImage,
          blogUrl: post.blogUrl,
          tags: post.tags,
        },
      },
    };
  } catch (error) {
    console.error(`Error fetching Hashnode post \"${slug}\":`, error);
    return EMPTY_POST_RESPONSE;
  }
}

export async function fetchRecommendedPosts(
  host: string,
  _tags: string[],
  excludeSlug: string
): Promise<HashnodePost[]> {
  try {
    return (await fetchPublicationPosts(host)).filter((post) => post.slug !== excludeSlug).slice(0, 6);
  } catch (error) {
    console.error("Error fetching recommended posts:", error);
    return [];
  }
}
