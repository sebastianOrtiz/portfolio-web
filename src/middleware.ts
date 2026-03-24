import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/types";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already has a locale
  const hasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (hasLocale) return;

  // Skip static files and api routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Detect preferred language from Accept-Language header
  const acceptLang = request.headers.get("accept-language") ?? "";
  const primaryLang = acceptLang.split(",")[0]?.trim().substring(0, 2).toLowerCase();
  const preferred = locales.includes(primaryLang as (typeof locales)[number])
    ? primaryLang
    : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
