"use client";

import { useState } from "react";
import type { Dictionary } from "@/i18n/types";

interface OnboardingFlow {
  correlationId: string;
  status: string;
  message?: string;
}

interface OnboardingEvent {
  id: string;
  eventType: string;
  status: string;
  createdAt: string;
  processedAt?: string;
}

type PlaygroundStatus = "idle" | "triggering" | "polling" | "done" | "error";

const EVENT_LABELS: Record<string, { label: string; icon: string }> = {
  "user.registered": { label: "User Registered", icon: "1" },
  "email.verified": { label: "Email Verified", icon: "2" },
  "organization.created": { label: "Organization Created", icon: "3" },
  "demo_data.provisioned": { label: "Demo Data Provisioned", icon: "4" },
  "onboarding.completed": { label: "Onboarding Completed", icon: "5" },
};

export function EventsPlayground({ dict }: { dict: Dictionary }) {
  const t = dict.playground;
  const [status, setStatus] = useState<PlaygroundStatus>("idle");
  const [flow, setFlow] = useState<OnboardingFlow | null>(null);
  const [events, setEvents] = useState<OnboardingEvent[]>([]);
  const [error, setError] = useState("");

  const trigger = async () => {
    setStatus("triggering");
    setError("");
    setEvents([]);
    setFlow(null);

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: `demo-${Date.now()}@playground.dev`,
          name: "Playground User",
          orgName: "Demo Organization",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || `HTTP ${res.status}`);
      }

      const data: OnboardingFlow = await res.json();
      setFlow(data);
      setStatus("polling");

      let attempts = 0;
      const maxAttempts = 15;
      const interval = setInterval(async () => {
        attempts++;
        try {
          const evRes = await fetch(`/api/events?correlationId=${data.correlationId}`);
          if (evRes.ok) {
            const evData = await evRes.json();
            const evList: OnboardingEvent[] = evData.events || [];
            setEvents(evList);

            const isComplete = evList.some(
              (e) => e.eventType === "onboarding.completed"
            );
            if (isComplete || attempts >= maxAttempts) {
              clearInterval(interval);
              setStatus("done");
            }
          }
        } catch {
          // Keep polling
        }
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
      setStatus("error");
    }
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
          dangerouslySetInnerHTML={{ __html: t.eventsDescription }}
        />
        <div className="flex flex-wrap gap-3 text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" /> Go + Gin
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Redis Streams
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> PostgreSQL
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Consumer Groups
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Idempotent Handlers
          </span>
        </div>
      </div>

      {/* Pipeline visualization */}
      <div>
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {t.pipeline}
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          {Object.entries(EVENT_LABELS).map(([key, { label }], i) => (
            <div key={key} className="flex items-center gap-2">
              {i > 0 && <span className="text-zinc-400">→</span>}
              <span
                className={`rounded-md px-2 py-1 font-medium ${
                  events.some((e) => e.eventType === key)
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trigger button */}
      <div className="text-center">
        <button
          onClick={trigger}
          disabled={status === "triggering" || status === "polling"}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-accent-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-accent-500 dark:hover:bg-accent-600"
        >
          {status === "triggering" && (
            <>{t.starting}<span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /></>
          )}
          {status === "polling" && (
            <>{t.processing}<span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /></>
          )}
          {status === "idle" && t.triggerOnboarding}
          {status === "done" && t.runAgain}
          {status === "error" && t.tryAgain}
        </button>
      </div>

      {/* Flow info */}
      {flow && (
        <div className="flex items-center gap-2 rounded-lg bg-zinc-50 p-3 dark:bg-zinc-800">
          <div className="min-w-0 flex-1 text-xs font-mono">
            <span className="text-zinc-500">correlationId:</span>{" "}
            <span className="text-accent-600 dark:text-accent-400">
              {flow.correlationId}
            </span>
          </div>
          {status === "done" && (
            <button
              onClick={async () => {
                try {
                  const res = await fetch(`/api/events?correlationId=${flow.correlationId}`);
                  if (res.ok) {
                    const data = await res.json();
                    setEvents(data.events || []);
                  }
                } catch { /* ignore */ }
              }}
              className="shrink-0 cursor-pointer rounded-md bg-zinc-200 p-1.5 text-zinc-500 transition-colors hover:bg-zinc-300 hover:text-zinc-700 dark:bg-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-600 dark:hover:text-zinc-200"
              data-tooltip="Refresh"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 2v6h-6M2.5 22v-6h6" />
                <path d="M2.5 11.5A10 10 0 0 1 21.5 8M21.5 12.5a10 10 0 0 1-19 3.5" />
              </svg>
            </button>
          )}
        </div>
      )}

      {/* Events timeline */}
      {events.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {t.events} ({events.length})
          </h4>
          <div className="space-y-2">
            {events.map((event) => {
              const meta = EVENT_LABELS[event.eventType];
              return (
                <div
                  key={event.id}
                  className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-800/50"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    {meta?.icon || "?"}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {meta?.label || event.eventType}
                    </p>
                    <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                      {event.eventType} · {event.status}
                      {event.processedAt && ` · ${new Date(event.processedAt).toLocaleTimeString()}`}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      event.status === "processed" || event.status === "completed"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {error && (
        <p className="text-center text-sm text-red-600 dark:text-red-400">{error}</p>
      )}

      {status === "done" && events.length > 0 && (
        <p className="text-center text-sm text-green-600 dark:text-green-400">
          {t.pipelineCompleted}
        </p>
      )}
    </div>
  );
}
