import { buildLlmsTxt } from "@/content/llms";

// ─── /llms.txt ───────────────────────────────────────────────────────────
// Generated from the content registry so it always lists every live page.

export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
