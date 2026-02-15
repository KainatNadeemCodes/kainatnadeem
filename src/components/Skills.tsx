import { motion } from "framer-motion";
import { Code2, Brain, Palette, Database, Terminal, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "C/C++", "JavaScript", "HTML/CSS"],
  },
  {
    icon: Brain,
    title: "AI & Data",
    skills: ["Machine Learning", "Deep Learning", "Neural Networks", "Data Visualization"],
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    skills: ["User Research", "Wireframing", "Prototyping", "Figma"],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["Flask", "Django", "REST API", "Responsive Design"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "SQLite", "MongoDB"],
  },
  {
    icon: Terminal,
    title: "Tools",
    skills: ["Git", "VS Code", "Canva", "Algorithms & DS"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Technical Expertise</h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <cat.icon size={28} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-foreground font-semibold text-lg mb-3">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-full font-mono"
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
