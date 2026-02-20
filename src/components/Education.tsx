import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const certifications = [
  "Google UX Design Professional Certificate",
  "Google Prompting Essentials",
  "Coursera — AI for Everyone",
  "IBM Cyber-security Certificate",
];

const coursework = [
  "Machine Learning",
  "Data Structures & Algorithms",
  "Database Systems",
  "Human-Computer Interaction",
  "Software Engineering Principles",
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Foundation & Credentials</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border/50 rounded-xl p-6 mb-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
              <GraduationCap size={18} className="text-primary" />
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="text-foreground font-semibold text-base">BS Software Engineering</h3>
                <span className="font-mono text-muted-foreground text-xs">2022 – 2026</span>
              </div>
              <p className="text-muted-foreground text-xs mb-2">Virtual University of Pakistan</p>
              <p className="font-body text-secondary-foreground text-sm leading-relaxed">
                Focused on programming, AI fundamentals, web development, and UX/UI design. Final year project: AI-Powered Smart Health Assistant.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Relevant Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="bg-card border border-border/50 rounded-xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
              <BookOpen size={18} className="text-primary" />
            </div>
            <p className="text-foreground font-medium text-sm">Relevant Coursework</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course}
                className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-md font-mono"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-foreground font-medium text-sm mb-4">Certifications</p>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, i) => (
              <span
                key={i}
                className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-md font-mono"
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

export default Education;
