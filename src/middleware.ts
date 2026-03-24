import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/types";

/** ISO 639-1 language codes are 2 characters (e.g. "en", "es") */
const LANG_CODE_LENGTH = 2;

/**
 * i18n routing middleware.
 * Runs on every non-static request and redirects to a locale-prefixed path
 * (e.g. `/about` → `/en/about`) based on the browser's Accept-Language header.
 * If the path already has a locale prefix, it passes through unchanged.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasLocale) return;

  // Static assets and API routes don't need locale prefixing.
  // The dot check catches files like /favicon.ico, /image.png, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Extract primary language from Accept-Language (e.g. "es-CO,es;q=0.9" → "es")
  const acceptLang = request.headers.get("accept-language") ?? "";
  const primaryLang = acceptLang
    .split(",")[0]
    ?.trim()
    .substring(0, LANG_CODE_LENGTH)
    .toLowerCase();

  const preferred = locales.includes(primaryLang as (typeof locales)[number])
    ? primaryLang
    : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname}`;
  return NextResponse.redirect(url);
}

/** Exclude Next.js internals, API routes, favicon, and static files (anything with a dot) */
export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
