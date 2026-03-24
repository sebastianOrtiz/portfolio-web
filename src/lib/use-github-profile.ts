"use client";

import { useEffect, useState } from "react";

/** Number of repos fetched from the API (pre-filter) */
const REPOS_PER_PAGE = 10;
/** Max repos returned after filtering out forks */
const MAX_DISPLAY_REPOS = 3;

const GITHUB_API_BASE = "https://api.github.com";

/** Subset of the GitHub REST API user response used in the profile preview */
export interface GitHubProfile {
  avatar_url: string;
  name: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  login: string;
  created_at: string;
}

/** Subset of the GitHub REST API repo response used in the profile preview */
export interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  html_url: string;
}

/**
 * Fetches GitHub profile and recent non-forked repositories.
 * Uses the public GitHub REST API (no auth required).
 * Returns max 3 original repos sorted by most recently updated.
 *
 * @param username - GitHub username to fetch
 * @returns profile data, filtered repos, and loading state
 */
export function useGitHubProfile(username: string) {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevents state updates if the component unmounts before fetch completes
    let cancelled = false;

    Promise.all([
      fetch(`${GITHUB_API_BASE}/users/${username}`).then((r) =>
        r.ok ? r.json() : null
      ),
      fetch(
        `${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=${REPOS_PER_PAGE}`
      ).then((r) => (r.ok ? r.json() : [])),
    ])
      .then(([profileData, reposData]) => {
        if (cancelled) return;
        if (profileData) setProfile(profileData);
        setRepos(
          (reposData as GitHubRepo[]).filter((r) => !r.fork).slice(0, MAX_DISPLAY_REPOS)
        );
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return { profile, repos, loading };
}
