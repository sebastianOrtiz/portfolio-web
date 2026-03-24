export const siteConfig = {
  name: "Sebastian",
  headline: "Senior Fullstack / Backend Engineer",
  description:
    "9+ years building scalable backend systems, REST APIs, cloud infrastructure, and modern frontends. I turn complex requirements into clean, maintainable software.",
  email: "sebastianortiz989@gmail.com",
  github: "https://github.com/sebastianOrtiz",
  linkedin: "https://www.linkedin.com/in/sebastian-ortiz-valencia-86b458a6/",
  location: "Remote",
};

export const aboutContent = {
  intro:
    "I'm a senior software engineer with 9+ years of experience designing and building production systems across diverse industries. My core strength is backend architecture — APIs, databases, cloud infrastructure, and distributed systems — but I'm equally comfortable building modern frontends when the project calls for it.",
  focus: [
    "Backend architecture and API design (REST, microservices)",
    "Cloud infrastructure (AWS, Google Cloud)",
    "Database design and optimization (PostgreSQL, Redis)",
    "Event-driven and distributed systems",
    "Modern frontend development (Angular, React/Next.js)",
    "DevOps, containerization, and CI/CD pipelines",
  ],
  differentiators: [
    "Full ownership from architecture to deployment",
    "Strong emphasis on clean code and justified technical decisions",
    "Experience across startups and enterprise environments",
    "Pragmatic approach: solve the real problem, avoid over-engineering",
  ],
};

export const skills = [
  {
    category: "Backend",
    items: ["Python", "Go", "C#", "FastAPI", "Django", ".NET"],
  },
  {
    category: "Frontend",
    items: ["Angular", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQLAlchemy", "ChromaDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Docker", "GitHub Actions", "Nginx", "Linux"],
  },
  {
    category: "Architecture",
    items: ["REST API Design", "Multi-tenancy", "Event-Driven", "Microservices", "SOLID"],
  },
  {
    category: "Messaging & Async",
    items: ["Redis Streams", "Background Workers", "Pub/Sub"],
  },
  {
    category: "Testing & Quality",
    items: ["pytest", "Jest", "Integration Tests", "CI/CD"],
  },
  {
    category: "AI & Search",
    items: ["Sentence Transformers", "Embeddings", "Semantic Search", "ChromaDB"],
  },
];

/**
 * Represents a portfolio project displayed in the Projects section.
 * Each project has both static data (here) and translated content (in i18n/).
 * The `slug` field is used to match translated content by index alignment.
 */
export interface Project {
  /** URL-friendly identifier, used to align with i18n translations by index */
  slug: string;
  /** Default display name (English). Overridden by i18n if available */
  title: string;
  /** Short tagline describing the project's technical approach */
  subtitle: string;
  /** Brief summary of what the project does */
  description: string;
  /** The engineering challenge this project demonstrates */
  problem: string;
  /** Technologies used, displayed as badges */
  stack: string[];
  /** Key technical achievements, max 3 shown in cards */
  highlights: string[];
  /** URL to the live deployment */
  demoUrl: string;
  /** URL to the source code repository */
  repoUrl: string;
  /** Current deployment status — affects badge color in UI */
  status: "live" | "coming-soon";
}

export const projects: Project[] = [
  {
    slug: "nexus-crm",
    title: "NexusCRM",
    subtitle: "Multi-tenant CRM with full-stack architecture",
    description:
      "A lightweight multi-tenant CRM demonstrating SaaS architecture with JWT auth, role-based permissions, and a pipeline-driven sales workflow.",
    problem:
      "Demonstrate the ability to design and build a realistic SaaS application with proper multi-tenancy, authentication, and clean layered architecture.",
    stack: ["FastAPI", "Angular", "PostgreSQL", "Redis", "SQLAlchemy", "JWT", "Docker"],
    highlights: [
      "Multi-tenant data isolation via organization_id",
      "JWT authentication with access/refresh tokens",
      "Role-based access control (Owner, Admin, Sales Rep, Viewer)",
      "Kanban board for deal pipeline management",
      "Dashboard with KPIs and revenue charts",
    ],
    demoUrl: "https://crm.sebasing.dev",
    repoUrl: "https://github.com/sebasing/sebasing-portfolio",
    status: "coming-soon",
  },
  {
    slug: "event-driven-service",
    title: "Event-Driven Onboarding",
    subtitle: "Asynchronous processing with Go and Redis Streams",
    description:
      "A service demonstrating event-driven architecture using Go and Redis Streams. Handles user onboarding through a chain of decoupled workers.",
    problem:
      "Show proficiency in distributed, event-driven systems with proper event sourcing, idempotency, and traceability.",
    stack: ["Go", "Redis Streams", "PostgreSQL", "Docker"],
    highlights: [
      "Redis Streams consumer groups for reliable processing",
      "Correlation IDs for end-to-end traceability",
      "Idempotent event handlers with retry logic",
      "Event store with full audit trail",
      "Structured JSON logging",
    ],
    demoUrl: "https://events.sebasing.dev",
    repoUrl: "https://github.com/sebasing/sebasing-portfolio",
    status: "coming-soon",
  },
  {
    slug: "semantic-search",
    title: "Semantic Search API",
    subtitle: "Document intelligence with local embeddings",
    description:
      "An API for uploading documents, processing them into chunks, generating embeddings with a local model, and performing semantic similarity search.",
    problem:
      "Demonstrate practical AI/ML integration: document ingestion pipelines, vector embeddings, and similarity search — without expensive external APIs.",
    stack: ["FastAPI", "sentence-transformers", "ChromaDB", "PostgreSQL", "Docker"],
    highlights: [
      "Local embeddings with all-MiniLM-L6-v2 (zero API cost)",
      "Chunking pipeline with configurable overlap",
      "PDF and plain text document support",
      "Similarity search with relevance scoring",
      "Clean separation between ingestion and query paths",
    ],
    demoUrl: "https://search.sebasing.dev",
    repoUrl: "https://github.com/sebasing/sebasing-portfolio",
    status: "coming-soon",
  },
];
