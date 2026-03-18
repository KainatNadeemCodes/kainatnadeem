import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Clock, Brain, Shield, Zap, Globe, Eye, GitBranch } from "lucide-react";
import { useNavigate } from "react-router-dom";
import projectHealth from "@/assets/project-health.jpg";
import projectNextGenShe from "@/assets/project-nextgenshe.jpg";
import projectHaven from "@/assets/project-haven.jpg";

// ─────────────────────────────────────────────────────────────────────────────
// Architecture overlay diagrams — one inline SVG per project
// ─────────────────────────────────────────────────────────────────────────────

// Smart Health: decision tree / triage flow
const HealthArchSVG = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Nodes */}
    {/* Input */}
    <rect x="78" y="8" width="64" height="22" rx="4" fill="rgba(59,130,246,0.18)" stroke="rgba(96,165,250,0.5)" strokeWidth="0.8"/>
    <text x="110" y="22" textAnchor="middle" fill="rgba(147,197,253,0.9)" fontSize="7" fontFamily="monospace">Symptom Input</text>
    {/* Arrow down */}
    <line x1="110" y1="30" x2="110" y2="42" stroke="rgba(96,165,250,0.4)" strokeWidth="0.8"/>
    <polygon points="107,40 113,40 110,44" fill="rgba(96,165,250,0.4)"/>
    {/* NLP parser */}
    <rect x="78" y="44" width="64" height="20" rx="4" fill="rgba(139,92,246,0.15)" stroke="rgba(167,139,250,0.4)" strokeWidth="0.8"/>
    <text x="110" y="57" textAnchor="middle" fill="rgba(196,181,253,0.9)" fontSize="7" fontFamily="monospace">NLP Parser</text>
    {/* Fork arrows */}
    <line x1="110" y1="64" x2="110" y2="70" stroke="rgba(96,165,250,0.35)" strokeWidth="0.8"/>
    <line x1="110" y1="70" x2="55" y2="78" stroke="rgba(96,165,250,0.35)" strokeWidth="0.8"/>
    <line x1="110" y1="70" x2="165" y2="78" stroke="rgba(96,165,250,0.35)" strokeWidth="0.8"/>
    {/* Decision node left */}
    <rect x="20" y="78" width="70" height="20" rx="4" fill="rgba(16,185,129,0.12)" stroke="rgba(52,211,153,0.35)" strokeWidth="0.8"/>
    <text x="55" y="91" textAnchor="middle" fill="rgba(110,231,183,0.85)" fontSize="6.5" fontFamily="monospace">Decision Logic</text>
    {/* Decision node right */}
    <rect x="130" y="78" width="70" height="20" rx="4" fill="rgba(239,68,68,0.1)" stroke="rgba(252,165,165,0.3)" strokeWidth="0.8"/>
    <text x="165" y="91" textAnchor="middle" fill="rgba(252,165,165,0.85)" fontSize="6.5" fontFamily="monospace">Escalate ⚠</text>
    {/* Arrow left to output */}
    <line x1="55" y1="98" x2="55" y2="108" stroke="rgba(52,211,153,0.35)" strokeWidth="0.8"/>
    <rect x="20" y="108" width="70" height="20" rx="4" fill="rgba(16,185,129,0.15)" stroke="rgba(52,211,153,0.4)" strokeWidth="0.8"/>
    <text x="55" y="121" textAnchor="middle" fill="rgba(110,231,183,0.9)" fontSize="6.5" fontFamily="monospace">AI Response</text>
    {/* Arrow right to output */}
    <line x1="165" y1="98" x2="165" y2="108" stroke="rgba(252,165,165,0.3)" strokeWidth="0.8"/>
    <rect x="130" y="108" width="70" height="20" rx="4" fill="rgba(239,68,68,0.08)" stroke="rgba(252,165,165,0.25)" strokeWidth="0.8"/>
    <text x="165" y="121" textAnchor="middle" fill="rgba(252,165,165,0.8)" fontSize="6.5" fontFamily="monospace">Human Oversight</text>
  </svg>
);

