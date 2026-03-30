/** Supported locale codes (ISO 639-1) */
export type Locale = "en" | "es";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

/**
 * Complete translation dictionary for a single locale.
 * Each section key corresponds to a page section component.
 * `projects.items` must match the order of `projects` array in data/content.ts
 * to allow index-based alignment between static data and translations.
 */
export interface Dictionary {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    badge: string;
    headline: string;
    description: string;
    viewProjects: string;
    getInTouch: string;
  };
  about: {
    title: string;
    intro: string;
    coreFocus: string;
    focus: string[];
    differentiators: string;
    diffs: string[];
  };
  projects: {
    title: string;
    description: string;
    comingSoon: string;
    live: string;
    highlights: string;
    liveDemo: string;
    sourceCode: string;
    items: {
      slug: string;
      title: string;
      subtitle: string;
      description: string;
      highlights: string[];
    }[];
  };
  skills: {
    title: string;
  };
  contact: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    sent: string;
    emailTitle: string;
    connectTitle: string;
    locationTitle: string;
    locationDesc: string;
  };
  searchDemo: {
    title: string;
    subtitle: string;
    placeholder: string;
    search: string;
    searching: string;
    noResults: string;
    noResultsDesc: string;
    relevance: string;
    source: string;
    resultsCount: string;
    poweredBy: string;
    errorMessage: string;
  };
  footer: {
    builtWith: string;
  };
}
