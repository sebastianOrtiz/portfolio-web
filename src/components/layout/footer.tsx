import { siteConfig } from "@/data/content";
import { GitHubButton, LinkedInButton } from "@/components/ui/social-previews";
import type { Dictionary } from "@/i18n/types";

function EmailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

export function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}. {dict.footer.builtWith}
        </p>
        <div className="flex gap-3">
          <GitHubButton />
          <LinkedInButton />
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg border border-zinc-300 text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            data-tooltip="Email"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