// NextGenShe: platform architecture / data flow
const NextGenSheArchSVG = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* User layer */}
    <rect x="10" y="10" width="200" height="20" rx="4" fill="rgba(139,92,246,0.14)" stroke="rgba(167,139,250,0.4)" strokeWidth="0.8"/>
    <text x="110" y="23" textAnchor="middle" fill="rgba(196,181,253,0.9)" fontSize="7" fontFamily="monospace">User Layer — Mobile / Web</text>
    {/* Arrows */}
    <line x1="55"  y1="30" x2="55"  y2="42" stroke="rgba(167,139,250,0.3)" strokeWidth="0.8"/>
    <line x1="110" y1="30" x2="110" y2="42" stroke="rgba(167,139,250,0.3)" strokeWidth="0.8"/>
    <line x1="165" y1="30" x2="165" y2="42" stroke="rgba(167,139,250,0.3)" strokeWidth="0.8"/>
    {/* 3 modules */}
    <rect x="10"  y="42" width="80" height="20" rx="4" fill="rgba(59,130,246,0.12)" stroke="rgba(96,165,250,0.35)" strokeWidth="0.8"/>
    <text x="50"  y="55" textAnchor="middle" fill="rgba(147,197,253,0.85)" fontSize="6.5" fontFamily="monospace">Curriculum Engine</text>
    <rect x="100" y="42" width="50" height="20" rx="4" fill="rgba(59,130,246,0.12)" stroke="rgba(96,165,250,0.35)" strokeWidth="0.8"/>
    <text x="125" y="55" textAnchor="middle" fill="rgba(147,197,253,0.85)" fontSize="6.5" fontFamily="monospace">Mentorship</text>
    <rect x="160" y="42" width="50" height="20" rx="4" fill="rgba(59,130,246,0.12)" stroke="rgba(96,165,250,0.35)" strokeWidth="0.8"/>
    <text x="185" y="55" textAnchor="middle" fill="rgba(147,197,253,0.85)" fontSize="6.5" fontFamily="monospace">Community</text>
    {/* Down to API layer */}
    <line x1="110" y1="62" x2="110" y2="74" stroke="rgba(167,139,250,0.3)" strokeWidth="0.8"/>
    <rect x="40" y="74" width="140" height="20" rx="4" fill="rgba(139,92,246,0.12)" stroke="rgba(167,139,250,0.35)" strokeWidth="0.8"/>
    <text x="110" y="87" textAnchor="middle" fill="rgba(196,181,253,0.85)" fontSize="7" fontFamily="monospace">API Gateway — FastAPI</text>
    {/* Down to DB */}
    <line x1="110" y1="94" x2="110" y2="106" stroke="rgba(167,139,250,0.3)" strokeWidth="0.8"/>
    <rect x="55" y="106" width="110" height="20" rx="4" fill="rgba(16,185,129,0.1)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.8"/>
    <text x="110" y="119" textAnchor="middle" fill="rgba(110,231,183,0.85)" fontSize="7" fontFamily="monospace">Database · Privacy-First</text>
  </svg>
);

