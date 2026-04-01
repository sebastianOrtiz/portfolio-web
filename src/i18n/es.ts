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
    headline: "Ingeniero Senior Fullstack",
    description:
      "9+ años construyendo aplicaciones de inicio a fin — desde APIs escalables e infraestructura cloud hasta frontends modernos y responsivos. Transformo requisitos complejos en software limpio y mantenible.",
    viewProjects: "Ver Proyectos",
    getInTouch: "Contactar",
  },
  about: {
    title: "Sobre Mí",
    intro:
      "Soy ingeniero de software senior con 9+ años de experiencia diseñando y construyendo sistemas en producción en diversas industrias. Trabajo en todo el stack — desde arquitectura backend (APIs, bases de datos, sistemas distribuidos) hasta desarrollo frontend (Angular, React/Next.js) — entregando soluciones completas de inicio a fin.",
    coreFocus: "Enfoque Principal",
    focus: [
      {
        title: "Arquitectura Full-Stack",
        description: "Diseño y entrega de aplicaciones completas — contratos de API, modelos de datos, interfaces frontend y todo lo intermedio.",
      },
      {
        title: "Sistemas Backend",
        description: "APIs REST, bases de datos relacionales, procesamiento asíncrono y servicios distribuidos con Python, Go y C#.",
      },
      {
        title: "Desarrollo Frontend",
        description: "Interfaces responsivas y accesibles con Angular, React/Next.js, TypeScript y frameworks CSS modernos.",
      },
      {
        title: "Cloud e Infraestructura",
        description: "Despliegue y gestión de servicios en AWS, Google Cloud y servidores dedicados con Docker y Nginx.",
      },
      {
        title: "Diseño Event-Driven",
        description: "Pipelines asíncronos con streams de mensajes, consumer groups, handlers idempotentes y trazabilidad completa.",
      },
      {
        title: "DevOps y CI/CD",
        description: "Builds automatizados, pipelines de testing, despliegues contenedorizados e infraestructura como código.",
      },
    ],
    differentiators: "Lo Que Me Diferencia",
    diffs: [
      {
        title: "Ownership de Inicio a Fin",
        description: "Desde las decisiones de arquitectura hasta el despliegue en producción — soy dueño del ciclo completo.",
      },
      {
        title: "Código Limpio y Justificado",
        description: "Cada decisión técnica es deliberada, documentada y construida para perdurar.",
      },
      {
        title: "Startup y Enterprise",
        description: "Adaptable tanto a startups de ritmo rápido como a entornos enterprise estructurados.",
      },
      {
        title: "Ingeniería Pragmática",
        description: "Resolver el problema real. Sin sobreingeniería, sin abstracciones innecesarias.",
      },
    ],
    stats: [
      { value: "9+", label: "Años de Experiencia" },
      { value: "5", label: "Proyectos en Vivo" },
      { value: "8", label: "Lenguajes y Frameworks" },
      { value: "3", label: "Plataformas Cloud" },
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
    apiPlayground: "API Playground",
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
          "Handlers de eventos idempotentes con lógica de reintentos",
        ],
      },
      {
        slug: "semantic-search",
        title: "API de Búsqueda Semántica",
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
  playground: {
    howItWorks: "Cómo funciona",
    pipeline: "Pipeline",
    triggerOnboarding: "Iniciar Onboarding",
    runAgain: "Ejecutar de nuevo",
    tryAgain: "Reintentar",
    starting: "Iniciando...",
    processing: "Procesando...",
    events: "Eventos",
    completed: "completado",
    eventsDescription: "Este servicio demuestra una <strong>arquitectura event-driven</strong> construida con Go y Redis Streams. Cuando un usuario se registra, el sistema dispara un pipeline de onboarding donde cada paso es manejado por un worker independiente. Los workers consumen eventos de Redis Streams, los procesan de forma idempotente y publican el siguiente evento en la cadena.",
    searchDescription: "Esta API demuestra <strong>búsqueda semántica</strong> usando embeddings de IA locales. Los documentos se suben, se dividen en chunks, y cada chunk se convierte en un vector de 384 dimensiones usando el modelo <strong>all-MiniLM-L6-v2</strong> (corre localmente, costo cero). Los vectores se almacenan en ChromaDB y las consultas se emparejan por similitud coseno.",
    searchPlaceholder: "Escribe tu consulta de búsqueda...",
    searchButton: "Buscar",
    tryQueries: "Prueba:",
    resultsFound: "resultados encontrados",
    noResults: "Sin resultados. Intenta con otra consulta.",
    viewDocuments: "Ver documentos indexados →",
    indexedDocuments: "Documentos indexados:",
    noDocuments: "No hay documentos indexados aún.",
    poweredBy: "Impulsado por sentence-transformers (all-MiniLM-L6-v2) — modelo local, sin costos de API",
    pipelineCompleted: "Pipeline de onboarding completado exitosamente.",
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
    title: "Demo de Búsqueda Semántica",
    subtitle:
      "Prueba buscar en documentos indexados usando similitud semántica impulsada por IA",
    placeholder: "Escribe tu consulta de búsqueda...",
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
