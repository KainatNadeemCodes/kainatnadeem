import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const Repositories = () => {
  return (
    <section id="repositories" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Code</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Code & Technical Repositories
          </h2>
          <p className="font-body text-muted-foreground text-sm leading-relaxed mb-10 max-w-xl">
            My GitHub repositories document the technical architecture, backend systems, and AI experimentation behind my projects.
          </p>

          <a
            href="https://github.com/KainatNadeemCodes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-card border border-border/50 rounded-lg px-6 py-4 hover:border-primary/30 transition-colors duration-200 group"
          >
            <Github size={20} className="text-primary" />
            <div>
              <p className="font-mono text-foreground text-sm font-medium">KainatNadeemCodes</p>
              <p className="text-muted-foreground text-xs mt-0.5">github.com/KainatNadeemCodes</p>
            </div>
            <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Repositories;
