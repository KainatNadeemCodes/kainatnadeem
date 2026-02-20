import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Build Something That Matters
          </h2>
          <p className="font-body text-muted-foreground text-base mb-10 max-w-md mx-auto leading-relaxed">
            Open to roles, collaborations, and partnerships at the intersection of AI, UX, and social impact.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:kainat.nadeem.work@gmail.com"
              className="bg-card border border-border/50 rounded-lg px-5 py-3.5 flex items-center gap-3 hover:border-primary/30 transition-colors duration-200 group"
            >
              <Mail size={16} className="text-primary" />
              <span className="font-body text-foreground text-sm">kainat.nadeem.work@gmail.com</span>
              <ArrowUpRight size={13} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/kainat-nadeem-a9408b324"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border/50 rounded-lg px-5 py-3.5 flex items-center gap-3 hover:border-primary/30 transition-colors duration-200 group"
            >
              <Linkedin size={16} className="text-primary" />
              <span className="font-body text-foreground text-sm">LinkedIn</span>
              <ArrowUpRight size={13} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-3xl mt-20 pt-6 border-t border-border/30 text-center">
        <p className="text-muted-foreground text-xs font-mono tracking-wide">
          © 2025 Kainat Nadeem · Built with intention
        </p>
      </div>
    </section>
  );
};

export default Contact;
