import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Clock, Brain, Shield, Zap, Globe, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import projectHealth from "@/assets/project-health.jpg";
import projectNextGenShe from "@/assets/project-nextgenshe.jpg";
import projectHaven from "@/assets/project-haven.jpg";

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
    status: "live",
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
    status: "live",
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
    status: "live",
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
    status: "live",
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
  },
  {
    title: "Disaster Watcher",
    category: "AI · Societal Impact",
    categoryIcon: Zap,
    impact: "Real-time disaster intelligence · AI-based alert system · Societal safety at scale",
    summary: "AI-based disaster monitoring and alert system focused on real-time intelligence, societal impact, and early warning infrastructure.",
    tech: ["Python", "Real-time APIs", "ML Classification", "React", "Geospatial Data"],
    accentColor: "orange",
  },
];

const accentMap: Record<string, { border: string; text: string; bg: string; badge: string; glow: string }> = {
  blue:   { border: "group-hover:border-blue-500/40",   text: "text-blue-400",   bg: "bg-blue-400/8",   badge: "bg-blue-400/10 text-blue-300 border-blue-400/20",   glow: "group-hover:shadow-blue-500/10" },
  violet: { border: "group-hover:border-violet-500/40", text: "text-violet-400", bg: "bg-violet-400/8", badge: "bg-violet-400/10 text-violet-300 border-violet-400/20", glow: "group-hover:shadow-violet-500/10" },
  emerald:{ border: "group-hover:border-emerald-500/40",text: "text-emerald-400",bg: "bg-emerald-400/8",badge: "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",glow: "group-hover:shadow-emerald-500/10" },
  pink:   { border: "group-hover:border-pink-500/40",   text: "text-pink-400",   bg: "bg-pink-400/8",   badge: "bg-pink-400/10 text-pink-300 border-pink-400/20",   glow: "group-hover:shadow-pink-500/10" },
  amber:  { border: "group-hover:border-amber-500/40",  text: "text-amber-400",  bg: "bg-amber-400/8",  badge: "bg-amber-400/10 text-amber-300 border-amber-400/20",  glow: "group-hover:shadow-amber-500/10" },
  orange: { border: "group-hover:border-orange-500/40", text: "text-orange-400", bg: "bg-orange-400/8", badge: "bg-orange-400/10 text-orange-300 border-orange-400/20", glow: "group-hover:shadow-orange-500/10" },
};

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
            const Icon = project.categoryIcon;

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
                  {/* Image or placeholder */}
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
                        <Icon size={40} className={`${accent.text} opacity-30`} />
                      </div>
                    )}

                    {/* Category badge on image */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full border backdrop-blur-sm ${accent.badge}`}>
                        <Icon size={10} />
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-6 md:p-7 flex flex-col justify-center">

                    {/* Impact statement — the key line */}
                    <p className={`font-mono text-[10px] tracking-wide uppercase mb-2 leading-relaxed ${accent.text}`}>
                      {project.impact}
                    </p>

                    <h3 className="text-foreground font-bold text-xl mb-3 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                      {project.summary}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-secondary text-secondary-foreground text-[11px] px-2.5 py-1 rounded-md font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-2">
                      {project.slug && (
                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium group-hover:gap-2.5 transition-all duration-200 ${accent.text}`}>
                          View Case Study <ArrowRight size={13} />
                        </span>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 border border-border/50 rounded-md px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-200"
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 border border-border/50 rounded-md px-3 py-1.5 text-xs font-mono text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-200"
                        >
                          <Github size={12} />
                          GitHub
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
            <Clock size={11} />
            In Development
          </span>
          <div className="flex-1 h-px bg-border/40" />
        </motion.div>

        {/* Coming Soon Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {comingSoon.map((project, i) => {
            const accent = accentMap[project.accentColor];
            const Icon = project.categoryIcon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`
                  group relative bg-card border border-border/50 rounded-xl p-6
                  transition-all duration-300 cursor-default
                  ${accent.border} hover:shadow-lg ${accent.glow}
                `}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current to-transparent ${accent.text}`} />

                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${accent.bg} flex items-center justify-center`}>
                    <Icon size={18} className={accent.text} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-full border border-border/50 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    Coming Soon
                  </span>
                </div>

                {/* Impact line */}
                <p className={`font-mono text-[10px] tracking-wide uppercase mb-2 leading-relaxed ${accent.text}`}>
                  {project.impact}
                </p>

                <h3 className="text-foreground font-bold text-lg mb-2">{project.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">{project.summary}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-secondary text-secondary-foreground text-[11px] px-2.5 py-1 rounded-md font-mono opacity-70"
                    >
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