// Haven: UI component structure / accessibility tree
const HavenArchSVG = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Root */}
    <rect x="75" y="8" width="70" height="20" rx="4" fill="rgba(16,185,129,0.15)" stroke="rgba(52,211,153,0.45)" strokeWidth="0.8"/>
    <text x="110" y="21" textAnchor="middle" fill="rgba(110,231,183,0.9)" fontSize="7" fontFamily="monospace">App Shell</text>
    {/* Branch lines */}
    <line x1="110" y1="28" x2="110" y2="36" stroke="rgba(52,211,153,0.35)" strokeWidth="0.8"/>
    <line x1="110" y1="36" x2="45"  y2="44" stroke="rgba(52,211,153,0.35)" strokeWidth="0.8"/>
    <line x1="110" y1="36" x2="110" y2="44" stroke="rgba(52,211,153,0.35)" strokeWidth="0.8"/>
    <line x1="110" y1="36" x2="175" y2="44" stroke="rgba(52,211,153,0.35)" strokeWidth="0.8"/>
    {/* 3 children */}
    <rect x="10"  y="44" width="70" height="18" rx="3" fill="rgba(16,185,129,0.1)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.7"/>
    <text x="45"  y="56" textAnchor="middle" fill="rgba(110,231,183,0.8)" fontSize="6" fontFamily="monospace">Focus Mode</text>
    <rect x="75"  y="44" width="70" height="18" rx="3" fill="rgba(16,185,129,0.1)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.7"/>
    <text x="110" y="56" textAnchor="middle" fill="rgba(110,231,183,0.8)" fontSize="6" fontFamily="monospace">Sensory Control</text>
    <rect x="140" y="44" width="70" height="18" rx="3" fill="rgba(16,185,129,0.1)" stroke="rgba(52,211,153,0.3)" strokeWidth="0.7"/>
    <text x="175" y="56" textAnchor="middle" fill="rgba(110,231,183,0.8)" fontSize="6" fontFamily="monospace">Safe Space</text>
    {/* WCAG layer */}
    <line x1="45"  y1="62" x2="45"  y2="74" stroke="rgba(52,211,153,0.25)" strokeWidth="0.7"/>
    <line x1="110" y1="62" x2="110" y2="74" stroke="rgba(52,211,153,0.25)" strokeWidth="0.7"/>
    <line x1="175" y1="62" x2="175" y2="74" stroke="rgba(52,211,153,0.25)" strokeWidth="0.7"/>
    <rect x="10" y="74" width="200" height="18" rx="3" fill="rgba(16,185,129,0.08)" stroke="rgba(52,211,153,0.25)" strokeWidth="0.7"/>
    <text x="110" y="86" textAnchor="middle" fill="rgba(110,231,183,0.75)" fontSize="6.5" fontFamily="monospace">WCAG 2.1 AA · Accessibility Layer</text>
    {/* Cognitive load bar */}
    <line x1="110" y1="92" x2="110" y2="102" stroke="rgba(52,211,153,0.25)" strokeWidth="0.7"/>
    <rect x="30" y="102" width="160" height="18" rx="3" fill="rgba(139,92,246,0.1)" stroke="rgba(167,139,250,0.3)" strokeWidth="0.7"/>
    <text x="110" y="114" textAnchor="middle" fill="rgba(196,181,253,0.8)" fontSize="6.5" fontFamily="monospace">Cognitive Load Monitor</text>
  </svg>
);

