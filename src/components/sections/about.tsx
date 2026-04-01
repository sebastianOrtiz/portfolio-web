import { SectionHeader } from "@/components/ui/section-header";
import { focusIcons, diffIcons } from "@/components/ui/focus-icons";
import { langIcons, cloudIcons, dbIcons } from "@/components/ui/tech-icons";
import type { Dictionary } from "@/i18n/types";

function StatCard({
  stat,
  icons,
  href,
}: {
  stat: { value: string; label: string };
  icons?: [React.ComponentType, string][];
  href?: string;
}) {
  const content = (
    <>
      <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">
        {stat.value}
      </div>
      <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {stat.label}
      </div>
      {icons && (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {icons.map(([Icon, name]) => (
            <span key={name} data-tooltip={name} className="inline-flex items-center justify-center rounded-full bg-white p-1.5 shadow-sm transition-transform hover:scale-110 dark:bg-zinc-800">
              <Icon />
            </span>
          ))}
        </div>
      )}
    </>
  );

  const cls =
    "flex flex-col items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-center transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-800/30";

  if (href) {
    return (
      <a href={href} className={cls + " block"}>
        {content}
      </a>
    );
  }

  return <div className={cls}>{content}</div>;
}

export function About({ dict }: { dict: Dictionary }) {
  const statIcons: ([React.ComponentType, string][] | undefined)[] = [
    undefined,
    undefined,
    langIcons,
    [...cloudIcons, ...dbIcons],
  ];
  const statLinks: (string | undefined)[] = [
    undefined,
    "#projects",
    undefined,
    undefined,
  ];

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title={dict.about.title} />

        <p className="mb-12 mt-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {dict.about.intro}
        </p>

        {/* Stats bar */}
        <div className="mb-16 grid auto-rows-fr grid-cols-2 gap-6 sm:grid-cols-4">
          {dict.about.stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              icons={statIcons[i]}
              href={statLinks[i]}
            />
          ))}
        </div>

        {/* Core Focus */}
        <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {dict.about.coreFocus}
        </h3>
        <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dict.about.focus.map((item, i) => {
            const Icon = focusIcons[i];
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-800/30"
              >
                <div className="mb-3 inline-flex rounded-lg bg-accent-50 p-2.5 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
                  <Icon />
                </div>
                <h4 className="mb-1.5 font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Differentiators */}
        <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {dict.about.differentiators}
        </h3>
        <div className="grid gap-5 sm:grid-cols-2">
          {dict.about.diffs.map((item, i) => {
            const Icon = diffIcons[i];
            return (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-5 transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-zinc-800/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
                  <Icon />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
