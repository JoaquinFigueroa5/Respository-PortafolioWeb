export const PROJECTS = [
  {
    id: 1,
    year: "2024",
    title: "Nexus Platform",
    category: "SaaS · Full-Stack",
    desc: "Real-time collaboration suite with WebSockets, multi-tenant architecture and AI-powered insights dashboard.",
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis"
    ],
    accentClass: "text-emerald-400",
    borderClass: "border-emerald-500/20",
    bgClass: "bg-[#050f0a]",
    barClass: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52,211,153,0.1)",
    detailedDesc: "Nexus Platform is a real-time collaboration suite that enables teams to work together seamlessly, regardless of location. Built with WebSockets for instant updates, a multi-tenant architecture to support multiple organizations, and an AI-powered insights dashboard that provides actionable analytics.",
    metrics: [
      "40% increase in team productivity",
      "Sub-100ms real-time sync",
      "99.9% uptime SLA"
    ],
    challenge: "The main challenge was handling concurrent edits from multiple users while maintaining data consistency. Traditional REST APIs introduced too much latency, and existing real-time solutions didn't scale beyond 50 concurrent users.",
    solution: "Implemented a custom WebSocket layer with operational transformation for conflict resolution, Redis for pub/sub messaging, and PostgreSQL with row-level security for multi-tenancy. Added an AI layer that analyzes team patterns to provide predictive insights."
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