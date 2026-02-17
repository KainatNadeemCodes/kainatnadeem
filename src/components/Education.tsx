import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "Google UX Design Professional Certificate",
  "Google Prompting Essentials",
  "Coursera — AI for Everyone",
  "IBM Cyber-security Certificate",
];

const Education = () => {
  return (
    <section id="education" className="py-28 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Education</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Foundation & Credentials</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-elevated p-7 mb-10"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <GraduationCap size={18} className="text-primary" />
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h4 className="text-foreground font-semibold text-lg">BS Software Engineering</h4>
                <span className="font-mono text-muted-foreground text-xs">2022 – 2026</span>
              </div>
              <p className="text-muted-foreground text-xs mb-2">Virtual University of Pakistan</p>
              <p className="font-body text-secondary-foreground text-sm leading-relaxed">
                Focused on programming, AI fundamentals, web development, and UX/UI design. Final year project: AI-Powered Smart Health Assistant.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="text-foreground font-semibold text-base mb-4 flex items-center gap-2">
            <Award size={16} className="text-primary" /> Certifications
          </h4>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="bg-secondary text-secondary-foreground text-xs px-4 py-2 rounded-full font-mono hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
