import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "Google Professional Certificate in UX Design",
  "Professional Certificate — Improve Your English Communication Skills (Georgia Tech)",
  "Coursera: AI for Everyone",
  "Google Prompting Essentials Certificate",
  "Cyber-security Course Certificate from IBM",
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Education</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Foundation & Credentials</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-8 mb-10"
        >
          <div className="flex items-start gap-4">
            <GraduationCap size={32} className="text-primary mt-1 shrink-0" />
            <div>
              <span className="font-mono text-primary text-xs tracking-wider">2022 – 2026</span>
              <h4 className="text-foreground font-semibold text-xl mt-1">
                BS Software Engineering
              </h4>
              <p className="text-muted-foreground text-sm mb-3">Virtual University of Pakistan — Lahore</p>
              <ul className="space-y-1.5 text-secondary-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-primary mt-1.5 text-[6px]">●</span>Online-first program with in-person exams</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1.5 text-[6px]">●</span>Focus on programming, OOP, AI fundamentals, web development, UX/UI design</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1.5 text-[6px]">●</span>Final Year Project: AI-Powered Smart Health Assistant</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="text-foreground font-semibold text-xl mb-6 flex items-center gap-2">
            <Award size={22} className="text-primary" /> Certifications
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <div key={i} className="glass rounded-xl px-5 py-3 text-sm text-secondary-foreground">
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
