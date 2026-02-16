import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { downloadResume } from "@/lib/resume";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-foreground">Kainat</span>{" "}
          <span className="text-gradient">Nadeem</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="font-mono text-primary text-sm md:text-base tracking-[0.2em] uppercase mb-8"
        >
          AI Engineer
          <span className="text-muted-foreground mx-2">·</span>
          Frontend Developer
          <span className="text-muted-foreground mx-2">·</span>
          UX Strategist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Building intelligent, user-centered systems that create real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity glow flex items-center gap-2"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <button
            onClick={downloadResume}
            className="glass px-8 py-3 rounded-lg text-sm font-semibold text-foreground hover:border-primary/50 transition-colors flex items-center gap-2"
          >
            <Download size={16} className="text-primary" />
            Download Resume
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
