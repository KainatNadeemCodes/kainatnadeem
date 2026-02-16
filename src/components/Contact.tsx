import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Build Something That Matters</h3>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Open to roles, collaborations, and partnerships at the intersection of AI, UX, and social impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kainat.nadeem.work@gmail.com"
              className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary/50 transition-colors group"
            >
              <Mail size={20} className="text-primary" />
              <span className="text-foreground text-sm">kainat.nadeem.work@gmail.com</span>
            </a>
            <a
              href="tel:+923425611470"
              className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary/50 transition-colors"
            >
              <Phone size={20} className="text-primary" />
              <span className="text-foreground text-sm">+92 342 5611470</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kainat-nadeem-a9408b324"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl px-6 py-4 flex items-center gap-3 hover:border-primary/50 transition-colors"
            >
              <Linkedin size={20} className="text-primary" />
              <span className="text-foreground text-sm">LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-4xl mt-24 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          © 2025 Kainat Nadeem. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
