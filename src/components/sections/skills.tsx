import { skills } from "@/data/content";
import { SectionHeader } from "@/components/ui/section-header";
import type { Dictionary } from "@/i18n/types";

export function Skills({ dict }: { dict: Dictionary }) {
  return (
    <section id="skills" className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={dict.skills.title} />

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
