import { siteConfig } from "@/data/content";
import { GitHubButton, LinkedInButton } from "@/components/ui/social-previews";
import type { Dictionary } from "@/i18n/types";

export function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
          {dict.hero.badge}
        </div>

        <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>

        <p className="mb-4 text-xl font-medium text-accent-600 dark:text-accent-400 sm:text-2xl">
          {dict.hero.headline}
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {dict.hero.description}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-accent-600 px-8 text-sm font-medium text-white transition-colors hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600"
          >
            {dict.hero.viewProjects}
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-300 bg-white px-8 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {dict.hero.getInTouch}
          </a>
          <div className="flex gap-3">
            <GitHubButton />
            <LinkedInButton />
          </div>
        </div>
      </div>
    </section>
  );
}
