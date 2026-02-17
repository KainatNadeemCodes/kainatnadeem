import { motion } from "framer-motion";
import { Brain, Layout, Server } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    accent: "from-primary to-accent",
    skills: ["Python", "Machine Learning", "AI Algorithms", "Data Visualization", "Predictive Modeling", "Flask"],
  },
  {
    icon: Layout,
    title: "Frontend & UX Engineering",
    accent: "from-primary to-primary",
    skills: ["JavaScript", "HTML/CSS", "Responsive Design", "Figma", "User Research", "Prototyping"],
  },
  {
    icon: Server,
    title: "Backend & Systems",
    accent: "from-accent to-primary",
    skills: ["Django", "REST API", "MySQL", "SQLite", "MongoDB", "Git"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Toolkit</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Engineering Stack</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-elevated p-7 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <pillar.icon size={20} className="text-primary" />
              </div>
              <h4 className="text-foreground font-semibold text-lg mb-5">{pillar.title}</h4>
              <div className="flex flex-wrap gap-2">
                {pillar.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + si * 0.04 }}
                    className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-full font-mono hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
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
