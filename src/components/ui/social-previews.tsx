"use client";

import { HoverCard } from "./hover-card";
import { GitHubIcon, LinkedInIcon, BuildingIcon, MapPinIcon, RepoIcon } from "./icons";
import { siteConfig } from "@/data/content";
import { useGitHubProfile } from "@/lib/use-github-profile";

/** LinkedIn brand color — used for the profile icon background */
const LINKEDIN_BRAND_COLOR = "bg-[#0A66C2]";

/** Max number of repos shown in the GitHub preview card */
const MAX_PREVIEW_REPOS = 3;

/** Tailwind background classes for GitHub language indicators */
const LANG_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-500",
  Python: "bg-yellow-500",
  Java: "bg-orange-600",
  JavaScript: "bg-yellow-400",
  Go: "bg-cyan-500",
  CSS: "bg-purple-500",
  HTML: "bg-red-500",
  "C#": "bg-green-600",
};

/** Shared styling for the circular icon buttons in the hero section */
const ICON_BUTTON_CLASS =
  "inline-flex h-12 w-12 items-center justify-center rounded-lg border border-zinc-300 text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800";

/** Live GitHub profile card shown on hover over the GitHub button */
function GitHubPreview() {
  const username = siteConfig.github.split("/").pop() ?? "";
  const { profile, repos, loading } = useGitHubProfile(username);

  if (loading || !profile) {
    return (
      <div className="w-72">
        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">GitHub</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">Loading...</p>
      </div>
    );
  }

  const memberSince = new Date(profile.created_at).getFullYear();

  return (
    <div className="w-72">
      <div className="flex items-center gap-3">
        <img
          src={profile.avatar_url}
          alt={profile.name ?? profile.login}
          className="h-12 w-12 rounded-full"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {profile.name ?? profile.login}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">@{profile.login}</p>
        </div>
      </div>

      {(profile.company || profile.location) && (
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {profile.company && (
            <span className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400">
              <BuildingIcon className="h-3 w-3" />
              {profile.company}
            </span>
          )}
          {profile.location && (
            <span className="flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400">
              <MapPinIcon className="h-3 w-3" />
              {profile.location}
            </span>
          )}
        </div>
      )}

      {profile.bio && (
        <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
          {profile.bio}
        </p>
      )}

      <div className="mt-3 flex gap-4 border-t border-zinc-100 pt-3 dark:border-zinc-800">
        {[
          { value: profile.public_repos, label: "repos" },
          { value: profile.followers, label: "followers" },
          { value: profile.following, label: "following" },
          { value: memberSince, label: "joined" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {stat.value}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {repos.length > 0 && (
        <div className="mt-3 space-y-2 border-t border-zinc-100 pt-3 dark:border-zinc-800">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Recent repos
          </p>
          {repos.map((repo) => (
            <div key={repo.name} className="flex items-center gap-2">
              <RepoIcon className="h-3.5 w-3.5 shrink-0 text-zinc-400 dark:text-zinc-500" />
              <span className="min-w-0 truncate text-xs font-medium text-zinc-900 dark:text-zinc-100">
                {repo.name}
              </span>
              {repo.language && (
                <span className="flex shrink-0 items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
                  <span
                    className={`inline-block h-2 w-2 rounded-full ${LANG_COLORS[repo.language] ?? "bg-zinc-400"}`}
                  />
                  {repo.language}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function LinkedInPreview() {
  return (
    <div className="w-64">
      <div className="flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${LINKEDIN_BRAND_COLOR}`}>
          <LinkedInIcon className="h-6 w-6 text-white" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {siteConfig.name}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">LinkedIn</p>
        </div>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
        {siteConfig.headline} — {siteConfig.description.split(".")[0]}.
      </p>
      <div className="mt-3 border-t border-zinc-100 pt-3 dark:border-zinc-800">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Click to view full profile
        </p>
      </div>
    </div>
  );
}

export function GitHubButton() {
  return (
    <HoverCard content={<GitHubPreview />}>
      <a
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={ICON_BUTTON_CLASS}
      >
        <GitHubIcon className="h-5 w-5" />
      </a>
    </HoverCard>
  );
}

export function LinkedInButton() {
  return (
    <HoverCard content={<LinkedInPreview />}>
      <a
        href={siteConfig.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={ICON_BUTTON_CLASS}
      >
        <LinkedInIcon className="h-5 w-5" />
      </a>
    </HoverCard>
  );
}
