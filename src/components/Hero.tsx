import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { downloadResume } from "@/lib/resume";
import NeuralCanvas from "@/components/NeuralCanvas";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* ── Layer 1: Neural node canvas ── */}
      <NeuralCanvas />

      {/* ── Layer 2: Subtle dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(220 90% 70% / 0.05) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Layer 3: Soft vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, hsl(var(--background)) 100%)",
        }}
      />

      {/* ── Layer 4: Edge fade ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── Layer 5: Ambient orbs ── */}
      <div
        className="orb-drift-1 absolute pointer-events-none"
        style={{
          top: "25%",
          left: "15%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "hsl(220 90% 60% / 0.04)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="orb-drift-2 absolute pointer-events-none"
        style={{
          bottom: "20%",
          right: "15%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "hsl(260 70% 60% / 0.035)",
          filter: "blur(110px)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8"
        >
          AI-Focused Software Engineer · Aspiring MSc AI Researcher
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4 leading-[0.95]"
        >
          <span className="text-foreground">Kainat</span>
          <br />
          <span className="text-gradient">Nadeem</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="w-12 h-px bg-primary/40 mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="font-body text-muted-foreground text-lg md:text-xl max-w-lg mx-auto mb-12 leading-relaxed"
        >
          Engineering intelligent systems with a focus on responsible AI, decision-support models, and human-centered design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary text-primary-foreground px-7 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-90 flex items-center gap-2"
          >
            View Projects
            <ArrowDown size={15} />
          </a>
          <button
            onClick={downloadResume}
            className="border border-border/60 bg-card/40 backdrop-blur-sm px-7 py-3 rounded-lg text-sm font-medium text-foreground hover:border-primary/40 transition-all flex items-center gap-2"
          >
            <Download size={15} className="text-primary" />
            Resume
          </button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 rounded-full border border-muted-foreground/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-primary/60"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
