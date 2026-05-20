import { fetchPosts } from "@/lib/hashnode";
import { HASHNODE_HOST } from "@/lib/site";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const limitParam = request.nextUrl.searchParams.get("limit");
  const parsedLimit = Number.parseInt(limitParam ?? "3", 10);
  const limit = Number.isFinite(parsedLimit) && parsedLimit > 0
    ? Math.min(parsedLimit, 20)
    : 3;

  const data = await fetchPosts(HASHNODE_HOST, limit);
  const posts = data.publication.posts.edges.map((edge) => edge.node);

  return NextResponse.json({ posts });
}
