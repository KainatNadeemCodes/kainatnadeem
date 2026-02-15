import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const experiences = [
  {
    period: "Jan 2025 – Present",
    title: "AI & Software Development Projects",
    org: "Virtual University of Pakistan",
    icon: Briefcase,
    points: [
      "Developed AI-Powered Smart Health Assistant for intelligent symptom analysis",
      "Applied Python, Flask, HTML/CSS, and AI logic algorithms",
      "Focused on ethical AI, user-centered design, and data-driven decision support",
    ],
  },
  {
    period: "Jan 2024 – Present",
    title: "Freelance UX & Front-End Designer",
    org: "Self-employed",
    icon: Briefcase,
    points: [
      "Designed logos, posters, social media posts, and flyers for clients",
      "Applied UX research and user flow principles",
      "Tools: Canva, Figma, HTML/CSS for interactive prototypes",
    ],
  },
  {
    period: "Jan 2024 – Present",
    title: "Social Impact Tech Project — NextGenShe",
    org: "NextGenShe",
    icon: Briefcase,
    points: [
      "Founded a digital platform providing educational access to women in underserved communities",
      "Managed UX research, design workflow, and platform implementation",
      "Developed leadership and project management skills",
    ],
  },
  {
    period: "Aug – Nov 2024",
    title: "Aspire Leadership Program Finalist",
    org: "Aspire Institute (Harvard Faculty) — Global",
    icon: Award,
    points: [
      "Selected for prestigious international leadership programme",
      "Collaborated with global cohort using design thinking",
      "Strengthened ethical leadership and cross-cultural communication",
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
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Work History</h3>
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
