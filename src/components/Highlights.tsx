import { motion } from "framer-motion";
import { Trophy, Star, Users, Lightbulb, Globe } from "lucide-react";

const highlights = [
  {
    icon: Star,
    label: "Top 1% Scholar",
    sub: "CGPA 3.93 · PEEF 6-Year Merit Award",
    color: "text-amber-400",
    glow: "hover:shadow-amber-400/20",
    border: "hover:border-amber-400/30",
    bg: "hover:bg-amber-400/5",
  },
  {
    icon: Globe,
    label: "Global AI Hackathon",
    sub: "Team Lead · 4,000+ participants · 50+ countries",
    color: "text-blue-400",
    glow: "hover:shadow-blue-400/20",
    border: "hover:border-blue-400/30",
    bg: "hover:bg-blue-400/5",
  },
  {
    icon: Lightbulb,
    label: "Founder · NextGenShe",
    sub: "Women in STEM Initiative · Aspire Capstone",
    color: "text-violet-400",
    glow: "hover:shadow-violet-400/20",
    border: "hover:border-violet-400/30",
    bg: "hover:bg-violet-400/5",
  },
  {
    icon: Trophy,
    label: "Aspire Leadership",
    sub: "Harvard Faculty Initiative · Alumna",
    color: "text-emerald-400",
    glow: "hover:shadow-emerald-400/20",
    border: "hover:border-emerald-400/30",
    bg: "hover:bg-emerald-400/5",
  },
  {
    icon: Users,
    label: "Volunteer Mentor",
    sub: "20+ students · LinkedIn Learning Community",
    color: "text-pink-400",
    glow: "hover:shadow-pink-400/20",
    border: "hover:border-pink-400/30",
    bg: "hover:bg-pink-400/5",
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-6 text-center"
        >
          Achievements
        </motion.p>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`
                group relative bg-card border border-border/50 rounded-xl p-4
                cursor-default transition-all duration-300
                hover:shadow-lg ${item.glow} ${item.border} ${item.bg}
              `}
            >
              {/* Subtle top glow line */}
              <div
                className={`absolute top-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-current ${item.color}`}
              />

              <div className={`mb-3 ${item.color}`}>
                <item.icon size={16} strokeWidth={1.8} />
              </div>

              <p className="text-foreground font-semibold text-xs leading-snug mb-1">
                {item.label}
              </p>
              <p className="text-muted-foreground text-[10px] leading-relaxed font-mono">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
