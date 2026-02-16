import { motion } from "framer-motion";
import { Brain, Layout, Server } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: [
      "Python",
      "Machine Learning",
      "Data Visualization",
      "AI Logic & Algorithms",
      "Predictive Modeling",
      "Flask",
    ],
  },
  {
    icon: Layout,
    title: "Frontend & UX Engineering",
    skills: [
      "HTML / CSS",
      "JavaScript",
      "Responsive Design",
      "Figma",
      "User Research",
      "Wireframing & Prototyping",
    ],
  },
  {
    icon: Server,
    title: "Backend & Systems",
    skills: [
      "Django",
      "REST API",
      "MySQL",
      "SQLite",
      "MongoDB",
      "Git",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Toolkit</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Engineering Stack</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-2xl p-7 hover:border-primary/40 transition-all duration-300 group"
            >
              <pillar.icon
                size={26}
                className="text-primary mb-5 group-hover:scale-110 transition-transform"
              />
              <h4 className="text-foreground font-semibold text-lg mb-5">{pillar.title}</h4>
              <div className="flex flex-wrap gap-2">
                {pillar.skills.map((skill) => (
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
