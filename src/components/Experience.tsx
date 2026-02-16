import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    period: "2025 – Present",
    title: "AI Engineer — Smart Health Assistant",
    org: "Independent Project",
    icon: Briefcase,
    description:
      "Architected an AI-driven symptom analysis engine with ethical decision-support logic. Built end-to-end with Python, Flask, and custom algorithms — designed around accessibility and data-driven health insights.",
  },
  {
    period: "2024 – Present",
    title: "Founder & Lead — NextGenShe",
    org: "NextGenShe",
    icon: Briefcase,
    description:
      "Founded a technology platform expanding educational access for women in underserved communities. Led the full product lifecycle from research through deployment, driving social impact through intentional design.",
  },
  {
    period: "2024 – Present",
    title: "Freelance UX & Frontend Engineer",
    org: "Self-employed",
    icon: Briefcase,
    description:
      "Delivered brand identities, interactive prototypes, and responsive interfaces. Applied UX research methodologies to drive usability using Figma, HTML/CSS, and modern frontend tooling.",
  },
  {
    period: "2024",
    title: "Aspire Leadership — Global Cohort",
    org: "Aspire Institute (Harvard Faculty)",
    icon: Award,
    description:
      "Applied design thinking to systemic social challenges with a global team. Deepened expertise in ethical leadership and cross-cultural technology strategy.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Where I've Built & Led</h3>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-elevated p-6 md:p-7 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <exp.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                    <h4 className="text-foreground font-semibold text-lg">{exp.title}</h4>
                    <span className="font-mono text-muted-foreground text-xs">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground text-xs mb-2">{exp.org}</p>
                  <p className="text-secondary-foreground text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
