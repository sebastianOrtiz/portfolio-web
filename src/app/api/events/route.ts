import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

const EVENT_API_URL = process.env.EVENT_API_URL!;
const EVENT_API_KEY = process.env.EVENT_API_KEY || "";

function getIP(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

/** POST /api/events — Trigger a demo onboarding flow */
export async function POST(req: NextRequest) {
  if (!checkRateLimit(getIP(req))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await req.json();
    const res = await fetch(`${EVENT_API_URL}/api/v1/onboarding/trigger`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": EVENT_API_KEY,
      },
      body: JSON.stringify({
        email: body.email || "demo@playground.dev",
        name: body.name || "Playground User",
        orgName: body.orgName || "Demo Org",
      }),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: "Event service unavailable" }, { status: 502 });
  }
}

/** GET /api/events — List recent onboarding flows */
export async function GET(req: NextRequest) {
  if (!checkRateLimit(getIP(req))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const { searchParams } = new URL(req.url);
  const correlationId = searchParams.get("correlationId");

  const path = correlationId
    ? `/api/v1/onboarding/${correlationId}/events`
    : "/api/v1/onboarding";

  try {
    const res = await fetch(`${EVENT_API_URL}${path}`, {
      headers: { "X-API-Key": EVENT_API_KEY },
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: "Event service unavailable" }, { status: 502 });
  }
}
