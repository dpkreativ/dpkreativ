import { fetchRecommendedPosts } from "@/lib/hashnode";
import { HASHNODE_HOST } from "@/lib/site";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug") ?? "";
  const tags = request.nextUrl.searchParams.getAll("tag").filter(Boolean);

  if (!slug || tags.length === 0) {
    return NextResponse.json({ posts: [] });
  }

  const posts = await fetchRecommendedPosts(HASHNODE_HOST, tags, slug);

  return NextResponse.json({ posts });
}
