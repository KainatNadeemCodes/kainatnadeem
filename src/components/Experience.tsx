import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    period: "Jan 2025 – Present",
    title: "AI Engineer — Smart Health Assistant",
    org: "Independent Project",
    icon: Briefcase,
    points: [
      "Architected an AI-driven symptom analysis engine with ethical decision-support logic",
      "Built end-to-end with Python, Flask, and custom AI algorithms",
      "Designed the UX around accessibility and data-driven health insights",
    ],
  },
  {
    period: "Jan 2024 – Present",
    title: "Freelance UX & Frontend Engineer",
    org: "Self-employed",
    icon: Briefcase,
    points: [
      "Delivered brand identities, interactive prototypes, and responsive interfaces for clients",
      "Applied UX research methodologies to drive conversion and usability",
      "Shipped production work using Figma, HTML/CSS, and modern frontend tooling",
    ],
  },
  {
    period: "Jan 2024 – Present",
    title: "Founder & Lead Engineer — NextGenShe",
    org: "NextGenShe",
    icon: Briefcase,
    points: [
      "Founded a technology platform expanding educational access for women in underserved communities",
      "Led end-to-end product lifecycle: research, design, engineering, and deployment",
      "Drove social impact through intentional, user-centered technology decisions",
    ],
  },
  {
    period: "Aug – Nov 2024",
    title: "Aspire Leadership Program — Global Cohort",
    org: "Aspire Institute (Harvard Faculty)",
    icon: Award,
    points: [
      "Applied design thinking to address systemic social challenges with a global team",
      "Deepened expertise in ethical leadership and cross-cultural collaboration",
      "Leveraged technology strategy to drive community-wide impact",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Where I've Built & Led</h3>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass rounded-2xl p-6">
                  <span className="font-mono text-primary text-xs tracking-wider">{exp.period}</span>
                  <h4 className="text-foreground font-semibold text-lg mt-1">{exp.title}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{exp.org}</p>
                  <ul className="space-y-1.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-secondary-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-[6px]">●</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
