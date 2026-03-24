"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * External store for theme state.
 *
 * Uses `useSyncExternalStore` instead of `useState` to avoid the React 19
 * lint rule against calling setState inside useEffect. The store keeps the
 * theme value outside React's state, syncs it to localStorage and the
 * `<html>` class list, and notifies subscribers on change.
 */
let currentTheme: Theme = "dark";
const listeners = new Set<() => void>();

function getTheme() {
  return currentTheme;
}

/** Persists theme to localStorage, updates the DOM class, and notifies React */
function setTheme(next: Theme) {
  currentTheme = next;
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", next);
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(next);
  }
  listeners.forEach((l) => l());
}

/** Subscribe callback for useSyncExternalStore */
function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

/** Server-side default — prevents hydration mismatch (matches layout.tsx className) */
function getServerSnapshot() {
  return "dark" as Theme;
}

/**
 * Provides dark/light theme context to the component tree.
 * On mount, reads the user's preference from localStorage or the OS
 * `prefers-color-scheme` media query, then applies it to the DOM.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerSnapshot);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const preferred =
      stored ??
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(preferred);
  }, []);

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Access the current theme and toggle function.
 * Must be used within a `<ThemeProvider>`.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
