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
    headline: "Senior Fullstack Engineer",
    description:
      "9+ years building end-to-end applications — from scalable APIs and cloud infrastructure to modern, responsive frontends. I turn complex requirements into clean, maintainable software.",
    viewProjects: "View Projects",
    getInTouch: "Get in Touch",
  },
  about: {
    title: "About Me",
    intro:
      "I'm a senior software engineer with 9+ years of experience designing and building production systems across diverse industries. I work across the entire stack — from backend architecture (APIs, databases, distributed systems) to frontend development (Angular, React/Next.js) — delivering complete solutions end to end.",
    coreFocus: "Core Focus",
    focus: [
      {
        title: "Full-Stack Architecture",
        description: "Designing and delivering complete applications — API contracts, data models, frontend interfaces, and everything in between.",
      },
      {
        title: "Backend Systems",
        description: "REST APIs, relational databases, async processing, and distributed services with Python, Go, and C#.",
      },
      {
        title: "Frontend Development",
        description: "Building responsive, accessible interfaces with Angular, React/Next.js, TypeScript, and modern CSS frameworks.",
      },
      {
        title: "Cloud & Infrastructure",
        description: "Deploying and managing services on AWS, Google Cloud, and bare-metal servers with Docker and Nginx.",
      },
      {
        title: "Event-Driven Design",
        description: "Asynchronous pipelines with message streams, consumer groups, idempotent handlers, and full traceability.",
      },
      {
        title: "DevOps & CI/CD",
        description: "Automated builds, testing pipelines, containerized deployments, and infrastructure as code.",
      },
    ],
    differentiators: "What Sets Me Apart",
    diffs: [
      {
        title: "End-to-End Ownership",
        description: "From architecture decisions to production deployment — I own the full lifecycle.",
      },
      {
        title: "Clean, Justified Code",
        description: "Every technical decision is deliberate, documented, and built to last.",
      },
      {
        title: "Startup & Enterprise",
        description: "Adaptable to fast-moving startups and structured enterprise environments alike.",
      },
      {
        title: "Pragmatic Engineering",
        description: "Solve the real problem. No over-engineering, no unnecessary abstractions.",
      },
    ],
    stats: [
      { value: "9+", label: "Years of Experience" },
      { value: "5", label: "Live Projects" },
      { value: "8", label: "Languages & Frameworks" },
      { value: "3", label: "Cloud Platforms" },
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
    apiPlayground: "API Playground",
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
  playground: {
    howItWorks: "How it works",
    pipeline: "Pipeline",
    triggerOnboarding: "Trigger Onboarding",
    runAgain: "Run Again",
    tryAgain: "Try Again",
    starting: "Starting...",
    processing: "Processing...",
    events: "Events",
    completed: "completed",
    eventsDescription: "This service demonstrates an <strong>event-driven architecture</strong> built with Go and Redis Streams. When a user registers, the system triggers an onboarding pipeline where each step is handled by an independent worker. Workers consume events from Redis Streams, process them idempotently, and publish the next event in the chain.",
    searchDescription: "This API demonstrates <strong>semantic search</strong> using local AI embeddings. Documents are uploaded, split into chunks, and each chunk is converted to a 384-dimensional vector using the <strong>all-MiniLM-L6-v2</strong> model (runs locally, zero API cost). Vectors are stored in ChromaDB and queries are matched by cosine similarity.",
    searchPlaceholder: "Type a search query...",
    searchButton: "Search",
    tryQueries: "Try:",
    resultsFound: "results found",
    noResults: "No results found. Try a different query.",
    viewDocuments: "View indexed documents →",
    indexedDocuments: "Indexed documents:",
    noDocuments: "No documents indexed yet.",
    poweredBy: "Powered by sentence-transformers (all-MiniLM-L6-v2) — local model, no API costs",
    pipelineCompleted: "Onboarding pipeline completed successfully.",
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
