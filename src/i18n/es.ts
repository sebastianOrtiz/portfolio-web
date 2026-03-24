import type { Dictionary } from "./types";

const es: Dictionary = {
  nav: {
    home: "Inicio",
    about: "Sobre mi",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },
  hero: {
    badge: "Disponible para oportunidades",
    headline: "Ingeniero Senior Fullstack / Backend",
    description:
      "9+ anos construyendo sistemas backend escalables, APIs REST, infraestructura cloud y frontends modernos. Transformo requisitos complejos en software limpio y mantenible.",
    viewProjects: "Ver Proyectos",
    getInTouch: "Contactar",
  },
  about: {
    title: "Sobre Mi",
    intro:
      "Soy ingeniero de software senior con 9+ anos de experiencia disenando y construyendo sistemas en produccion en diversas industrias. Mi fortaleza principal es la arquitectura backend — APIs, bases de datos, infraestructura cloud y sistemas distribuidos — pero tambien me siento comodo construyendo frontends modernos cuando el proyecto lo requiere.",
    coreFocus: "Enfoque Principal",
    focus: [
      "Arquitectura backend y diseno de APIs (REST, microservicios)",
      "Infraestructura cloud (AWS, Google Cloud)",
      "Diseno y optimizacion de bases de datos (PostgreSQL, Redis)",
      "Sistemas event-driven y distribuidos",
      "Desarrollo frontend moderno (Angular, React/Next.js)",
      "DevOps, contenedorizacion y pipelines CI/CD",
    ],
    differentiators: "Lo Que Me Diferencia",
    diffs: [
      "Ownership completo desde arquitectura hasta despliegue",
      "Enfasis en codigo limpio y decisiones tecnicas justificadas",
      "Experiencia en startups y entornos enterprise",
      "Enfoque pragmatico: resolver el problema real, evitar sobreingenieria",
    ],
  },
  projects: {
    title: "Proyectos",
    description:
      "Proyectos demostrativos reales con arquitectura seria, codigo limpio y despliegues en vivo. Cada uno demuestra diferentes aspectos de la ingenieria full-stack.",
    comingSoon: "Proximamente",
    live: "En Vivo",
    highlights: "Aspectos clave",
    liveDemo: "Demo en Vivo",
    sourceCode: "Codigo Fuente",
    items: [
      {
        slug: "nexus-crm",
        title: "NexusCRM",
        subtitle: "CRM multi-tenant con arquitectura full-stack",
        description:
          "Un CRM multi-tenant liviano que demuestra arquitectura SaaS con autenticacion JWT, permisos por rol y flujo de ventas basado en pipeline.",
        highlights: [
          "Aislamiento de datos multi-tenant via organization_id",
          "Autenticacion JWT con tokens de acceso/refresco",
          "Control de acceso por roles (Owner, Admin, Sales Rep, Viewer)",
        ],
      },
      {
        slug: "event-driven-service",
        title: "Onboarding Event-Driven",
        subtitle: "Procesamiento asincrono con Go y Redis Streams",
        description:
          "Un servicio que demuestra arquitectura event-driven usando Go y Redis Streams. Maneja el onboarding de usuarios a traves de una cadena de workers desacoplados.",
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
          "Una API para subir documentos, procesarlos en chunks, generar embeddings con un modelo local y realizar busqueda por similitud semantica.",
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
      "Interesado en trabajar juntos? No dudes en escribirme a traves del formulario o conectar por redes sociales.",
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
    locationTitle: "Ubicacion",
    locationDesc: "Remoto — Abierto a oportunidades remotas en todo el mundo",
  },
  footer: {
    builtWith: "Construido con Next.js, Tailwind CSS & TypeScript.",
  },
};

export default es;
