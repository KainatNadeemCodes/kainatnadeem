import { motion } from "framer-motion";
import {
  Globe, Users, Star, Sparkles,
  BookOpen, Heart, Award, ArrowUpRight,
  GraduationCap, Lightbulb,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// STAR 1 — Social Impact
// ─────────────────────────────────────────────────────────────────────────────
const impactItems = [
  {
    metric: "NextGenShe",
    detail: "Founded a platform closing the gender education gap in rural Pakistan — designed for women who study in secret.",
    proof: "Live · Aspire-Commended",
    color: "text-emerald-400",
    bg: "bg-emerald-400/8",
    border: "border-emerald-400/20",
  },
  {
    metric: "Haven",
    detail: "Built a neuro-inclusive interface so neurodivergent users can navigate digital spaces without sensory overload.",
    proof: "WCAG 2.1 AA · Live",
    color: "text-blue-400",
    bg: "bg-blue-400/8",
    border: "border-blue-400/20",
  },
  {
    metric: "SheSphere",
    detail: "Engineered a real-time SOS alert system so women can call for help in a single tap — no barriers, no friction.",
    proof: "React · TypeScript · Live",
    color: "text-pink-400",
    bg: "bg-pink-400/8",
    border: "border-pink-400/20",
  },
  {
    metric: "Smart Health",
    detail: "Designed an AI triage system for communities with no doctor nearby — accessible, ethical, and constraint-aware.",
    proof: "FastAPI · Scikit-Learn · FYP",
    color: "text-violet-400",
    bg: "bg-violet-400/8",
    border: "border-violet-400/20",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// STAR 2 — Volunteer & Community Leadership
// ─────────────────────────────────────────────────────────────────────────────
const volunteerItems = [
  {
    role: "Volunteer Mentor",
    org: "LinkedIn Learning Community",
    impact: "Guiding 20+ university students through programming, final year projects, and career decisions — for free, consistently.",
    icon: Heart,
    link: "https://www.linkedin.com/in/kainat-nadeem-a9408b324",
  },
  {
    role: "Global AI Hackathon Team Lead",
    org: "Aspire Institute × CAYU · Jan 2026",
    impact: "Led a cross-border team of 5 from Kenya, Nigeria, Bolivia & Pakistan — building Pathway AI in 24 hours for 4,000+ participants.",
    icon: Users,
    link: null,
  },
  {
    role: "Founder",
    org: "NextGenShe · Women in STEM Initiative",
    impact: "Researched Pakistan's gender education gap, built an MVP, and presented a strategic roadmap to scale digital literacy across rural districts.",
    icon: Globe,
    link: "https://women-edu-first.vercel.app",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// STAR 3 — Academic Excellence
// ─────────────────────────────────────────────────────────────────────────────
const academicItems = [
  { label: "CGPA",        value: "3.93 / 4.00",    sub: "Top 1% · BS Software Engineering",              color: "text-amber-400" },
  { label: "Scholar",     value: "6 Years",          sub: "PEEF Provincial Merit · Unbroken",               color: "text-blue-400"  },
  { label: "Recognition", value: "PM Laptop",        sub: "Merit Award · National Youth Scheme Phase-4",    color: "text-emerald-400"},
  { label: "Program",     value: "Aspire Alumna",    sub: "Harvard Faculty · Global Leadership Initiative", color: "text-violet-400" },
];

const certItems = [
  "Google UX Design Professional",
  "Google Prompting Essentials · Gen AI",
  "Python for Data Science · IBM",
  "AI for Everyone · DeepLearning.AI",
  "AI-Integrated Leadership · Aspire",
];

// ─────────────────────────────────────────────────────────────────────────────
// STAR 4 — Unique differentiator
// ─────────────────────────────────────────────────────────────────────────────
const uniquePoints = [
  {
    icon: Globe,
    title: "Built for the marginalised, not the mainstream",
    body: "Every project I've shipped targets a group that technology has historically ignored — rural women, neurodivergent users, communities without healthcare access. This isn't a theme I picked for my portfolio. It's the reason I code.",
  },
  {
    icon: Lightbulb,
    title: "I ship, not just design",
    body: "4 live products before graduating. Not mockups. Not case studies of things that never launched. Real URLs, real users, real constraints — built while maintaining a 3.93 GPA and founding an initiative.",
  },
  {
    icon: Sparkles,
    title: "I lead across borders before I had a degree",
    body: "Led a 5-person global team (4 countries, 24 hours, 4,000+ competitors) as an undergraduate — producing a commended AI platform. The kind of collaboration Brunel's cohort demands.",
  },
  {
    icon: BookOpen,
    title: "My MSc goal is specific, not aspirational",
    body: "I'm not applying to 'learn AI'. I'm applying to research fairness-aware ML and ethical decision-support systems — so the next version of NextGenShe has a bias-audited recommendation engine behind it.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
const ScholarshipSignal = () => {
  return (
    <section id="scholarship" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">
            British Council · STEM Scholarship · Brunel University
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why I Belong in That Room
          </h2>
          <p className="font-body text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
            Four signals that separate a strong applicant from an unforgettable one.
          </p>
        </motion.div>

        {/* ── STAR 1: Social Impact ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/25 flex items-center justify-center shrink-0">
              <Globe size={15} className="text-emerald-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-emerald-400 tracking-[0.2em] uppercase">Star 01</p>
              <h3 className="text-foreground font-bold text-lg leading-tight">Social Impact — Proof, Not Promise</h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {impactItems.map((item, i) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ x: 3, transition: { duration: 0.15 } }}
                className={`group relative bg-card border border-border/50 rounded-xl p-5 hover:border-opacity-60 transition-all duration-200 hover:${item.border}`}
              >
                <div className="absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current to-transparent" />
                <div className="flex items-start justify-between mb-2">
                  <p className={`font-mono font-bold text-sm ${item.color}`}>{item.metric}</p>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${item.bg} ${item.border} ${item.color}`}>
                    {item.proof}
                  </span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed font-body">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── STAR 2: Volunteer & Community ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-pink-400/10 border border-pink-400/25 flex items-center justify-center shrink-0">
              <Heart size={15} className="text-pink-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-pink-400 tracking-[0.2em] uppercase">Star 02</p>
              <h3 className="text-foreground font-bold text-lg leading-tight">Volunteer & Community Leadership</h3>
            </div>
          </div>

          <div className="space-y-4">
            {volunteerItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group flex items-start gap-4 bg-card border border-border/50 rounded-xl p-5 hover:border-pink-400/25 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-pink-400/8 border border-pink-400/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={15} className="text-pink-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <p className="text-foreground font-semibold text-sm">{item.role}</p>
                      <p className="font-mono text-muted-foreground text-[10px]">{item.org}</p>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed font-body">{item.impact}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-pink-400 text-[10px] font-mono hover:text-pink-300 transition-colors"
                      >
                        View Profile <ArrowUpRight size={10} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* LinkedIn call-out */}
          <motion.a
            href="https://www.linkedin.com/in/kainat-nadeem-a9408b324"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            whileHover={{ y: -2, transition: { duration: 0.15 } }}
            className="mt-4 flex items-center justify-between bg-card border border-border/50 rounded-xl px-5 py-4 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-400/5 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-400/8 border border-blue-400/20 flex items-center justify-center">
                <Users size={14} className="text-blue-400" />
              </div>
              <div>
                <p className="text-foreground font-medium text-sm">LinkedIn · Volunteer Mentor Activity</p>
                <p className="text-muted-foreground text-[10px] font-mono mt-0.5">linkedin.com/in/kainat-nadeem-a9408b324</p>
              </div>
            </div>
            <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-blue-400 transition-colors" />
          </motion.a>
        </motion.div>

        {/* ── STAR 3: Academic Excellence ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/25 flex items-center justify-center shrink-0">
              <GraduationCap size={15} className="text-amber-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-amber-400 tracking-[0.2em] uppercase">Star 03</p>
              <h3 className="text-foreground font-bold text-lg leading-tight">Academic Excellence — Verified & Sustained</h3>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {academicItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-card border border-border/50 rounded-xl p-4 text-center hover:border-border/80 transition-all duration-200"
              >
                <p className={`font-mono font-bold text-xl mb-1 ${item.color}`}>{item.value}</p>
                <p className="text-muted-foreground text-[10px] font-mono leading-tight">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-card border border-border/50 rounded-xl p-5">
            <p className="font-mono text-primary text-[10px] tracking-[0.2em] uppercase mb-4">
              Verified Certifications
            </p>
            <div className="flex flex-wrap gap-2">
              {certItems.map((cert) => (
                <span
                  key={cert}
                  className="bg-secondary text-secondary-foreground text-[11px] px-3 py-1.5 rounded-md font-mono border border-border/30"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── STAR 4: Unique Differentiator ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-violet-400/10 border border-violet-400/25 flex items-center justify-center shrink-0">
              <Sparkles size={15} className="text-violet-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-violet-400 tracking-[0.2em] uppercase">Star 04</p>
              <h3 className="text-foreground font-bold text-lg leading-tight">What Makes Me Different From 1,000 Applicants</h3>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {uniquePoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  whileHover={{ y: -3, transition: { duration: 0.18 } }}
                  className="group relative bg-card border border-border/50 rounded-xl p-5 hover:border-violet-400/25 hover:shadow-lg hover:shadow-violet-400/5 transition-all duration-250"
                >
                  <div className="absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
                  <div className="w-8 h-8 rounded-lg bg-violet-400/8 border border-violet-400/20 flex items-center justify-center mb-3">
                    <Icon size={14} className="text-violet-400" />
                  </div>
                  <p className="text-foreground font-semibold text-sm mb-2 leading-snug">{point.title}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed font-body">{point.body}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 relative bg-card border border-primary/20 rounded-xl p-6 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <Award size={16} className="text-primary" />
              </div>
              <div>
                <p className="font-mono text-primary text-[10px] tracking-[0.15em] uppercase mb-2">
                  For the Scholarship Committee
                </p>
                <p className="text-foreground font-medium text-sm leading-relaxed mb-1">
                  I am not applying to study AI. I am applying to weaponise it — for the communities that need it most.
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed font-body">
                  The British Council STEM scholarship exists to fund women who will use their education to create
                  systemic change. I have already started. Brunel's MSc AI programme is where I turn these working
                  prototypes into peer-reviewed, scalable, ethically-grounded systems.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default ScholarshipSignal;
