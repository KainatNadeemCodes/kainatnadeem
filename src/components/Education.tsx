import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Trophy, Award } from "lucide-react";

const coursework = [
  "Artificial Intelligence",
  "Analysis of Algorithms",
  "Data Structures",
  "Linear Algebra",
  "Probability & Statistics",
  "Human-Computer Interaction",
  "Software Engineering Principles",
  "Database Systems",
];

const certifications = [
  { name: "Google UX Design Professional Certificate",     issuer: "Google · Coursera",         year: "Jun 2025" },
  { name: "Google Prompting Essentials · Generative AI",   issuer: "Google · Coursera",         year: "Mar 2025" },
  { name: "Python for Data Science, AI & Development",     issuer: "IBM · Coursera",            year: "Jun 2025" },
  { name: "AI for Everyone",                               issuer: "DeepLearning.AI · Coursera", year: "Jan 2025" },
  { name: "AI-Integrated Leadership Program",              issuer: "Aspire Institute",           year: "Dec 2025" },
  { name: "Aspire Leadership Program",                     issuer: "Aspire Institute",           year: "Nov 2024" },
  { name: "Improve Your English Communication Skills",     issuer: "Georgia Tech · Coursera",   year: "Mar 2025" },
  { name: "IBM Cybersecurity Certificate",                 issuer: "IBM",                        year: "2024"     },
];

const awards = [
  {
    icon: Trophy,
    title: "6-Year PEEF Merit Scholar",
    sub: "Punjab Educational Endowment Fund · 2020 – Present",
    detail: "Continuous provincial merit scholarship awarded to top academic performers.",
    color: "text-amber-400",
    bg: "bg-amber-400/8",
    border: "border-amber-400/20",
  },
  {
    icon: Award,
    title: "PM Youth Laptop Scheme · Phase 4",
    sub: "Prime Minister of Pakistan · 2025",
    detail: "Received laptop on merit under the Prime Minister Youth Laptop Scheme.",
    color: "text-blue-400",
    bg: "bg-blue-400/8",
    border: "border-blue-400/20",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">

        {/* Header */}
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

        {/* Degree card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative bg-card border border-border/50 rounded-xl p-6 mb-5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/8 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
              <GraduationCap size={18} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-foreground font-semibold text-base">BS Software Engineering</h3>
                <span className="font-mono text-muted-foreground text-xs">2022 – 2026 (Expected)</span>
              </div>
              <p className="text-muted-foreground text-xs mb-1">Virtual University of Pakistan</p>

              {/* CGPA badge */}
              <div className="flex flex-wrap gap-2 mb-4 mt-3">
                <span className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-mono px-3 py-1 rounded-full">
                  <Trophy size={10} />
                  CGPA 3.93 / 4.00 · Top 1%
                </span>
                <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/25 text-primary text-xs font-mono px-3 py-1 rounded-full">
                  6-Year PEEF Merit Scholar
                </span>
              </div>

              {/* FYP highlight */}
              <div className="bg-secondary/60 border border-border/40 rounded-lg p-4 mb-0">
                <p className="font-mono text-primary text-[10px] tracking-[0.15em] uppercase mb-1">Final Year Project</p>
                <p className="text-foreground font-medium text-sm mb-1">AI-Powered Smart Health Assistant</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  End-to-end AI triage system · FastAPI + Scikit-Learn + NLTK · Healthcare accessibility in low-resource environments
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coursework */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.07 }}
          className="bg-card border border-border/50 rounded-xl p-6 mb-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/20 flex items-center justify-center shrink-0">
              <BookOpen size={15} className="text-primary" />
            </div>
            <p className="text-foreground font-medium text-sm">Relevant Coursework</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course}
                className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-md font-mono border border-border/30"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                className={`group relative bg-card border border-border/50 rounded-xl p-5 hover:border-opacity-50 transition-all duration-300 hover:${award.border}`}
              >
                <div className={`w-9 h-9 rounded-lg ${award.bg} border ${award.border} flex items-center justify-center mb-3`}>
                  <Icon size={15} className={award.color} />
                </div>
                <p className={`font-semibold text-sm text-foreground mb-0.5`}>{award.title}</p>
                <p className={`font-mono text-[10px] mb-2 ${award.color}`}>{award.sub}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{award.detail}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-card border border-border/50 rounded-xl p-6"
        >
          <p className="font-mono text-primary text-[10px] tracking-[0.2em] uppercase mb-5">Certifications</p>
          <div className="space-y-2">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 * i }}
                className="flex items-center justify-between gap-4 py-2.5 border-b border-border/30 last:border-0"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-foreground text-xs font-medium leading-snug">{cert.name}</p>
                    <p className="text-muted-foreground text-[10px] font-mono mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
                <span className="text-muted-foreground text-[10px] font-mono shrink-0">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
