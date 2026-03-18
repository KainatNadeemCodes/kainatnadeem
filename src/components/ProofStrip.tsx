import { motion } from "framer-motion";
import { Star, Award, Users, Lightbulb, Globe, Trophy } from "lucide-react";

const badges = [
  {
    icon: Star,
    value: "CGPA 3.93",
    label: "Top 1% · Software Engineering",
    color: "text-amber-400",
    bg: "bg-amber-400/8",
    border: "border-amber-400/20",
    glow: "hover:border-amber-400/45 hover:shadow-amber-400/10",
  },
  {
    icon: Award,
    value: "6-Year Scholar",
    label: "PEEF Provincial Merit Award",
    color: "text-blue-400",
    bg: "bg-blue-400/8",
    border: "border-blue-400/20",
    glow: "hover:border-blue-400/45 hover:shadow-blue-400/10",
  },
  {
    icon: Users,
    value: "4,000+ Pool",
    label: "Global AI Hackathon · Team Lead",
    color: "text-violet-400",
    bg: "bg-violet-400/8",
    border: "border-violet-400/20",
    glow: "hover:border-violet-400/45 hover:shadow-violet-400/10",
  },
  {
    icon: Lightbulb,
    value: "Founder",
    label: "NextGenShe · Women in STEM",
    color: "text-emerald-400",
    bg: "bg-emerald-400/8",
    border: "border-emerald-400/20",
    glow: "hover:border-emerald-400/45 hover:shadow-emerald-400/10",
  },
  {
    icon: Globe,
    value: "Aspire Alumna",
    label: "Harvard-Affiliated · Leadership",
    color: "text-pink-400",
    bg: "bg-pink-400/8",
    border: "border-pink-400/20",
    glow: "hover:border-pink-400/45 hover:shadow-pink-400/10",
  },
  {
    icon: Trophy,
    value: "PM Laptop",
    label: "Merit · Youth Scheme Phase-4",
    color: "text-orange-400",
    bg: "bg-orange-400/8",
    border: "border-orange-400/20",
    glow: "hover:border-orange-400/45 hover:shadow-orange-400/10",
  },
];

const ProofStrip = () => {
  return (
    <section id="proof" className="py-16 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="flex-1 h-px bg-border/40" />
          <p className="font-mono text-muted-foreground text-[10px] tracking-[0.25em] uppercase shrink-0">
            Proof & Highlights
          </p>
          <div className="flex-1 h-px bg-border/40" />
        </motion.div>

        {/* Scrollable badge strip */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide scroll-smooth px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -3, transition: { duration: 0.18 } }}
                  className={`
                    group relative flex-none
                    flex items-center gap-3
                    bg-card border rounded-xl
                    px-4 py-3
                    transition-all duration-250
                    hover:shadow-lg cursor-default
                    ${badge.border} ${badge.glow}
                  `}
                  style={{ minWidth: 200 }}
                >
                  {/* Top glow line on hover */}
                  <div className={`absolute top-0 left-3 right-3 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-current ${badge.color}`} />

                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-lg ${badge.bg} border ${badge.border} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                    <Icon size={14} className={badge.color} strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <p className={`font-mono font-semibold text-xs leading-none mb-1 ${badge.color}`}>
                      {badge.value}
                    </p>
                    <p className="text-muted-foreground text-[10px] font-mono leading-tight whitespace-nowrap">
                      {badge.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center text-muted-foreground/40 text-[10px] font-mono mt-4 md:hidden"
        >
          ← scroll →
        </motion.p>
      </div>
    </section>
  );
};

export default ProofStrip;
