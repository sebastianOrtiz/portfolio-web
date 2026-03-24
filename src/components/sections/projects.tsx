import { projects } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import type { Dictionary } from "@/i18n/types";

/** Maximum number of highlights shown per project card */
const MAX_HIGHLIGHTS = 3;

export function Projects({ dict }: { dict: Dictionary }) {
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[number];
  translated?: Dictionary["projects"]["items"][number];
  labels: Dictionary["projects"];
}

function ProjectCard({ project, translated, labels }: ProjectCardProps) {
  const title = translated?.title ?? project.title;
  const subtitle = translated?.subtitle ?? project.subtitle;
  const description = translated?.description ?? project.description;
  const highlights = translated?.highlights ?? project.highlights.slice(0, MAX_HIGHLIGHTS);
  const isComingSoon = project.status === "coming-soon";

  return (
    <div className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-800/30">
      <div className="mb-4 flex items-start gap-3">
        <h3 className="min-w-0 flex-1 text-xl font-bold leading-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        <span
          className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium ${
            isComingSoon
              ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
              : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
          }`}
        >
          {isComingSoon ? labels.comingSoon : labels.live}
        </span>
      </div>

      <p className="mb-2 text-sm font-medium text-accent-600 dark:text-accent-400">
        {subtitle}
      </p>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <div className="mb-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
          {labels.highlights}
        </p>
        <ul className="space-y-1">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
            >
              <span className="mt-1 inline-block h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
        >
          {labels.liveDemo} &rarr;
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {labels.sourceCode}
        </a>
      </div>
    </div>
  );
}