// SheSphere: event-driven safety system
const SheSphereArchSVG = () => (
  <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="75" y="8" width="70" height="20" rx="4" fill="rgba(236,72,153,0.14)" stroke="rgba(244,114,182,0.4)" strokeWidth="0.8"/>
    <text x="110" y="21" textAnchor="middle" fill="rgba(249,168,212,0.9)" fontSize="7" fontFamily="monospace">SOS Trigger</text>
    <line x1="110" y1="28" x2="110" y2="40" stroke="rgba(244,114,182,0.35)" strokeWidth="0.8"/>
    <line x1="110" y1="40" x2="55"  y2="50" stroke="rgba(244,114,182,0.35)" strokeWidth="0.8"/>
    <line x1="110" y1="40" x2="165" y2="50" stroke="rgba(244,114,182,0.35)" strokeWidth="0.8"/>
    <rect x="15"  y="50" width="80" height="20" rx="4" fill="rgba(236,72,153,0.1)" stroke="rgba(244,114,182,0.3)" strokeWidth="0.8"/>
    <text x="55"  y="63" textAnchor="middle" fill="rgba(249,168,212,0.85)" fontSize="6.5" fontFamily="monospace">Alert Broadcast</text>
    <rect x="125" y="50" width="80" height="20" rx="4" fill="rgba(236,72,153,0.1)" stroke="rgba(244,114,182,0.3)" strokeWidth="0.8"/>
    <text x="165" y="63" textAnchor="middle" fill="rgba(249,168,212,0.85)" fontSize="6.5" fontFamily="monospace">Story Feed</text>
    <line x1="55"  y1="70" x2="55"  y2="82" stroke="rgba(244,114,182,0.25)" strokeWidth="0.8"/>
    <line x1="165" y1="70" x2="165" y2="82" stroke="rgba(244,114,182,0.25)" strokeWidth="0.8"/>
    <rect x="15"  y="82" width="80" height="18" rx="3" fill="rgba(239,68,68,0.1)"  stroke="rgba(252,165,165,0.3)" strokeWidth="0.7"/>
    <text x="55"  y="94" textAnchor="middle" fill="rgba(252,165,165,0.8)" fontSize="6" fontFamily="monospace">Emergency Contacts</text>
    <rect x="125" y="82" width="80" height="18" rx="3" fill="rgba(59,130,246,0.1)" stroke="rgba(96,165,250,0.3)"  strokeWidth="0.7"/>
    <text x="165" y="94" textAnchor="middle" fill="rgba(147,197,253,0.8)" fontSize="6" fontFamily="monospace">Community Layer</text>
    <line x1="110" y1="100" x2="110" y2="112" stroke="rgba(244,114,182,0.2)" strokeWidth="0.7"/>
    <rect x="50" y="112" width="120" height="18" rx="3" fill="rgba(236,72,153,0.08)" stroke="rgba(244,114,182,0.2)" strokeWidth="0.7"/>
    <text x="110" y="124" textAnchor="middle" fill="rgba(249,168,212,0.7)" fontSize="6.5" fontFamily="monospace">React · TypeScript · Realtime</text>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────

const projects = [
  {
    title: "AI-Powered Smart Health Assistant",
    category: "AI Engineering",
    categoryIcon: Brain,
    impact: "End-to-end AI triage system · FastAPI + Scikit-Learn + NLTK · Healthcare accessibility in low-resource environments",
    summary: "Symptom analysis system using structured decision-routing logic, rule-based AI, and ethical human oversight constraints.",
    tech: ["Python", "FastAPI", "Scikit-Learn", "NLTK", "Decision Logic"],
    image: projectHealth,
    slug: "/case-study/smart-health-assistant",
    liveUrl: null,
    repoUrl: "https://github.com/KainatNadeemCodes",
    accentColor: "blue",
    archLabel: "Decision Flow",
    ArchDiagram: HealthArchSVG,
  },
  {
    title: "NextGenShe",
    category: "Systems Design · Social Impact",
    categoryIcon: Globe,
    impact: "Women's STEM initiative · Aspire Capstone · Scaling digital literacy in rural Pakistan",
    summary: "Technology platform addressing educational access barriers for women in underserved communities.",
    tech: ["Platform Architecture", "UX Research", "Systems Design", "React"],
    image: projectNextGenShe,
    slug: "/case-study/nextgenshe",
    liveUrl: "https://women-edu-first.vercel.app",
    repoUrl: null,
    accentColor: "violet",
    archLabel: "Platform Architecture",
    ArchDiagram: NextGenSheArchSVG,
  },
  {
    title: "Haven",
    category: "Accessibility · Inclusive Design",
    categoryIcon: Shield,
    impact: "Neuro-inclusive safety platform · Cognitive load theory applied · HCD + WCAG accessibility principles",
    summary: "Sensory-friendly interface applying cognitive load theory and structured UX decision-making for neurodivergent users.",
    tech: ["Figma", "HCD", "Accessibility", "WCAG", "UX Research"],
    image: projectHaven,
    slug: "/case-study/haven",
    liveUrl: "https://safespacehaven.lovable.app",
    repoUrl: null,
    accentColor: "emerald",
    archLabel: "UI Structure",
    ArchDiagram: HavenArchSVG,
  },
  {
    title: "SheSphere",
    category: "Social Impact · Safety Tech",
    categoryIcon: Eye,
    impact: "Real-time SOS alerts + community storytelling · Women's digital resilience platform",
    summary: "Digital resilience platform featuring real-time SOS alerts and community storytelling to address women's safety concerns.",
    tech: ["React.js", "TypeScript", "Figma", "Inclusive UI"],
    image: null,
    slug: null,
    liveUrl: null,
    repoUrl: "https://github.com/KainatNadeemCodes",
    accentColor: "pink",
    archLabel: "Event-Driven Flow",
    ArchDiagram: SheSphereArchSVG,
  },
];

const comingSoon = [
  {
    title: "FlowMind AI",
    category: "AI · Productivity",
    categoryIcon: Brain,
    impact: "Human-AI collaboration · Cognitive optimization · Adaptive productivity system",
    summary: "AI-augmented productivity system exploring human-AI collaboration, cognitive load optimization, and adaptive workflow intelligence.",
    tech: ["Python", "LLM APIs", "React", "FastAPI", "Cognitive Systems"],
    accentColor: "amber",
    archLabel: "Workflow Engine",
    ArchDiagram: () => (
      <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="75" y="10" width="70" height="20" rx="4" fill="rgba(245,158,11,0.14)" stroke="rgba(251,191,36,0.4)" strokeWidth="0.8"/>
        <text x="110" y="23" textAnchor="middle" fill="rgba(253,230,138,0.9)" fontSize="7" fontFamily="monospace">User Intent</text>
        <line x1="110" y1="30" x2="110" y2="42" stroke="rgba(251,191,36,0.3)" strokeWidth="0.8"/>
        <rect x="55" y="42" width="110" height="20" rx="4" fill="rgba(245,158,11,0.1)" stroke="rgba(251,191,36,0.35)" strokeWidth="0.8"/>
        <text x="110" y="55" textAnchor="middle" fill="rgba(253,230,138,0.85)" fontSize="7" fontFamily="monospace">LLM Reasoning Layer</text>
        <line x1="110" y1="62" x2="110" y2="72" stroke="rgba(251,191,36,0.3)" strokeWidth="0.8"/>
        <line x1="110" y1="72" x2="55"  y2="82" stroke="rgba(251,191,36,0.3)" strokeWidth="0.8"/>
        <line x1="110" y1="72" x2="165" y2="82" stroke="rgba(251,191,36,0.3)" strokeWidth="0.8"/>
        <rect x="10"  y="82" width="90" height="18" rx="3" fill="rgba(245,158,11,0.08)" stroke="rgba(251,191,36,0.25)" strokeWidth="0.7"/>
        <text x="55"  y="94" textAnchor="middle" fill="rgba(253,230,138,0.8)" fontSize="6.5" fontFamily="monospace">Task Orchestrator</text>
        <rect x="120" y="82" width="90" height="18" rx="3" fill="rgba(245,158,11,0.08)" stroke="rgba(251,191,36,0.25)" strokeWidth="0.7"/>
        <text x="165" y="94" textAnchor="middle" fill="rgba(253,230,138,0.8)" fontSize="6.5" fontFamily="monospace">Focus Optimizer</text>
        <line x1="110" y1="100" x2="110" y2="112" stroke="rgba(251,191,36,0.2)" strokeWidth="0.7"/>
        <rect x="50" y="112" width="120" height="18" rx="3" fill="rgba(245,158,11,0.06)" stroke="rgba(251,191,36,0.2)" strokeWidth="0.7"/>
        <text x="110" y="124" textAnchor="middle" fill="rgba(253,230,138,0.7)" fontSize="6.5" fontFamily="monospace">Adaptive Output</text>
      </svg>
    ),
  },
  {
    title: "Disaster Watcher",
    category: "AI · Societal Impact",
    categoryIcon: Zap,
    impact: "Real-time disaster intelligence · AI-based alert system · Societal safety at scale",
    summary: "AI-based disaster monitoring and alert system focused on real-time intelligence, societal impact, and early warning infrastructure.",
    tech: ["Python", "Real-time APIs", "ML Classification", "React", "Geospatial Data"],
    accentColor: "orange",
    archLabel: "Real-Time Pipeline",
    ArchDiagram: () => (
      <svg viewBox="0 0 220 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="55" y="10" width="110" height="20" rx="4" fill="rgba(249,115,22,0.14)" stroke="rgba(251,146,60,0.4)" strokeWidth="0.8"/>
        <text x="110" y="23" textAnchor="middle" fill="rgba(254,215,170,0.9)" fontSize="7" fontFamily="monospace">Data Ingestion APIs</text>
        <line x1="110" y1="30" x2="110" y2="42" stroke="rgba(251,146,60,0.3)" strokeWidth="0.8"/>
        <rect x="55" y="42" width="110" height="20" rx="4" fill="rgba(249,115,22,0.1)" stroke="rgba(251,146,60,0.35)" strokeWidth="0.8"/>
        <text x="110" y="55" textAnchor="middle" fill="rgba(254,215,170,0.85)" fontSize="7" fontFamily="monospace">ML Classifier</text>
        <line x1="110" y1="62" x2="110" y2="72" stroke="rgba(251,146,60,0.3)" strokeWidth="0.8"/>
        <line x1="110" y1="72" x2="45"  y2="82" stroke="rgba(251,146,60,0.3)" strokeWidth="0.8"/>
        <line x1="110" y1="72" x2="110" y2="82" stroke="rgba(251,146,60,0.3)" strokeWidth="0.8"/>
        <line x1="110" y1="72" x2="175" y2="82" stroke="rgba(251,146,60,0.3)" strokeWidth="0.8"/>
        <rect x="5"   y="82" width="80" height="18" rx="3" fill="rgba(249,115,22,0.08)" stroke="rgba(251,146,60,0.25)" strokeWidth="0.7"/>
        <text x="45"  y="94" textAnchor="middle" fill="rgba(254,215,170,0.8)" fontSize="6" fontFamily="monospace">Severity Score</text>
        <rect x="75"  y="82" width="70" height="18" rx="3" fill="rgba(249,115,22,0.08)" stroke="rgba(251,146,60,0.25)" strokeWidth="0.7"/>
        <text x="110" y="94" textAnchor="middle" fill="rgba(254,215,170,0.8)" fontSize="6" fontFamily="monospace">Geo Mapping</text>
        <rect x="135" y="82" width="80" height="18" rx="3" fill="rgba(249,115,22,0.08)" stroke="rgba(251,146,60,0.25)" strokeWidth="0.7"/>
        <text x="175" y="94" textAnchor="middle" fill="rgba(254,215,170,0.8)" fontSize="6" fontFamily="monospace">Alert Dispatch</text>
        <line x1="110" y1="100" x2="110" y2="112" stroke="rgba(251,146,60,0.2)" strokeWidth="0.7"/>
        <rect x="50" y="112" width="120" height="18" rx="3" fill="rgba(249,115,22,0.06)" stroke="rgba(251,146,60,0.2)" strokeWidth="0.7"/>
        <text x="110" y="124" textAnchor="middle" fill="rgba(254,215,170,0.7)" fontSize="6.5" fontFamily="monospace">Dashboard · React</text>
      </svg>
    ),
  },
];

const accentMap: Record<string, { border: string; text: string; bg: string; badge: string; glow: string }> = {
  blue:   { border: "group-hover:border-blue-500/40",   text: "text-blue-400",   bg: "bg-blue-400/8",   badge: "bg-blue-400/10 text-blue-300 border-blue-400/20",   glow: "group-hover:shadow-blue-500/10"   },
  violet: { border: "group-hover:border-violet-500/40", text: "text-violet-400", bg: "bg-violet-400/8", badge: "bg-violet-400/10 text-violet-300 border-violet-400/20", glow: "group-hover:shadow-violet-500/10" },
  emerald:{ border: "group-hover:border-emerald-500/40",text: "text-emerald-400",bg: "bg-emerald-400/8",badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",glow: "group-hover:shadow-emerald-500/10"},
  pink:   { border: "group-hover:border-pink-500/40",   text: "text-pink-400",   bg: "bg-pink-400/8",   badge: "bg-pink-400/10 text-pink-300 border-pink-400/20",   glow: "group-hover:shadow-pink-500/10"   },
  amber:  { border: "group-hover:border-amber-500/40",  text: "text-amber-400",  bg: "bg-amber-400/8",  badge: "bg-amber-400/10 text-amber-300 border-amber-400/20",  glow: "group-hover:shadow-amber-500/10"  },
  orange: { border: "group-hover:border-orange-500/40", text: "text-orange-400", bg: "bg-orange-400/8", badge: "bg-orange-400/10 text-orange-300 border-orange-400/20", glow: "group-hover:shadow-orange-500/10" },
};

// ─────────────────────────────────────────────────────────────────────────────
// Architecture overlay — used in image panel for live projects
// ─────────────────────────────────────────────────────────────────────────────
const ArchOverlay = ({
  label,
  accentText,
  Diagram,
}: {
  label: string;
  accentText: string;
  Diagram: () => JSX.Element;
}) => (
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out">
    {/* Dark glass backdrop */}
    <div className="absolute inset-0 bg-background/82 backdrop-blur-[2px]" />
    {/* Diagram */}
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full h-full max-h-[130px]">
        <Diagram />
      </div>
    </div>
    {/* Bottom label */}
    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-1.5 pb-3">
      <GitBranch size={10} className={accentText} />
      <span className={`font-mono text-[9px] tracking-[0.18em] uppercase ${accentText} opacity-80`}>
        View System Architecture
      </span>
      <span className={`font-mono text-[9px] ${accentText} opacity-50`}>· {label}</span>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Coming soon arch overlay (smaller, fits in card header area)
// ─────────────────────────────────────────────────────────────────────────────
const ComingSoonArchOverlay = ({
  label,
  accentText,
  Diagram,
}: {
  label: string;
  accentText: string;
  Diagram: () => JSX.Element;
}) => (
  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-background/88 backdrop-blur-[2px] rounded-xl" />
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5">
      <div className="w-full" style={{ height: 110 }}>
        <Diagram />
      </div>
      <div className="flex items-center gap-1.5 mt-2">
        <GitBranch size={10} className={accentText} />
        <span className={`font-mono text-[9px] tracking-[0.18em] uppercase ${accentText} opacity-75`}>
          View System Architecture · {label}
        </span>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Selected Projects</h2>
          <p className="font-body text-muted-foreground text-sm mt-3 max-w-lg leading-relaxed">
            Real systems built with purpose — spanning AI engineering, inclusive design, and social impact.
          </p>
        </motion.div>

        {/* Live Projects */}
        <div className="space-y-5 mb-10">
          {projects.map((project, i) => {
            const accent = accentMap[project.accentColor];
            const Icon   = project.categoryIcon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                onClick={() => project.slug && navigate(project.slug)}
                className={`
                  group relative bg-card border border-border/50 rounded-xl overflow-hidden
                  ${project.slug ? "cursor-pointer" : "cursor-default"}
                  transition-all duration-300
                  ${accent.border} hover:shadow-xl ${accent.glow}
                `}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current to-transparent ${accent.text}`} />

                <div className="grid md:grid-cols-5">

                  {/* Image panel with architecture overlay */}
                  <div className="md:col-span-2 relative h-48 md:h-full overflow-hidden">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/30" />
                      </>
                    ) : (
                      <div className={`w-full h-full ${accent.bg} flex items-center justify-center`}>
                        <Icon size={40} className={`${accent.text} opacity-20`} />
                      </div>
                    )}

                    {/* Category badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full border backdrop-blur-sm ${accent.badge}`}>
                        <Icon size={10} />
                        {project.category}
                      </span>
                    </div>

                    {/* Architecture overlay */}
                    <ArchOverlay
                      label={project.archLabel}
                      accentText={accent.text}
                      Diagram={project.ArchDiagram}
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-6 md:p-7 flex flex-col justify-center">
                    <p className={`font-mono text-[10px] tracking-wide uppercase mb-2 leading-relaxed ${accent.text}`}>
                      {project.impact}
                    </p>
                    <h3 className="text-foreground font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span key={t} className="bg-secondary text-secondary-foreground text-[11px] px-2.5 py-1 rounded-md font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.slug && (
                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium group-hover:gap-2.5 transition-all duration-200 ${accent.text}`}>
                          View Case Study <ArrowRight size={13} />
                        </span>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 border border-border/50 rounded-md px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-200">
                          <ExternalLink size={12} /> Live Demo
                        </a>
                      )}
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 border border-border/50 rounded-md px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-200">
                          <Github size={12} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Coming Soon divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="flex-1 h-px bg-border/40" />
          <span className="font-mono text-muted-foreground text-xs tracking-[0.2em] uppercase flex items-center gap-2">
            <Clock size={11} /> In Development
          </span>
          <div className="flex-1 h-px bg-border/40" />
        </motion.div>

        {/* Coming Soon Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {comingSoon.map((project, i) => {
            const accent = accentMap[project.accentColor];
            const Icon   = project.categoryIcon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`
                  group relative bg-card border border-border/50 rounded-xl p-6
                  transition-all duration-300 cursor-default overflow-hidden
                  ${accent.border} hover:shadow-lg ${accent.glow}
                `}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current to-transparent ${accent.text}`} />

                {/* Architecture overlay on full card */}
                <ComingSoonArchOverlay
                  label={project.archLabel}
                  accentText={accent.text}
                  Diagram={project.ArchDiagram}
                />

                {/* Header row */}
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className={`w-10 h-10 rounded-lg ${accent.bg} flex items-center justify-center`}>
                    <Icon size={18} className={accent.text} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-full border border-border/50 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Coming Soon
                  </span>
                </div>

                <p className={`font-mono text-[10px] tracking-wide uppercase mb-2 leading-relaxed ${accent.text} relative z-10`}>
                  {project.impact}
                </p>
                <h3 className="text-foreground font-bold text-lg mb-2 relative z-10">{project.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5 relative z-10">{project.summary}</p>
                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-secondary text-secondary-foreground text-[11px] px-2.5 py-1 rounded-md font-mono opacity-70">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
