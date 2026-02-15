import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = ["Software Engineer", "AI Developer", "UX Designer"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < current.length) {
          setCharIndex((c) => c + 1);
        } else if (!isDeleting && charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && charIndex > 0) {
          setCharIndex((c) => c - 1);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Neural network background" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4 h-6">
            {roles[roleIndex].slice(0, charIndex)}
            <span className="inline-block w-[2px] h-4 bg-primary ml-0.5 align-middle animate-pulse" />
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Kainat</span>{" "}
            <span className="text-gradient">Nadeem</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Building AI-driven applications and impactful digital solutions that make a difference.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="mailto:kainat.nadeem.work@gmail.com"
              className="glass px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm text-foreground hover:border-primary/50 transition-colors"
            >
              <Mail size={16} className="text-primary" />
              kainat.nadeem.work@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/kainat-nadeem-a9408b324"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm text-foreground hover:border-primary/50 transition-colors"
            >
              <Linkedin size={16} className="text-primary" />
              LinkedIn
            </a>
            <span className="glass px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              Gujar Khan, Pakistan
            </span>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="inline-block animate-bounce"
        >
          <ChevronDown size={28} className="text-primary" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
