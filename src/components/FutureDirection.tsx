import { motion } from "framer-motion";
import { Target } from "lucide-react";

const FutureDirection = () => {
  return (
    <section id="direction" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Direction</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Future Academic Direction</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card border border-border/50 rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
              <Target size={18} className="text-primary" />
            </div>
            <p className="font-body text-secondary-foreground text-sm leading-relaxed">
              I aim to pursue advanced study in Artificial Intelligence to deepen my understanding
              of intelligent systems, fairness in machine learning, and responsible AI deployment
              in real-world contexts. My research interests lie at the intersection of ethical AI,
              decision-support systems, and technology for underserved communities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureDirection;
