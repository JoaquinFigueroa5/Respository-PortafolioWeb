export const PROJECTS = [
  {
    id: 1,
    year: "2025",
    title: "Auto Ventas Juanes",
    category: "Aplicacion Web",
    desc: "Plataforma web para la gestion de venta de vehiculos usados en Guatemala.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Chakra UI"
    ],
    accentClass: "text-red-400",
    borderClass: "border-red-500/20",
    bgClass: "bg-[#000000]",
    barClass: "from-red-400 to-black-500",
    glowColor: "rgba(255,0,0,0.1)",
    detailedDesc: "Plataforma web para la gestion de venta de vehiculos en Guatemala. Cuenta tanto con vista de usuario-cliente como usuario-administrador donde en la parte administrativa se podran gestionar de manera eficiente cada vechiculo como añadir al inventario con el almacenamiento de imagenes en la nube con Cloudinary, ademas de la busqueda, edicion y eliminacion (marcado como vendido).",
    metrics: [
      "Diseñado y desarrollado para la gestión eficiente de ventas de vehículos.",
      "Implementación de sistema de autenticación seguro con JWT.",
      "Integración con servicios en la nube para almacenamiento de imágenes."
    ],
    challenge: "Mi primer proyecto vendido profesionalmente ademas de nueva implementacion de tecnologias en la nube como lo es Cloudinary, ademas de estar en un entorno de 'la vida real' de programacion y priorizar la optimizacion a la vez de presentar algo 'intuitivo' tanto para el usuario como el administrador.",
    solution: "Se optimizó el rendimiento de la aplicación mediante la implementación de técnicas de optimización de código y recursos, además de implementar un sistema de autenticación seguro con JWT que permitio la implementacion de esta plataforma web para un negocio que no contaba con ninguna pagina web y que lo impulso por delante de la competencia.",
    liveLink: "https://autoventasjuanes-dd720.web.app/",
    repoLink: "",
    images: [
      {
        "src": "/AutoVentas/carrousel.png",
        "alt": "Screenshot del carrusel"
      },
      {
        "src": "/AutoVentas/modal.png",
        "alt": "Screenshot del modal"
      },
      {
        "src": "/AutoVentas/expand-image.png",
        "alt": "Screenshot del expand-image"
      },
      {
        "src": "/AutoVentas/filters.png",
        "alt": "Screenshot del filters"
      }
    ]
  },
  {
    id: 2,
    year: "2024",
    title: "Orbit Design System",
    category: "Design System · Frontend",
    desc: "Comprehensive component library serving 40+ products with automated a11y testing & Storybook documentation.",
    tags: [
      "TypeScript",
      "Storybook",
      "CSS Vars",
      "Jest"
    ],
    accentClass: "text-violet-400",
    borderClass: "border-violet-500/20",
    bgClass: "bg-[#0a050f]",
    barClass: "from-violet-400 to-purple-500",
    glowColor: "rgba(139,92,246,0.1)",
    detailedDesc: "Orbit is a comprehensive design system that powers 40+ products across the company. It includes 150+ accessible components, a comprehensive Storybook documentation site, and automated accessibility testing that integrates into the CI/CD pipeline.",
    metrics: [
      "40+ products using Orbit",
      "100% WCAG 2.1 AA compliance",
      "50% reduction in development time"
    ],
    challenge: "Maintaining consistency across 40+ products while allowing enough flexibility for teams was difficult. Manual testing for accessibility was time-consuming and error-prone.",
    solution: "Created a TypeScript-first component library with CSS custom properties for theming. Built an automated accessibility testing pipeline using Jest and axe-core. Documented everything in Storybook with interactive playgrounds."
  },
  {
    id: 3,
    year: "2023",
    title: "Flux Commerce",
    category: "E-Commerce · Web App",
    desc: "High-performance storefront with edge rendering, 98 Lighthouse score and sub-50ms TTFB globally.",
    tags: [
      "Next.js",
      "Vercel Edge",
      "Stripe",
      "Sanity"
    ],
    accentClass: "text-orange-400",
    borderClass: "border-orange-500/20",
    bgClass: "bg-[#0f0700]",
    barClass: "from-orange-400 to-red-400",
    glowColor: "rgba(251,146,60,0.1)",
    detailedDesc: "Flux Commerce is a high-performance e-commerce storefront built for scale. Using Next.js with Vercel Edge functions, we achieved a 98 Lighthouse score and sub-50ms TTFB globally.",
    metrics: [
      "98 Lighthouse score",
      "Sub-50ms TTFB globally",
      "3x increase in conversion rate"
    ],
    challenge: "Legacy e-commerce platform was slow, with TTFB over 2 seconds. Poor mobile experience was hurting conversion rates significantly.",
    solution: "Moved to Next.js with Vercel Edge for global distribution. Implemented Sanity CMS for content and Stripe for payments. Used dynamic rendering with stale-while-revalidate for optimal performance."
  },
  {
    id: 4,
    year: "2023",
    title: "Prism Analytics",
    category: "Dashboard · Data Viz",
    desc: "Interactive analytics platform processing 1M+ events/day with a custom WebGL chart engine.",
    tags: [
      "Vue 3",
      "D3.js",
      "WebGL",
      "ClickHouse"
    ],
    accentClass: "text-amber-400",
    borderClass: "border-amber-500/20",
    bgClass: "bg-[#0f0d00]",
    barClass: "from-amber-400 to-yellow-300",
    glowColor: "rgba(251,191,36,0.1)",
    detailedDesc: "Prism Analytics processes over 1 million events per day, providing real-time insights through an interactive dashboard. Built a custom WebGL chart engine from scratch to handle large datasets with smooth 60fps performance.",
    metrics: [
      "1M+ events/day processing",
      "60fps with large datasets",
      "Real-time insights < 500ms"
    ],
    challenge: "Processing and visualizing millions of data points in real-time while maintaining smooth performance was extremely challenging. Existing charting libraries couldn't handle the data volume.",
    solution: "Built a custom WebGL chart engine using Vue 3 and D3.js for data processing. Integrated ClickHouse for efficient time-series queries. Implemented progressive rendering for smooth interactions."
  },
];