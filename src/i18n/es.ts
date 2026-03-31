import type { Dictionary } from "./types";

const es: Dictionary = {
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },
  hero: {
    badge: "Disponible para oportunidades",
    headline: "Ingeniero Senior Fullstack / Backend",
    description:
      "9+ años construyendo sistemas backend escalables, APIs REST, infraestructura cloud y frontends modernos. Transformo requisitos complejos en software limpio y mantenible.",
    viewProjects: "Ver Proyectos",
    getInTouch: "Contactar",
  },
  about: {
    title: "Sobre Mí",
    intro:
      "Soy ingeniero de software senior con 9+ años de experiencia diseñando y construyendo sistemas en producción en diversas industrias. Mi fortaleza principal es la arquitectura backend — APIs, bases de datos, infraestructura cloud y sistemas distribuidos — pero también me siento cómodo construyendo frontends modernos cuando el proyecto lo requiere.",
    coreFocus: "Enfoque Principal",
    focus: [
      "Arquitectura backend y diseño de APIs (REST, microservicios)",
      "Infraestructura cloud (AWS, Google Cloud)",
      "Diseño y optimización de bases de datos (PostgreSQL, Redis)",
      "Sistemas event-driven y distribuidos",
      "Desarrollo frontend moderno (Angular, React/Next.js)",
      "DevOps, contenedorización y pipelines CI/CD",
    ],
    differentiators: "Lo Que Me Diferencia",
    diffs: [
      "Ownership completo desde arquitectura hasta despliegue",
      "Énfasis en código limpio y decisiones técnicas justificadas",
      "Experiencia en startups y entornos enterprise",
      "Enfoque pragmático: resolver el problema real, evitar sobreingeniería",
    ],
  },
  projects: {
    title: "Proyectos",
    description:
      "Proyectos demostrativos reales con arquitectura seria, código limpio y despliegues en vivo. Cada uno demuestra diferentes aspectos de la ingeniería full-stack.",
    comingSoon: "Próximamente",
    live: "En Vivo",
    highlights: "Aspectos clave",
    liveDemo: "Demo en Vivo",
    sourceCode: "Código Fuente",
    items: [
      {
        slug: "nexus-crm",
        title: "NexusCRM",
        subtitle: "CRM multi-tenant con arquitectura full-stack",
        description:
          "Un CRM multi-tenant liviano que demuestra arquitectura SaaS con autenticación JWT, permisos por rol y flujo de ventas basado en pipeline.",
        highlights: [
          "Aislamiento de datos multi-tenant via organization_id",
          "Autenticación JWT con tokens de acceso/refresco",
          "Control de acceso por roles (Owner, Admin, Sales Rep, Viewer)",
        ],
      },
      {
        slug: "event-driven-service",
        title: "Onboarding Event-Driven",
        subtitle: "Procesamiento asíncrono con Go y Redis Streams",
        description:
          "Un servicio que demuestra arquitectura event-driven usando Go y Redis Streams. Maneja el onboarding de usuarios a través de una cadena de workers desacoplados.",
        highlights: [
          "Consumer groups de Redis Streams para procesamiento confiable",
          "Correlation IDs para trazabilidad end-to-end",
          "Handlers de eventos idempotentes con logica de reintentos",
        ],
      },
      {
        slug: "semantic-search",
        title: "API de Busqueda Semantica",
        subtitle: "Inteligencia documental con embeddings locales",
        description:
          "Una API para subir documentos, procesarlos en chunks, generar embeddings con un modelo local y realizar búsqueda por similitud semántica.",
        highlights: [
          "Embeddings locales con all-MiniLM-L6-v2 (costo cero de API)",
          "Pipeline de chunking con overlap configurable",
          "Soporte para documentos PDF y texto plano",
        ],
      },
    ],
  },
  skills: {
    title: "Habilidades & Stack",
  },
  contact: {
    title: "Contacto",
    description:
      "¿Interesado en trabajar juntos? No dudes en escribirme a través del formulario o conectar por redes sociales.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Email",
    emailPlaceholder: "tu@ejemplo.com",
    messageLabel: "Mensaje",
    messagePlaceholder: "Cuentame sobre tu proyecto u oportunidad...",
    send: "Enviar Mensaje",
    sending: "Enviando...",
    sent: "Mensaje Enviado!",
    emailTitle: "Email",
    connectTitle: "Conectar",
    locationTitle: "Ubicación",
    locationDesc: "Remoto — Abierto a oportunidades remotas en todo el mundo",
  },
  searchDemo: {
    title: "Demo de Busqueda Semantica",
    subtitle:
      "Prueba buscar en documentos indexados usando similitud semántica impulsada por IA",
    placeholder: "Escribe tu consulta de busqueda...",
    search: "Buscar",
    searching: "Buscando...",
    noResults: "Sin resultados",
    noResultsDesc:
      "Intenta con otra consulta o vuelve cuando haya documentos indexados.",
    relevance: "Relevancia",
    source: "Fuente",
    resultsCount: "{{count}} resultados encontrados",
    poweredBy:
      "Impulsado por sentence-transformers (all-MiniLM-L6-v2) — modelo local, sin costos de API",
    errorMessage:
      "No se pudo conectar con la API de búsqueda. El servicio puede estar temporalmente no disponible — intenta más tarde.",
  },
  footer: {
    builtWith: "Construido con Next.js, Tailwind CSS & TypeScript.",
  },
};

export default es;
