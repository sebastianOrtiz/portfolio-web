"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/types";

interface SearchResult {
  chunkText: string;
  score: number;
  documentId: string;
  documentFilename: string;
}

interface Document {
  id: string;
  filename: string;
  status: string;
  chunk_count?: number;
}

type SearchStatus = "idle" | "searching" | "done" | "error";

const EXAMPLE_QUERIES = [
  "authentication and security",
  "database design patterns",
  "API error handling",
  "deployment workflow",
  "testing strategies",
];

export function SearchPlayground({ dict }: { dict: Dictionary }) {
  const t = dict.playground;
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<SearchStatus>("idle");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [error, setError] = useState("");
  const [showDocs, setShowDocs] = useState(false);

  const search = async (q?: string) => {
    const searchQuery = q || query;
    if (!searchQuery.trim()) return;

    setStatus("searching");
    setError("");
    setResults([]);

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery, top_k: 5 }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || `HTTP ${res.status}`);
      }

      const data = await res.json();
      setResults(data.results || []);
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setStatus("error");
    }
  };

  const loadDocuments = async () => {
    try {
      const res = await fetch("/api/search");
      if (res.ok) {
        const data = await res.json();
        setDocuments(data.items || []);
      }
    } catch {
      // Silently fail
    }
    setShowDocs(true);
  };

  return (
    <div className="space-y-6">
      {/* Architecture overview */}
      <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
        <h4 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {t.howItWorks}
        </h4>
        <p
          className="mb-3 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"
          dangerouslySetInnerHTML={{ __html: t.searchDescription }}
        />
        <div className="mb-3 flex items-center gap-1.5 text-[10px] text-zinc-500 dark:text-zinc-400">
          <span className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono dark:bg-zinc-700">Upload</span>
          <span>→</span>
          <span className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono dark:bg-zinc-700">Parse</span>
          <span>→</span>
          <span className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono dark:bg-zinc-700">Chunk</span>
          <span>→</span>
          <span className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono dark:bg-zinc-700">Embed</span>
          <span>→</span>
          <span className="rounded bg-zinc-200 px-1.5 py-0.5 font-mono dark:bg-zinc-700">ChromaDB</span>
        </div>
        <div className="flex flex-wrap gap-3 text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> FastAPI
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" /> sentence-transformers
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-500" /> ChromaDB
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> PostgreSQL
          </span>
        </div>
      </div>

      {/* Search input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && search()}
          placeholder={t.searchPlaceholder}
          className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
        />
        <button
          onClick={() => search()}
          disabled={status === "searching" || !query.trim()}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-accent-500 dark:hover:bg-accent-600"
        >
          {status === "searching" ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          )}
          {t.searchButton}
        </button>
      </div>

      {/* Example queries */}
      <div className="flex flex-wrap gap-2">
        <span className="text-xs text-zinc-500 dark:text-zinc-400">{t.tryQueries}</span>
        {EXAMPLE_QUERIES.map((q) => (
          <button
            key={q}
            onClick={() => {
              setQuery(q);
              search(q);
            }}
            className="cursor-pointer rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {results.length} {t.resultsFound}
          </h4>
          {results.map((result, i) => (
            <div
              key={i}
              className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-800/50"
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                  <div
                    className="h-full rounded-full bg-accent-500"
                    style={{ width: `${(result.score * 100).toFixed(0)}%` }}
                  />
                </div>
                <span className="shrink-0 text-xs font-medium text-accent-600 dark:text-accent-400">
                  {(result.score * 100).toFixed(1)}%
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {result.chunkText}
              </p>
              <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
                {result.documentFilename}
              </p>
            </div>
          ))}
        </div>
      )}

      {status === "done" && results.length === 0 && (
        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          {t.noResults}
        </p>
      )}

      {error && (
        <p className="text-center text-sm text-red-600 dark:text-red-400">{error}</p>
      )}

      {/* Documents toggle */}
      <div className="border-t border-zinc-200 pt-4 dark:border-zinc-700">
        <button
          onClick={loadDocuments}
          className="cursor-pointer text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {showDocs ? t.indexedDocuments : t.viewDocuments}
        </button>
        {showDocs && (
          <div className="mt-2 space-y-1">
            {documents.length === 0 ? (
              <p className="text-xs text-zinc-400">{t.noDocuments}</p>
            ) : (
              documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                >
                  <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span>{doc.filename}</span>
                  {doc.chunk_count && (
                    <span className="text-zinc-400">({doc.chunk_count} chunks)</span>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <p className="text-center text-[10px] text-zinc-400 dark:text-zinc-500">
        {t.poweredBy}
      </p>
    </div>
  );
}
