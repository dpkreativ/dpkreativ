import { GraphQLClient, gql } from "graphql-request";

const HASHNODE_API = "https://gql.hashnode.com";

export const HASHNODE_HOST = "dpkreativ.hashnode.dev";
export const hashnodeClient = new GraphQLClient(HASHNODE_API);

export const GET_POSTS = gql`
  query GetPosts($host: String!, $first: Int!, $after: String) {
    publication(host: $host) {
      title
      posts(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
            readTimeInMinutes
            coverImage {
              url
            }
            tags {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export const GET_POST = gql`
  query GetPost($host: String!, $slug: String!) {
    publication(host: $host) {
      post(slug: $slug) {
        id
        title
        brief
        content {
          html
          markdown
        }
        publishedAt
        readTimeInMinutes
        coverImage {
          url
        }
        tags {
          name
          slug
        }
      }
    }
  }
`;

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
      tags?: Array<{
        name: string;
        slug: string;
      }>;
    };
  };
}

export async function fetchPosts(
  host: string,
  first: number = 10,
  after?: string
): Promise<HashnodePostsResponse> {
  return await hashnodeClient.request<HashnodePostsResponse>(GET_POSTS, {
    host,
    first,
    after,
  });
}

export async function fetchAllPostSlugs(host: string): Promise<string[]> {
  const slugs: string[] = [];
  let after: string | undefined;
  let hasNextPage = true;

  while (hasNextPage) {
    const data = await fetchPosts(host, 50, after);
    const posts = data?.publication?.posts;

    slugs.push(...(posts?.edges || []).map((edge) => edge.node.slug));

    hasNextPage = posts?.pageInfo?.hasNextPage ?? false;
    after = posts?.pageInfo?.endCursor;
  }

  return slugs;
}

export async function fetchPost(
  host: string,
  slug: string
): Promise<HashnodePostResponse> {
  return await hashnodeClient.request<HashnodePostResponse>(GET_POST, {
    host,
    slug,
  });
}

export async function fetchRecommendedPosts(
  host: string,
  tags: string[],
  excludeSlug: string
): Promise<HashnodePost[]> {
  try {
    if (tags.length === 0) {
      return [];
    }

    const tagSet = new Set(tags);
    const data = await fetchPosts(host, 20);

    return (data?.publication?.posts?.edges || [])
      .map((edge) => edge.node)
      .filter((post) => post.slug !== excludeSlug)
      .map((post) => ({
        post,
        sharedTagCount: post.tags?.filter((tag) => tagSet.has(tag.slug)).length || 0,
      }))
      .filter(({ sharedTagCount }) => sharedTagCount > 0)
      .sort((left, right) => right.sharedTagCount - left.sharedTagCount)
      .slice(0, 3)
      .map(({ post }) => post);
  } catch (error) {
    console.error("Error fetching recommended posts:", error);
    return [];
  }
}
