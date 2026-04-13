import { motion } from "framer-motion";
import { Brain, Globe, Shield, Users, Rocket, Trophy, Award } from "lucide-react";

const experiences = [
  {
    period: "Apr 2026",
    title: "National Skill Competency Test (NSCT)",
    org: "HEC · P@SHA · NCEAC · Virtual University · Tech Nation Pakistan",
    impact: "98.5th percentile nationally — top 1.5% across all HEC-recognised university CS final-year students in Pakistan",
    detail: "Scored 73/100 in a standardised national assessment covering AI/ML, Data Structures, Algorithms, Problem Solving, Software Engineering, and Cybersecurity. Conducted jointly by the Higher Education Commission, P@SHA, NCEAC, and Virtual University.",
    icon: Award,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
    tags: ["98.5th Percentile", "National Assessment", "HEC Pakistan", "Top 1.5%"],
    highlight: true,
  },
  {
    period: "Jan 2026",
    title: "Team Lead · Global AI Hackathon",
    org: "Aspire Institute × CAYU",
    impact: "Led 5-member international team (Kenya, Nigeria, Bolivia, Pakistan) → built Pathway AI in 24-hour sprint",
    detail: "Selected among 4,000+ participants from 50+ countries. Delivered an inclusive skills-discovery platform on the Cayu AI platform.",
    icon: Trophy,
    color: "text-amber-400",
    bg: "bg-amber-400/8",
    border: "border-amber-400/20",
    tags: ["AI Engineering", "Cross-Border Leadership", "24-hr Sprint"],
    highlight: false,
  },
  {
    period: "2026 – Present",
    title: "UX Researcher & Lead Designer",
    org: "Haven · Neuro-Inclusive Safety Platform",
    impact: "Designed sensory-friendly interface applying cognitive load theory + WCAG accessibility for neurodivergent users",
    detail: "Applied Human-Centered Design and AI-assisted prototyping to create a low-sensory, high-utility interface.",
    icon: Shield,
    color: "text-emerald-400",
    bg: "bg-emerald-400/8",
    border: "border-emerald-400/20",
    tags: ["HCD", "Accessibility", "WCAG", "Figma"],
    highlight: false,
  },
  {
    period: "2026 – Present",
    title: "Engineer · SheSphere",
    org: "Women's Safety & Resilience Platform",
    impact: "Engineered real-time SOS alert system + community storytelling platform for women's digital safety",
    detail: "Built with React.js and TypeScript. Designed high-fidelity inclusive UI in Figma.",
    icon: Rocket,
    color: "text-pink-400",
    bg: "bg-pink-400/8",
    border: "border-pink-400/20",
    tags: ["React.js", "TypeScript", "Figma", "Inclusive Design"],
    highlight: false,
  },
  {
    period: "2025 – Present",
    title: "AI Engineer · Smart Health Assistant",
    org: "Final Year Project · Virtual University",
    impact: "Built end-to-end AI triage system with FastAPI + Scikit-Learn + NLTK → healthcare accessibility in low-resource environments",
    detail: "Achieved 84%+ classification accuracy across 5 severity levels. Embedded ethical AI boundaries and human oversight constraints.",
    icon: Brain,
    color: "text-blue-400",
    bg: "bg-blue-400/8",
    border: "border-blue-400/20",
    tags: ["Python", "FastAPI", "Scikit-Learn", "NLTK", "Ethical AI"],
    highlight: false,
  },
  {
    period: "2024 – Present",
    title: "Founder & Technical Lead",
    org: "NextGenShe · Women in STEM Initiative",
    impact: "Founded STEM platform for women in underserved communities → Aspire Capstone commended for rural digital literacy scaling",
    detail: "Analyzed national statistics on gender education gap. Developed MVP and strategic roadmap within Aspire Institute Leadership Program.",
    icon: Globe,
    color: "text-violet-400",
    bg: "bg-violet-400/8",
    border: "border-violet-400/20",
    tags: ["Systems Design", "UX Research", "Platform Architecture", "Social Impact"],
    highlight: false,
  },
  {
    period: "2024 – Present",
    title: "Volunteer Mentor",
    org: "LinkedIn Learning Community",
    impact: "Mentoring 20+ university students on programming logic, FYP strategy, and career pathways",
    detail: "Supporting students through technical guidance, project reviews, and career development coaching.",
    icon: Users,
    color: "text-primary",
    bg: "bg-primary/8",
    border: "border-primary/20",
    tags: ["Mentorship", "Programming", "Career Guidance"],
    highlight: false,
  },
  {
    period: "Nov 2024",
    title: "Alumna · Aspire Leadership Program",
    org: "Aspire Institute · Harvard Faculty Initiative",
    impact: "Applied design thinking to systemic social challenges within a global cohort from 50+ countries",
    detail: "Developed expertise in ethical leadership, cross-cultural technology strategy, and AI-integrated problem solving.",
    icon: Trophy,
    color: "text-amber-400",
    bg: "bg-amber-400/8",
    border: "border-amber-400/20",
    tags: ["Design Thinking", "Ethical Leadership", "Global Cohort"],
    highlight: false,
  },
  {
    period: "2024 – Present",
    title: "Freelance UX & Frontend Engineer",
    org: "Independent",
    impact: "Delivered accessible interfaces and interactive prototypes for clients using modern frontend frameworks",
    detail: "Applied UX research methodologies, accessibility principles, and responsive design across multiple projects.",
    icon: Rocket,
    color: "text-secondary-foreground",
    bg: "bg-secondary/60",
    border: "border-border/40",
    tags: ["Figma", "HTML/CSS", "Frontend", "Accessibility"],
    highlight: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Initiative & Impact</h2>
          <p className="font-body text-muted-foreground text-sm mt-3 leading-relaxed">
            Building, leading, and shipping — across AI, design, and social impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border/60 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="relative pl-12 group"
                >
                  {/* Timeline icon node */}
                  <div className={`absolute left-0 top-1 w-9 h-9 rounded-lg ${exp.bg} border ${exp.border} flex items-center justify-center transition-transform duration-200 group-hover:scale-110`}>
                    <Icon size={15} className={exp.color} />
                  </div>

                  {/* Card — highlighted variant for NSCT */}
                  <div className={`bg-card border rounded-xl p-5 transition-all duration-300 group-hover:shadow-md ${
                    exp.highlight
                      ? "border-amber-400/30 bg-amber-400/5 group-hover:border-amber-400/50"
                      : "border-border/50 group-hover:border-border/80"
                  }`}>

                    {/* NSCT badge */}
                    {exp.highlight && (
                      <div className="inline-flex items-center gap-1.5 font-mono text-[9px] px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 tracking-widest uppercase mb-3">
                        ★ National Award · 98.5th Percentile
                      </div>
                    )}

                    {/* Top row */}
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                      <h3 className="text-foreground font-semibold text-sm leading-snug">{exp.title}</h3>
                      <span className="text-muted-foreground text-xs">·</span>
                      <span className={`text-xs font-mono ${exp.color}`}>{exp.org}</span>
                    </div>

                    <p className="font-mono text-muted-foreground text-[10px] tracking-wide mb-3">{exp.period}</p>

                    {/* Impact statement */}
                    <p className={`text-sm font-medium leading-relaxed mb-2 border-l-2 pl-3 ${
                      exp.highlight
                        ? "text-amber-400/90 border-amber-400/40"
                        : "text-foreground/90 border-primary/30"
                    }`}>
                      → {exp.impact}
                    </p>

                    {/* Supporting detail */}
                    <p className="font-body text-muted-foreground text-xs leading-relaxed mb-4">
                      {exp.detail}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[10px] px-2 py-0.5 rounded font-mono border ${
                            exp.highlight
                              ? "bg-amber-400/10 text-amber-400 border-amber-400/25"
                              : "bg-secondary text-secondary-foreground border-border/30"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
