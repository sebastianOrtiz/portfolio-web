import type { Dictionary } from "./types";

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    badge: "Available for opportunities",
    headline: "Senior Fullstack / Backend Engineer",
    description:
      "9+ years building scalable backend systems, REST APIs, cloud infrastructure, and modern frontends. I turn complex requirements into clean, maintainable software.",
    viewProjects: "View Projects",
    getInTouch: "Get in Touch",
  },
  about: {
    title: "About Me",
    intro:
      "I'm a senior software engineer with 9+ years of experience designing and building production systems across diverse industries. My core strength is backend architecture — APIs, databases, cloud infrastructure, and distributed systems — but I'm equally comfortable building modern frontends when the project calls for it.",
    coreFocus: "Core Focus",
    focus: [
      "Backend architecture and API design (REST, microservices)",
      "Cloud infrastructure (AWS, Google Cloud)",
      "Database design and optimization (PostgreSQL, Redis)",
      "Event-driven and distributed systems",
      "Modern frontend development (Angular, React/Next.js)",
      "DevOps, containerization, and CI/CD pipelines",
    ],
    differentiators: "What Sets Me Apart",
    diffs: [
      "Full ownership from architecture to deployment",
      "Strong emphasis on clean code and justified technical decisions",
      "Experience across startups and enterprise environments",
      "Pragmatic approach: solve the real problem, avoid over-engineering",
    ],
  },
  projects: {
    title: "Projects",
    description:
      "Real-world demonstrative projects with serious architecture, clean code, and live deployments. Each one showcases different aspects of full-stack engineering.",
    comingSoon: "Coming Soon",
    live: "Live",
    highlights: "Key highlights",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    items: [
      {
        slug: "nexus-crm",
        title: "NexusCRM",
        subtitle: "Multi-tenant CRM with full-stack architecture",
        description:
          "A lightweight multi-tenant CRM demonstrating SaaS architecture with JWT auth, role-based permissions, and a pipeline-driven sales workflow.",
        highlights: [
          "Multi-tenant data isolation via organization_id",
          "JWT authentication with access/refresh tokens",
          "Role-based access control (Owner, Admin, Sales Rep, Viewer)",
        ],
      },
      {
        slug: "event-driven-service",
        title: "Event-Driven Onboarding",
        subtitle: "Asynchronous processing with Go and Redis Streams",
        description:
          "A service demonstrating event-driven architecture using Go and Redis Streams. Handles user onboarding through a chain of decoupled workers.",
        highlights: [
          "Redis Streams consumer groups for reliable processing",
          "Correlation IDs for end-to-end traceability",
          "Idempotent event handlers with retry logic",
        ],
      },
      {
        slug: "semantic-search",
        title: "Semantic Search API",
        subtitle: "Document intelligence with local embeddings",
        description:
          "An API for uploading documents, processing them into chunks, generating embeddings with a local model, and performing semantic similarity search.",
        highlights: [
          "Local embeddings with all-MiniLM-L6-v2 (zero API cost)",
          "Chunking pipeline with configurable overlap",
          "PDF and plain text document support",
        ],
      },
    ],
  },
  skills: {
    title: "Skills & Stack",
  },
  contact: {
    title: "Get in Touch",
    description:
      "Interested in working together? Feel free to reach out through the form below or connect via social links.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project or opportunity...",
    send: "Send Message",
    sending: "Sending...",
    sent: "Message Sent!",
    emailTitle: "Email",
    connectTitle: "Connect",
    locationTitle: "Location",
    locationDesc: "Remote — Open to remote opportunities worldwide",
  },
  searchDemo: {
    title: "Semantic Search Demo",
    subtitle:
      "Try searching through indexed documents using AI-powered semantic similarity",
    placeholder: "Type your search query...",
    search: "Search",
    searching: "Searching...",
    noResults: "No results found",
    noResultsDesc:
      "Try a different query or check back when documents are indexed",
    relevance: "Relevance",
    source: "Source",
    resultsCount: "{{count}} results found",
    poweredBy:
      "Powered by sentence-transformers (all-MiniLM-L6-v2) — local model, no API costs",
    errorMessage:
      "Could not reach the search API. The service may be temporarily unavailable — try again later.",
  },
  footer: {
    builtWith: "Built with Next.js, Tailwind CSS & TypeScript.",
  },
};

export default en;
