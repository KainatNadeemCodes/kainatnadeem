import { motion } from "framer-motion";
import { Target, FlaskConical, Microscope, Globe, Heart, Eye, ArrowUpRight, BookOpen } from "lucide-react";

const researchAreas = [
  {
    icon: FlaskConical,
    title: "Ethical AI & Fairness-Aware Systems",
    detail: "Building models with bias mitigation, transparency, and accountability at their core.",
    color: "text-blue-400",
    bg: "bg-blue-400/8",
    border: "border-blue-400/20",
  },
  {
    icon: Heart,
    title: "AI Decision-Support in Healthcare",
    detail: "Intelligent triage and diagnostic assistance for low-resource medical environments.",
    color: "text-pink-400",
    bg: "bg-pink-400/8",
    border: "border-pink-400/20",
  },
  {
    icon: Globe,
    title: "Intelligent Systems for Underserved Communities",
    detail: "Technology designed around structural constraints — cultural, economic, infrastructural.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/8",
    border: "border-emerald-400/20",
  },
  {
    icon: Eye,
    title: "Explainability & Transparency in AI",
    detail: "Making model decisions interpretable and trustworthy for real-world deployment.",
    color: "text-violet-400",
    bg: "bg-violet-400/8",
    border: "border-violet-400/20",
  },
  {
    icon: Microscope,
    title: "Human-Centered AI Design",
    detail: "Embedding user needs, cognitive principles, and ethical constraints into system design.",
    color: "text-amber-400",
    bg: "bg-amber-400/8",
    border: "border-amber-400/20",
  },
];

const FutureDirection = () => {
  return (
    <section id="direction" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Direction</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Research Direction</h2>
          <p className="font-body text-muted-foreground text-sm mt-3 leading-relaxed max-w-lg">
            Targeting an MSc in Artificial Intelligence — at the intersection of ethical AI,
            intelligent systems, and technology for social good.
          </p>
        </motion.div>

        {/* Academic Goal card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="group relative bg-card border border-primary/20 rounded-xl p-5 mb-5 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <Target size={16} className="text-primary" />
            </div>
            <div>
              <p className="font-mono text-primary text-[10px] tracking-[0.15em] uppercase mb-1">
                Academic Goal
              </p>
              <p className="text-foreground font-medium text-sm leading-relaxed">
                MSc in Artificial Intelligence — Brunel University London
              </p>
              <p className="text-muted-foreground text-xs mt-1 leading-relaxed font-body">
                Deepening expertise in machine learning, intelligent systems, fairness-aware models,
                and responsible AI deployment — to scale the work already started with NextGenShe,
                Haven, and SheSphere.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Faculty Alignment Card — Dr Asieh Tabaghdehi ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="group relative bg-card border border-violet-400/25 rounded-xl p-5 mb-6 hover:border-violet-400/40 hover:shadow-lg hover:shadow-violet-400/5 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />

          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-violet-400/8 border border-violet-400/20 flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen size={15} className="text-violet-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-mono text-violet-400 text-[10px] tracking-[0.15em] uppercase mb-1">
                Faculty Alignment · Brunel Centre for AI: Social and Digital Innovation
              </p>

              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <p className="text-foreground font-semibold text-sm">
                  Dr Asieh Tabaghdehi
                </p>
                <a
                  href="https://www.brunel.ac.uk/research/Projects/Towards-a-responsible-AI-and-inclusive-workforce-in-a-digital-economy"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-violet-400 text-[10px] font-mono hover:text-violet-300 transition-colors cursor-pointer"
                >
                  View Research <ArrowUpRight size={10} />
                </a>
              </div>

              <p className="text-muted-foreground text-[10px] font-mono mb-3">
                Senior Lecturer · Head of AI & Technology Management Research Group ·
                Lead, Centre for AI: Social and Digital Innovation · Brunel University London
              </p>

              <p className="text-secondary-foreground text-xs leading-relaxed font-body mb-3">
                Dr Tabaghdehi's research focuses on responsible AI, ethical AI frameworks,
                fairness in the digital economy, and inclusive workforce development —
                directly intersecting with my work on NextGenShe, Haven, and the Smart Health
                Assistant. Her project on responsible AI and inclusive workforce in the digital
                economy mirrors the exact problems I have been building solutions for since 2024.
              </p>

              {/* Alignment tags */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Responsible AI',
                  'Ethical AI Frameworks',
                  'Inclusive Digital Economy',
                  'AI & Social Inequality',
                  'Human-Centred AI',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-violet-400/10 border border-violet-400/25 text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Research areas */}
        <div className="space-y-3">
          {researchAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                whileHover={{ x: 4, transition: { duration: 0.15 } }}
                className={`group flex items-start gap-4 bg-card border border-border/50 rounded-xl p-4 hover:border-opacity-60 transition-all duration-200 hover:${area.border}`}
              >
                <div className={`w-8 h-8 rounded-lg ${area.bg} border ${area.border} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon size={14} className={area.color} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground mb-0.5">{area.title}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed font-body">{area.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FutureDirection;
