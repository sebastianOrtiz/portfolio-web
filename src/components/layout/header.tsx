"use client";

import { useTheme } from "@/lib/theme-provider";
import { useState } from "react";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "@/components/ui/icons";
import type { Dictionary, Locale } from "@/i18n/types";

const sections = ["home", "about", "projects", "skills", "contact"] as const;

export function Header({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const otherLang: Locale = lang === "en" ? "es" : "en";
  const navLinks = sections.map((s) => ({
    href: `#${s}`,
    label: dict.nav[s],
  }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100"
        >
          <img src="/logo.png" alt="sebasing.dev" className="h-8 w-8" />
          sebasing<span className="text-accent-600 dark:text-accent-400">.dev</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}

          <a
            href={`/${otherLang}`}
            className="rounded-md border border-zinc-300 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            {otherLang}
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`/${otherLang}`}
            className="rounded-md border border-zinc-300 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
          >
            {otherLang}
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            {mobileOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
