"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import type { Dictionary } from "@/i18n/types";

const SEARCH_API_URL =
  process.env.NEXT_PUBLIC_SEARCH_API_URL ||
  "https://nexus-crm-api.sebasing.dev/api/v1/search/query";

/** Maximum characters shown per result chunk before truncation */
const MAX_CHUNK_LENGTH = 200;

interface SearchResult {
  chunk_text: string;
  score: number;
  source: string;
}

type SearchStatus = "idle" | "searching" | "done" | "error";

export function SearchDemo({ dict }: { dict: Dictionary }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [status, setStatus] = useState<SearchStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    const trimmed = query.trim();
    if (!trimmed) return;

    setStatus("searching");
    setResults([]);
    setErrorMessage("");

    try {
      const res = await fetch(SEARCH_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed, top_k: 5 }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      const items: SearchResult[] = (data.results ?? data ?? []).map(
        (r: Record<string, unknown>) => ({
          chunk_text: (r.chunk_text ?? r.text ?? "") as string,
          score: (r.score ?? r.similarity ?? 0) as number,
          source: (r.source ?? r.document_name ?? r.filename ?? "unknown") as string,
        }),
      );

      setResults(items);
      setStatus("done");
    } catch {
      setStatus("error");
      setErrorMessage(dict.searchDemo.errorMessage);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <section id="search-demo" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          title={dict.searchDemo.title}
          description={dict.searchDemo.subtitle}
        />

        {/* Search input */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={dict.searchDemo.placeholder}
            className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-accent-400 dark:focus:ring-accent-400/20"
          />
          <button
            onClick={handleSearch}
            disabled={status === "searching" || !query.trim()}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-accent-600 px-6 text-sm font-medium text-white transition-colors hover:bg-accent-700 disabled:opacity-50 dark:bg-accent-500 dark:hover:bg-accent-600"
          >
            {status === "searching"
              ? dict.searchDemo.searching
              : dict.searchDemo.search}
          </button>
        </div>

        {/* Loading state */}
        {status === "searching" && (
          <div className="flex items-center justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-accent-600 dark:border-zinc-700 dark:border-t-accent-400" />
          </div>
        )}

        {/* Error state */}
        {status === "error" && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center dark:border-red-900/50 dark:bg-red-900/10">
            <p className="text-sm text-red-700 dark:text-red-400">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Empty state */}
        {status === "done" && results.length === 0 && (
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <p className="mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {dict.searchDemo.noResults}
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {dict.searchDemo.noResultsDesc}
            </p>
          </div>
        )}

        {/* Results */}
        {status === "done" && results.length > 0 && (
          <div className="space-y-4">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {dict.searchDemo.resultsCount.replace(
                "{{count}}",
                String(results.length),
              )}
            </p>

            {results.map((result, i) => (
              <ResultCard key={i} result={result} dict={dict} />
            ))}
          </div>
        )}

        {/* Footer note */}
        <p className="mt-8 text-center text-xs text-zinc-400 dark:text-zinc-500">
          {dict.searchDemo.poweredBy}
        </p>
      </div>
    </section>
  );
}

function ResultCard({
  result,
  dict,
}: {
  result: SearchResult;
  dict: Dictionary;
}) {
  const truncated =
    result.chunk_text.length > MAX_CHUNK_LENGTH
      ? result.chunk_text.slice(0, MAX_CHUNK_LENGTH) + "..."
      : result.chunk_text;

  const scorePercent = Math.round(result.score * 100);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-800/30">
      <p className="mb-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {truncated}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Relevance bar */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {dict.searchDemo.relevance}
          </span>
          <div className="h-2 w-24 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
            <div
              className="h-full rounded-full bg-accent-600 transition-all dark:bg-accent-400"
              style={{ width: `${scorePercent}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            {scorePercent}%
          </span>
        </div>

        {/* Source */}
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          {dict.searchDemo.source}: {result.source}
        </span>
      </div>
    </div>
  );
}
