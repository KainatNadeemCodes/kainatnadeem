import { motion } from "framer-motion";

const experiences = [
  {
    period: "2026 – Present",
    title: "Founder & UX Designer",
    org: "Haven",
    description:
      "Designing a sensory-friendly digital platform for neurodivergent users. Leading accessibility-first interface design with calm, predictable interactions and inclusive design systems.",
  },
  {
    period: "2025 – Present",
    title: "AI Engineer",
    org: "Smart Health Assistant",
    description:
      "Architected an AI-driven symptom analysis engine with ethical decision-support logic. Built end-to-end with Python, Flask, and custom algorithms — designed around accessibility and data-driven health insights.",
  },
  {
    period: "2024 – Present",
    title: "Founder & Lead",
    org: "NextGenShe",
    description:
      "Founded a technology platform expanding educational access for women in underserved communities. Led the full product lifecycle from research through deployment.",
  },
  {
    period: "2024 – Present",
    title: "Freelance UX & Frontend Engineer",
    org: "Independent",
    description:
      "Delivered brand identities, interactive prototypes, and responsive interfaces. Applied UX research methodologies to drive usability using Figma, HTML/CSS, and modern frontend tooling.",
  },
  {
    period: "2024",
    title: "Aspire Leadership Program",
    org: "Aspire Institute · Harvard Faculty",
    description:
      "Applied design thinking to systemic social challenges with a global cohort. Deepened expertise in ethical leadership and cross-cultural technology strategy.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Where I've Built & Led</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/60" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-primary/40 bg-background flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-1">
                  <h3 className="text-foreground font-semibold text-base">{exp.title}</h3>
                  <span className="text-muted-foreground text-xs">·</span>
                  <span className="text-primary/70 text-xs font-mono">{exp.org}</span>
                </div>
                <p className="font-mono text-muted-foreground text-xs mb-2">{exp.period}</p>
                <p className="font-body text-secondary-foreground text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
