"use client";

import { useEffect, useState } from "react";

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

export interface GitHubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  html_url: string;
}

export function useGitHubProfile(username: string) {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) =>
        r.ok ? r.json() : null
      ),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
      ).then((r) => (r.ok ? r.json() : [])),
    ])
      .then(([profileData, reposData]) => {
        if (cancelled) return;
        if (profileData) setProfile(profileData);
        setRepos((reposData as GitHubRepo[]).filter((r) => !r.fork).slice(0, 3));
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
