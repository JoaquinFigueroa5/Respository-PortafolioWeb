import { 
  FaReact, 
  FaNodeJs, 
  FaJava, 
  FaDocker, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt, 
  FaPhp, 
  FaPython 
} from "react-icons/fa";
import { SiSpringboot, 
  SiMysql, 
  SiPostgresql,  
  SiMongodb, 
  SiTypescript, 
  SiTailwindcss, 
  SiShadcnui, 
  SiChakraui, 
  SiFigma,
  SiExpress
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

export const SKILLS = [
  { label: "React", level: 91 },
  { label: "Node.js", level: 88 },
  { label: "Express", level: 88 },
  { label: "Java", level: 81},
  { label: "Springboot", level: 80},
  { label: "MySQL", level: 90 },
  { label: "PostgreSQL", level: 82},
  { label: "SQL Server", level: 82},
  { label: "MongoDB", level: 90},
  { label: "Docker", level: 70 },
  { label: "Git", level: 95 },
  { label: "TypeScript", level: 50 },
  { label: "HTML", level: 90 },
  { label: "CSS", level: 90 },
  { label: "PHP", level: 80 },
  { label: "React Native", level: 80 },
  { label: "TailwindCSS", level: 90 },
  { label: "Shadcn/ui", level: 89 },
  { label: "ChakraUI", level: 89 }, 
  { label: "UI/UX Design", level: 85 },
  { label: "Python", level: 40 },
];

export const TOOLS = [
  "VS Code",
  "Antigravity",
  "Cursor",
  "Opencode",
  "Ollama",
  "Brave",
  "Docker",
  "GitHub",
  "Vercel",
  "Firebase Deployment",
  "Postman",
];

export const TIERS = [
  { label: "Experto",     range: "90+",  accent: "#34d399" },
  { label: "Avanzado",   range: "80–89", accent: "#a78bfa" },
  { label: "Proficiente", range: "70–79", accent: "#60a5fa" },
  { label: "Competente",  range: "50–69", accent: "#fb923c" },
  { label: "Aprendiendo",   range: "< 50", accent: "#f87171" },
];

export const ICON_MAP = {
  "React":          { icon: FaReact,              color: "#61dafb" },
  "Node.js":        { icon: FaNodeJs,             color: "#8cc84b" },
  "Express":        { icon: SiExpress,            color: "#F3E024" },
  "Java":           { icon: FaJava,               color: "#f89820" },
  "Springboot":     { icon: SiSpringboot,         color: "#6db33f" },
  "MySQL":          { icon: SiMysql,              color: "#4479a1" },
  "PostgreSQL":     { icon: SiPostgresql,         color: "#336791" },
  "SQL Server":     { icon: DiMsqlServer,         color: "#cc2927" },
  "MongoDB":        { icon: SiMongodb,            color: "#47a248" },
  "Docker":         { icon: FaDocker,             color: "#2496ed" },
  "Git":            { icon: FaGitAlt,             color: "#f05032" },
  "TypeScript":     { icon: SiTypescript,         color: "#3178c6" },
  "HTML":           { icon: FaHtml5,              color: "#e34f26" },
  "CSS":            { icon: FaCss3Alt,            color: "#1572b6" },
  "PHP":            { icon: FaPhp,                color: "#8892bf" },
  "React Native":   { icon: TbBrandReactNative,   color: "#61dafb" },
  "TailwindCSS":    { icon: SiTailwindcss,        color: "#38bdf8" },
  "Shadcn/ui":      { icon: SiShadcnui,           color: "#ffffff" },
  "ChakraUI":       { icon: SiChakraui,           color: "#319795" },
  "UI/UX Design":   { icon: SiFigma,              color: "#f24e1e" },
  "Python":         { icon: FaPython,             color: "#3776ab" },
};

export const GROUPS = [
  {
    key: "frontend",
    label: "Frontend",
    accent: "#34d399",
    skills: ["React", "React Native", "HTML", "CSS", "TailwindCSS", "Shadcn/ui", "ChakraUI", "TypeScript", "UI/UX Design"],
  },
  {
    key: "backend",
    label: "Backend",
    accent: "#a78bfa",
    skills: ["Node.js", "Express", "Java", "Springboot", "PHP", "Python"],
  },
  {
    key: "data",
    label: "Data & Infra",
    accent: "#60a5fa",
    skills: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Docker", "Git"],
  },
];