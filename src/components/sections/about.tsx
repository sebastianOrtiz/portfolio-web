import { SectionHeader } from "@/components/ui/section-header";
import { BulletList } from "@/components/ui/bullet-list";
import type { Dictionary } from "@/i18n/types";

export function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader title={dict.about.title} />

        <p className="mb-10 mt-8 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {dict.about.intro}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <BulletList title={dict.about.coreFocus} items={dict.about.focus} />
          <BulletList title={dict.about.differentiators} items={dict.about.diffs} />
        </div>
      </div>
    </section>
  );
}
