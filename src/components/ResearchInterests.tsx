import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";

const interests = [
  "Responsible and ethical AI systems",
  "Fairness and bias-aware machine learning",
  "AI decision-support in healthcare",
  "Intelligent systems for underserved communities",
  "Human-centered AI design",
  "Explainability and transparency in AI models",
];

const ResearchInterests = () => {
  return (
    <section id="research" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Research</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Academic & Research Interests</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border/50 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
              <FlaskConical size={18} className="text-primary" />
            </div>
            <p className="text-foreground font-medium text-sm">Areas of Interest</p>
          </div>
          <ul className="space-y-3">
            {interests.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="flex items-start gap-3 text-secondary-foreground text-sm leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchInterests;
