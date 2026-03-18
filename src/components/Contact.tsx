import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "kainat.nadeem.work@gmail.com",
    href: "mailto:kainat.nadeem.work@gmail.com",
    sub: "Email",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kainat-nadeem-a9408b324",
    sub: "Connect",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/KainatNadeemCodes",
    sub: "KainatNadeemCodes",
  },
];

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
            Open to Opportunities
          </h2>
          <p className="font-body text-muted-foreground text-base mb-3 max-w-md mx-auto leading-relaxed">
            Available for MSc AI programmes, research collaborations, and STEM scholarship opportunities.
          </p>
          <p className="font-mono text-muted-foreground text-xs mb-10 max-w-sm mx-auto">
            Pakistan · +92 342 5611470
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="group bg-card border border-border/50 rounded-xl px-5 py-4 flex items-center gap-3 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
                >
                  <Icon size={16} className="text-primary" />
                  <div className="text-left">
                    <p className="font-body text-foreground text-sm leading-none mb-0.5">{link.label}</p>
                    <p className="text-muted-foreground text-[10px] font-mono">{link.sub}</p>
                  </div>
                  <ArrowUpRight size={13} className="text-muted-foreground group-hover:text-primary transition-colors ml-1" />
                </motion.a>
              );
            })}
          </div>

          {/* Final tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-muted-foreground/60 text-xs tracking-wide italic"
          >
            "She builds intelligent systems with purpose."
          </motion.p>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="container mx-auto max-w-3xl mt-16 pt-6 border-t border-border/30 flex flex-wrap items-center justify-between gap-3">
        <p className="text-muted-foreground text-xs font-mono tracking-wide">
          © 2026 Kainat Nadeem
        </p>
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground/50 text-[10px] font-mono">
            AI Engineer · UX Designer · Social Impact Technologist
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
