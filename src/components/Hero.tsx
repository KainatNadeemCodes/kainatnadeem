import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Brain, Code2, Palette, Globe } from "lucide-react";
import { downloadResume } from "@/lib/resume";
import NeuralCanvas from "@/components/NeuralCanvas";

const roles = [
  { icon: Brain,   label: "AI Engineer",               color: "text-blue-400",    bg: "bg-blue-400/10",    border: "border-blue-400/20",    href: "#skills"    },
  { icon: Code2,   label: "Frontend Developer",         color: "text-violet-400",  bg: "bg-violet-400/10",  border: "border-violet-400/20",  href: "#skills"    },
  { icon: Palette, label: "UX Designer",                color: "text-pink-400",    bg: "bg-pink-400/10",    border: "border-pink-400/20",    href: "#skills"    },
  { icon: Globe,   label: "Social Impact Technologist", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", href: "#projects"  },
];

const stats = [
  { value: "3.93", label: "CGPA · Top 1%"  },
  { value: "6yr",  label: "PEEF Scholar"   },
  { value: "4K+",  label: "Hackathon Pool" },
  { value: "5",    label: "Articles Live"  },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      <NeuralCanvas />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-mono text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6"
        >
          MSc AI Candidate · Women in STEM Advocate · Pakistan
        </motion.p>

        {/* Name */}
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

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-12 h-px bg-primary/40 mx-auto mb-6"
        />

        {/* Role pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.button
                key={role.label}
                onClick={() => scrollTo(role.href.replace("#", ""))}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.32 + i * 0.07 }}
                whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border backdrop-blur-sm cursor-pointer ${role.color} ${role.bg} ${role.border}`}
              >
                <Icon size={11} />
                {role.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.36, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl mx-auto mb-4 leading-snug tracking-tight"
        >
          Where rigorous engineering meets{" "}
          <span className="text-gradient">human understanding.</span>
        </motion.h2>

        {/* Subheading — now includes research intent */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.44, ease: "easeOut" }}
          className="font-body text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-4 leading-relaxed"
        >
          I build AI-powered systems and design interfaces for the people
          who need them most —{" "}
          <span className="text-foreground font-medium">
            families, children, and underserved communities.
          </span>
        </motion.p>

        {/* Research intent line — NEW */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.52, ease: "easeOut" }}
          className="font-mono text-xs text-muted-foreground/80 max-w-lg mx-auto mb-10 leading-relaxed border border-primary/15 rounded-lg px-4 py-2.5 bg-primary/5"
        >
          Building these systems raised questions I cannot yet answer —{" "}
          <span className="text-primary">
            about accountability, safety, and who AI leaves behind.
          </span>{" "}
          Pursuing an MSc in AI to research them properly.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.58, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("projects");
            }}
            className="bg-primary text-primary-foreground px-7 py-3 rounded-lg text-sm font-medium transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2 cursor-pointer"
          >
            View Projects
            <ArrowDown size={15} />
          </a>
          <button
            onClick={downloadResume}
            className="border border-border/60 bg-card/40 backdrop-blur-sm px-7 py-3 rounded-lg text-sm font-medium text-foreground hover:border-primary/40 hover:bg-card/60 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download size={15} className="text-primary" />
            Resume
          </button>
          <a
            href="https://github.com/KainatNadeemCodes"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border/60 bg-card/40 backdrop-blur-sm px-7 py-3 rounded-lg text-sm font-medium text-foreground hover:border-primary/40 hover:bg-card/60 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Github size={15} className="text-primary" />
            GitHub
          </a>
        </motion.div>

        {/* Stats strip — updated "4 Live Projects" → "5 Articles Live" */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.68, ease: "easeOut" }}
          className="inline-flex items-center gap-0 bg-card/40 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 py-3 text-center ${i < stats.length - 1 ? "border-r border-border/40" : ""}`}
            >
              <p className="text-foreground font-bold text-base font-mono leading-none mb-0.5">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-[10px] font-mono tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
