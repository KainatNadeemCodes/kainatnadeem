import { motion } from "framer-motion";
import { Search, Layers, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    tagline: "Diagnose before designing.",
    body: "I break down complex problems into structured, real-world constraints — mapping what's technically possible against what's humanly necessary.",
    accent: "blue",
    color: "text-blue-400",
    bg: "bg-blue-400/8",
    border: "border-blue-400/20",
    glowHover: "hover:shadow-blue-500/10",
    borderHover: "hover:border-blue-400/35",
  },
  {
    number: "02",
    icon: Layers,
    title: "Design",
    tagline: "Architecture before aesthetics.",
    body: "I build systems using clear logic, scalable architecture, and human-centered thinking — where every design decision is traceable to a real user need.",
    accent: "violet",
    color: "text-violet-400",
    bg: "bg-violet-400/8",
    border: "border-violet-400/20",
    glowHover: "hover:shadow-violet-500/10",
    borderHover: "hover:border-violet-400/35",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deliver",
    tagline: "Impact over output.",
    body: "I focus on solutions that are practical, ethical, and usable — measuring success by real-world effect, not just technical completion.",
    accent: "emerald",
    color: "text-emerald-400",
    bg: "bg-emerald-400/8",
    border: "border-emerald-400/20",
    glowHover: "hover:shadow-emerald-500/10",
    borderHover: "hover:border-emerald-400/35",
  },
];

const ProblemApproach = () => {
  return (
    <section id="approach" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How I Approach Problems
          </h2>
          <p className="font-body text-muted-foreground text-sm mt-3 max-w-md mx-auto leading-relaxed">
            A repeatable system for turning ambiguity into clarity, and clarity into impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
                className={`
                  group relative rounded-2xl p-6
                  bg-card/60 backdrop-blur-xl
                  border border-border/50
                  shadow-lg shadow-black/20
                  transition-all duration-300
                  hover:shadow-xl ${step.glowHover} ${step.borderHover}
                  cursor-default overflow-hidden
                `}
              >
                {/* Top accent line — appears on hover */}
                <div
                  className={`
                    absolute top-0 left-0 right-0 h-px
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    bg-gradient-to-r from-transparent via-current to-transparent
                    ${step.color}
                  `}
                />

                {/* Subtle corner glow */}
                <div
                  className={`
                    absolute -top-12 -right-12 w-32 h-32 rounded-full
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    ${step.bg}
                    blur-2xl pointer-events-none
                  `}
                />

                {/* Step number */}
                <p className={`font-mono text-[10px] tracking-[0.25em] mb-4 ${step.color} opacity-60`}>
                  {step.number}
                </p>

                {/* Icon */}
                <div
                  className={`
                    w-10 h-10 rounded-xl mb-5 flex items-center justify-center
                    ${step.bg} border ${step.border}
                    transition-transform duration-200 group-hover:scale-110
                  `}
                >
                  <Icon size={17} className={step.color} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="text-foreground font-bold text-xl mb-1">
                  {step.title}
                </h3>

                {/* Tagline */}
                <p className={`font-mono text-[11px] tracking-wide mb-3 ${step.color}`}>
                  {step.tagline}
                </p>

                {/* Body */}
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {step.body}
                </p>

                {/* Bottom connector arrow — only on first two cards */}
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-background border border-border/60 items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemApproach;
