import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { downloadResume } from "@/lib/resume";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(220 90% 56% / 0.04) 1px, transparent 1px),
              linear-gradient(90deg, hsl(220 90% 56% / 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "gridPulse 6s ease-in-out infinite",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/40 backdrop-blur-sm mb-8"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">AI · Frontend · UX · Impact</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 leading-[0.95]"
        >
          <span className="text-foreground">Kainat</span>
          <br />
          <span className="text-gradient">Nadeem</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="font-mono text-sm md:text-base tracking-[0.15em] uppercase mb-6"
        >
          <span className="text-primary">AI Engineer</span>
          <span className="text-muted-foreground mx-3">|</span>
          <span className="text-foreground/80">Frontend Developer</span>
          <span className="text-muted-foreground mx-3">|</span>
          <span className="text-foreground/80">UX Strategist</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="font-body text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Building intelligent, user-centered systems that create real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-gradient-brand text-primary-foreground px-8 py-3.5 rounded-xl text-sm font-semibold transition-all glow glow-hover flex items-center gap-2"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <button
            onClick={downloadResume}
            className="glass px-8 py-3.5 rounded-xl text-sm font-semibold text-foreground hover:border-primary/40 transition-all flex items-center gap-2"
          >
            <Download size={16} className="text-primary" />
            Download Resume
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 rounded-full border border-muted-foreground/25 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
