"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";

/** Delay before showing the card — prevents flicker on quick mouse passes */
const OPEN_DELAY_MS = 300;
/** Delay before hiding — allows cursor to move from trigger into the card */
const CLOSE_DELAY_MS = 200;

interface HoverCardProps {
  /** The trigger element that activates the card on hover */
  children: ReactNode;
  /** The content rendered inside the floating card */
  content: ReactNode;
}

/**
 * Tooltip-style floating card that appears above its trigger on hover.
 * Includes configurable open/close delays to prevent accidental triggers
 * and allow the user to move their cursor into the card content.
 */
export function HoverCard({ children, content }: HoverCardProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
  };

  const handleLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS);
  };

  // Cleanup timeout on unmount to prevent memory leaks
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
          {/* CSS triangle arrow pointing down */}
          <div className="flex justify-center">
            <div className="h-2.5 w-2.5 -translate-y-1.5 rotate-45 border-b border-r border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900" />
          </div>
        </div>
      )}
    </div>
  );
}
