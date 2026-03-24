interface BulletListProps {
  /** Heading displayed above the list */
  title: string;
  /** Items to render as bullet points with accent-colored dots */
  items: string[];
}

/**
 * Renders a titled list with accent-colored bullet dots.
 * Used in the About section for core focus areas and differentiators.
 */
export function BulletList({ title, items }: BulletListProps) {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
          >
            <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600 dark:bg-accent-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
