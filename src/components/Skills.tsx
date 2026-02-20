import { motion } from "framer-motion";
import { Brain, Layout, Server } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Designing intelligent systems with ethical decision-support logic.",
    skills: ["Python", "Machine Learning", "AI Algorithms", "Data Visualization", "Predictive Modeling", "Flask"],
  },
  {
    icon: Layout,
    title: "Frontend & UX Engineering",
    description: "Building interfaces grounded in research and accessibility.",
    skills: ["JavaScript", "HTML/CSS", "Responsive Design", "Figma", "User Research", "Prototyping"],
  },
  {
    icon: Server,
    title: "Backend & Systems",
    description: "Architecting reliable data pipelines and APIs.",
    skills: ["Django", "REST API", "MySQL", "SQLite", "MongoDB", "Git"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Toolkit</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Engineering Stack</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                <pillar.icon size={18} className="text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-base mb-1.5">{pillar.title}</h3>
              <p className="text-muted-foreground text-xs font-body mb-5 leading-relaxed">{pillar.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {pillar.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
