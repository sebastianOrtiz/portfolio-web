import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

const SEARCH_API_URL = process.env.SEARCH_API_URL || "https://nexus-crm-semantic-search-api.sebasing.dev";

function getIP(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

/** POST /api/search — Execute a semantic search query */
export async function POST(req: NextRequest) {
  if (!checkRateLimit(getIP(req))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await req.json();
    const res = await fetch(`${SEARCH_API_URL}/api/v1/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: body.query || "",
        top_k: Math.min(body.top_k || 5, 10),
      }),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: "Search service unavailable" }, { status: 502 });
  }
}

/** GET /api/search — List indexed documents */
export async function GET(req: NextRequest) {
  if (!checkRateLimit(getIP(req))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const res = await fetch(`${SEARCH_API_URL}/api/v1/documents`, {
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: "Search service unavailable" }, { status: 502 });
  }
}
