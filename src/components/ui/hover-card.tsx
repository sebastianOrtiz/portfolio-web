"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  content: ReactNode;
}

export function HoverCard({ children, content }: HoverCardProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpen(true), 300);
  };

  const handleLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {children}
      {open && (
        <div className="absolute bottom-full left-1/2 z-50 mb-3 -translate-x-1/2 animate-fade-in">
          <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
            {content}
          </div>
          <div className="flex justify-center">
            <div className="h-2.5 w-2.5 -translate-y-1.5 rotate-45 border-b border-r border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900" />
          </div>
        </div>
      )}
    </div>
  );
}
