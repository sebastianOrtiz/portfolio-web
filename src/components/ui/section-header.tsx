interface SectionHeaderProps {
  /** Section title displayed as an h2 */
  title: string;
  /** Optional paragraph below the title, separated by an accent bar */
  description?: string;
}

/**
 * Consistent header used at the top of each page section.
 * Renders a bold title, a short accent-colored bar, and an optional description.
 */
export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <>
      <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      <div className="mb-2 h-1 w-16 rounded bg-accent-600 dark:bg-accent-400" />
      {description && (
        <p className="mb-12 mt-8 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      )}
    </>
  );
}
