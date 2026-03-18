import { motion } from "framer-motion";

const pillars = [
  { label: "AI Engineering",          detail: "Decision systems · Ethical constraints · FastAPI + Scikit-Learn" },
  { label: "Frontend Development",    detail: "React · TypeScript · Tailwind · Accessible interfaces"           },
  { label: "UX Research & Design",    detail: "HCD · WCAG · Figma · Cognitive load theory"                     },
  { label: "Social Impact Tech",      detail: "NextGenShe · Haven · SheSphere · Underserved communities"        },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Building AI systems grounded in<br className="hidden sm:block" />
            technical rigour and social responsibility.
          </h2>
        </motion.div>

        {/* Core statement */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-secondary-foreground text-base leading-relaxed mb-6 border-l-2 border-primary/40 pl-4"
        >
          Final-year Software Engineering student (CGPA 3.93 · Top 1%) at Virtual University of Pakistan.
          6-year PEEF Merit Scholar. Alumna of the Aspire Institute Leadership Program (Harvard Faculty).
          Founder of NextGenShe — expanding STEM access for women in underserved communities.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="font-body text-muted-foreground text-sm leading-relaxed mb-10"
        >
          My work spans AI system design, full-stack development, and UX research —
          always oriented toward real-world constraints and measurable impact.
          Preparing to pursue an MSc in Artificial Intelligence to deepen expertise
          in machine learning, intelligent systems, and ethical AI.
        </motion.p>

        {/* Pillar grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.22 + i * 0.07 }}
              whileHover={{ x: 3, transition: { duration: 0.15 } }}
              className="group flex items-start gap-3 bg-card border border-border/50 rounded-lg p-4 hover:border-primary/25 transition-all duration-200"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 group-hover:bg-primary transition-colors duration-200" />
              <div>
                <p className="text-foreground font-medium text-sm mb-0.5">{pillar.label}</p>
                <p className="text-muted-foreground text-xs font-mono leading-relaxed">{pillar.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
