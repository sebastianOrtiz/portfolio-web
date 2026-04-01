export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Blob 1 — accent red/rose */}
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] animate-aurora rounded-full opacity-20 blur-3xl dark:opacity-10"
        style={{ background: "radial-gradient(circle, var(--accent-400), transparent 70%)" }}
      />
      {/* Blob 2 — blue/violet */}
      <div
        className="absolute -right-32 top-20 h-[400px] w-[400px] animate-aurora-2 rounded-full opacity-15 blur-3xl dark:opacity-10"
        style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)" }}
      />
      {/* Blob 3 — teal/emerald */}
      <div
        className="absolute -bottom-20 left-1/3 h-[450px] w-[450px] animate-aurora-3 rounded-full opacity-15 blur-3xl dark:opacity-10"
        style={{ background: "radial-gradient(circle, #34d399, transparent 70%)" }}
      />
    </div>
  );
}
