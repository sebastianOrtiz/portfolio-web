"use client";

import { useState } from "react";
import { projects } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import { stackIconMap } from "@/components/ui/tech-icons";
import { Modal } from "@/components/ui/modal";
import { EventsPlayground } from "@/components/playgrounds/events-playground";
import { SearchPlayground } from "@/components/playgrounds/search-playground";
import type { Dictionary } from "@/i18n/types";

/** Maximum number of highlights shown per project card */
const MAX_HIGHLIGHTS = 3;

/** Projects that open a playground modal instead of navigating to a URL */
const PLAYGROUND_SLUGS = new Set(["event-driven-service", "semantic-search"]);

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0 text-accent-500 dark:text-accent-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/** Icon per project slug */
const projectIcons: Record<string, () => React.JSX.Element> = {
  "nexus-crm": () => (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M9 3v18M2 9h20M2 15h7" />
      <circle cx="15.5" cy="12" r="2" />
    </svg>
  ),
  "event-driven-service": () => (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  "semantic-search": () => (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35M8 11h6M11 8v6" />
    </svg>
  ),
};

export function Projects({ dict }: { dict: Dictionary }) {
  const [activePlayground, setActivePlayground] = useState<string | null>(null);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={dict.projects.title}
          description={dict.projects.description}
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              translated={dict.projects.items[i]}
              labels={dict.projects}
              onOpenPlayground={
                PLAYGROUND_SLUGS.has(project.slug)
                  ? () => setActivePlayground(project.slug)
                  : undefined
              }
            />
          ))}
        </div>
      </div>

      {/* Playground modals */}
      <Modal
        open={activePlayground === "event-driven-service"}
        onClose={() => setActivePlayground(null)}
        title={`${dict.projects.items[1]?.title || "Event-Driven Onboarding"} — ${dict.projects.apiPlayground}`}
      >
        <EventsPlayground dict={dict} />
      </Modal>
      <Modal
        open={activePlayground === "semantic-search"}
        onClose={() => setActivePlayground(null)}
        title={`${dict.projects.items[2]?.title || "Semantic Search"} — ${dict.projects.apiPlayground}`}
      >
        <SearchPlayground dict={dict} />
      </Modal>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[number];
  translated?: Dictionary["projects"]["items"][number];
  labels: Dictionary["projects"];
  onOpenPlayground?: () => void;
}

function ProjectCard({ project, translated, labels, onOpenPlayground }: ProjectCardProps) {
  const title = translated?.title ?? project.title;
  const subtitle = translated?.subtitle ?? project.subtitle;
  const description = translated?.description ?? project.description;
  const highlights = translated?.highlights ?? project.highlights.slice(0, MAX_HIGHLIGHTS);
  const isComingSoon = project.status === "coming-soon";
  const ProjectIcon = projectIcons[project.slug];
  const hasPlayground = !!onOpenPlayground;

  return (
    <div className="group flex flex-col rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-800/30">
      {/* Header */}
      <div className="p-6 pb-0">
        <div className="mb-4 flex items-start gap-3">
          {ProjectIcon && (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
              <ProjectIcon />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {title}
              </h3>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                  isComingSoon
                    ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                    : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                }`}
              >
                {isComingSoon ? labels.comingSoon : labels.live}
              </span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-accent-600 dark:text-accent-400">
              {subtitle}
            </p>
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>

      {/* Highlights */}
      <div className="flex-1 px-6 pb-4">
        <ul className="space-y-2">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
            >
              <span className="mt-0.5">
                <CheckIcon />
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Stack badges */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => {
            const Icon = stackIconMap[tech];
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {Icon && (
                  <span className="h-3.5 w-3.5 shrink-0 [&>svg]:h-3.5 [&>svg]:w-3.5">
                    <Icon />
                  </span>
                )}
                {tech}
              </span>
            );
          })}
        </div>
      </div>

      {/* Footer buttons */}
      <div className="flex items-center gap-3 border-t border-zinc-100 px-6 py-4 dark:border-zinc-800">
        {hasPlayground ? (
          <button
            onClick={onOpenPlayground}
            className="inline-flex h-10 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent-600 px-4 text-sm font-medium text-white transition-colors hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600"
          >
            <PlayIcon />
            {labels.apiPlayground}
          </button>
        ) : (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-accent-600 px-4 text-sm font-medium text-white transition-colors hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600"
          >
            <ExternalLinkIcon />
            {labels.liveDemo}
          </a>
        )}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          <GitHubIcon />
          {labels.sourceCode}
        </a>
      </div>
    </div>
  );
}
