import { buildCvPdf } from "@/lib/cv/build-cv-pdf";
import { collectCvData } from "@/lib/cv/collect-cv-data";

export const runtime = "nodejs";

// The CV is derived from build-time content, so let the platform serve it
// straight from cache instead of re-rendering on every hit.
export const dynamic = "force-static";

export async function GET() {
  const bytes = await buildCvPdf(collectCvData());

  return new Response(Buffer.from(bytes), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="divine-orji-cv.pdf"',
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}