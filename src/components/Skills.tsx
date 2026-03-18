import { motion } from "framer-motion";
import { Brain, Code2, Palette, Wrench } from "lucide-react";

const categories = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    color: "text-blue-400",
    bg: "bg-blue-400/8",
    border: "border-blue-400/20",
    glow: "hover:shadow-blue-400/10",
    accentBorder: "hover:border-blue-400/30",
    skills: [
      { name: "Python", level: 90 },
      { name: "Scikit-Learn", level: 80 },
      { name: "NLTK", level: 75 },
      { name: "TensorFlow", level: 65 },
      { name: "NLP", level: 75 },
      { name: "Decision Systems", level: 85 },
      { name: "Predictive Modeling", level: 78 },
      { name: "Data Preprocessing", level: 82 },
    ],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    color: "text-violet-400",
    bg: "bg-violet-400/8",
    border: "border-violet-400/20",
    glow: "hover:shadow-violet-400/10",
    accentBorder: "hover:border-violet-400/30",
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "FastAPI", level: 78 },
      { name: "Flask", level: 82 },
      { name: "Django", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript", level: 83 },
    ],
  },
  {
    icon: Palette,
    title: "UX & Design",
    color: "text-pink-400",
    bg: "bg-pink-400/8",
    border: "border-pink-400/20",
    glow: "hover:shadow-pink-400/10",
    accentBorder: "hover:border-pink-400/30",
    skills: [
      { name: "Figma", level: 88 },
      { name: "UX Research", level: 85 },
      { name: "Accessibility (WCAG)", level: 80 },
      { name: "HCD", level: 82 },
      { name: "Prototyping", level: 85 },
      { name: "Usability Testing", level: 75 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    color: "text-emerald-400",
    bg: "bg-emerald-400/8",
    border: "border-emerald-400/20",
    glow: "hover:shadow-emerald-400/10",
    accentBorder: "hover:border-emerald-400/30",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "SQL", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 68 },
      { name: "Agile", level: 80 },
      { name: "VS Code", level: 92 },
    ],
  },
];

const SkillTag = ({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    whileHover={{ scale: 1.04, transition: { duration: 0.15 } }}
    className="group relative bg-secondary/60 border border-border/40 rounded-lg px-3 py-2 cursor-default"
  >
    <div className="flex items-center justify-between gap-3 mb-1.5">
      <span className="text-secondary-foreground text-xs font-mono">{name}</span>
      <span className={`text-[10px] font-mono ${color} opacity-70`}>{level}%</span>
    </div>
    {/* Mini progress bar */}
    <div className="h-px bg-border/60 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
        className={`h-full rounded-full bg-current ${color}`}
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Toolkit</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Technical Depth</h2>
          <p className="font-body text-muted-foreground text-sm mt-3 max-w-lg leading-relaxed">
            Spanning intelligent systems, full-stack engineering, human-centered design, and development tooling.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`
                  group relative bg-card border border-border/50 rounded-xl p-6
                  transition-all duration-300 hover:shadow-lg
                  ${cat.glow} ${cat.accentBorder}
                `}
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current to-transparent ${cat.color}`}
                />

                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg ${cat.bg} border ${cat.border} flex items-center justify-center shrink-0`}>
                    <Icon size={16} className={cat.color} />
                  </div>
                  <h3 className="text-foreground font-semibold text-sm">{cat.title}</h3>
                </div>

                {/* Skill tags with mini bars */}
                <div className="grid grid-cols-2 gap-2">
                  {cat.skills.map((skill, j) => (
                    <SkillTag
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={cat.color}
                      delay={i * 0.06 + j * 0.04}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 bg-card border border-border/50 rounded-xl p-5"
        >
          <p className="font-mono text-primary text-[10px] tracking-[0.2em] uppercase mb-4">Certifications</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Google UX Design Professional Certificate",
              "Google Prompting Essentials · Generative AI",
              "AI for Everyone · DeepLearning.AI",
              "Python for Data Science · IBM",
              "AI-Integrated Leadership · Aspire Institute",
              "IBM Cybersecurity Certificate",
              "English Communication · Georgia Tech",
            ].map((cert) => (
              <span
                key={cert}
                className="bg-secondary text-secondary-foreground text-[11px] px-3 py-1.5 rounded-md font-mono border border-border/30"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
