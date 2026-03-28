import { motion } from "framer-motion";
import { Quote, Linkedin, Globe, Users } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Hackathon team feedback — international, unprompted, real-time
// ─────────────────────────────────────────────────────────────────────────────
const hackathonTestimonials = [
  {
    name: "Shamsiyya Saminu Isa",
    country: "Nigeria 🇳🇬",
    role: "Global AI Hackathon · Aspire × CAYU",
    quote: "Dear, you're a true leader. We really appreciate you. The collaboration, patience, late nights, and shared belief in this idea really showed. Pathway AI wouldn't be what it is without each person's contribution.",
    initials: "SS",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    featured: true,
  },
  {
    name: "Emmaculate Mutua",
    country: "Kenya 🇰🇪",
    role: "Global AI Hackathon · Aspire × CAYU",
    quote: "You have really put in a lot of effort. Thank you for leading the team. We are grateful.",
    initials: "EM",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    featured: false,
  },
  {
    name: "Linet Kimani",
    country: "Kenya 🇰🇪",
    role: "Global AI Hackathon · Aspire × CAYU",
    quote: "You did portray your leadership skills so well. To everyone else — great teamwork and dedication to making this project a success. I have high hopes that we will emerge the best.",
    initials: "LK",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    featured: false,
  },
  {
    name: "Dadnin Saavedra",
    country: "Bolivia 🇧🇴",
    role: "Global AI Hackathon · Aspire × CAYU",
    quote: "I'm so grateful for all your support. I'm really excited to keep working with you in the future. Let's trust in ourselves and keep shining together.",
    initials: "DS",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    featured: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// LinkedIn mentoring feedback
// ─────────────────────────────────────────────────────────────────────────────
const linkedinTestimonials = [
  {
    name: "Bilal Hassan",
    role: "Software Engineering Student",
    org: "Pharmacy · Software Engineering",
    quote: "Mashallah you are doing a great job. At this time you are my inspiration.",
    context: "On Kainat's LinkedIn mentoring post",
    initials: "BH",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    name: "Addisa Baig",
    role: "BSCS Student · Data Analyst Trainee",
    org: "Interested in Data Science",
    quote: "Thank you for sharing this! This post cleared many doubts. The point about not outsourcing the project and choosing based on interest is really valuable.",
    context: "148 impressions · LinkedIn",
    initials: "AB",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
  {
    name: "Muhammad Ishtiaq Hassan",
    role: "BS Software Engineering",
    org: "University of Central Punjab",
    quote: "I found your insights very informative and plan to adopt a similar structured approach for my own upcoming steps.",
    context: "On FYP guidance post · LinkedIn",
    initials: "MI",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    name: "Mudasir Naeem",
    role: "SQA Intern · Data & AI Intern",
    org: "Apexis AI · TCF · Arcan",
    quote: "This approach turned out to be very helpful — not only for me but also for my fellow interns. I shared your post with them.",
    context: "Shared with an entire intern cohort · LinkedIn",
    initials: "MN",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">
            Community Voice
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            What People Say
          </h2>
          <p className="font-body text-muted-foreground text-sm max-w-lg leading-relaxed">
            Unprompted feedback from international teammates, students, and professionals —
            verified across borders and platforms.
          </p>
        </motion.div>

        {/* ── Block 1: Hackathon Team Feedback ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          {/* Block header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
              <Globe size={14} className="text-amber-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-amber-400 tracking-[0.2em] uppercase">
                Global AI Hackathon · Aspire Institute × CAYU · Jan 2026
              </p>
              <p className="text-foreground font-semibold text-sm">
                Randomly Assigned Group (Pakistan · Kenya · Nigeria · Bolivia) · Selected from 4,000+ Participants Globally
              </p>
            </div>
          </div>

          {/* Featured quote */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="group relative bg-card border border-amber-400/25 rounded-xl p-6 mb-4 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-amber-400/10 border border-amber-400/25 flex items-center justify-center shrink-0 font-mono font-bold text-xs text-amber-400">
                SS
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <p className="text-foreground font-semibold text-sm">Shamsiyya Saminu Isa</p>
                  <span className="font-mono text-[10px] text-amber-400/70">Nigeria 🇳🇬</span>
                </div>
                <p className="text-muted-foreground text-[10px] font-mono mb-4">
                  Global AI Hackathon · Aspire × CAYU
                </p>
                <Quote size={12} className="text-amber-400 opacity-40 mb-2" />
                <p className="text-foreground font-medium text-sm leading-relaxed">
                  "Dear, you're a true leader. We really appreciate you. The collaboration,
                  patience, late nights, and shared belief in this idea really showed.
                  Pathway AI wouldn't be what it is without each person's contribution."
                </p>
                <p className="font-mono text-[10px] mt-3 text-amber-400 opacity-70">
                  — Sent in group30|chat · Aspire × CAYU Discord · Jan 2026
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3 remaining hackathon quotes */}
          <div className="grid md:grid-cols-3 gap-4">
            {hackathonTestimonials.slice(1).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.07 }}
                whileHover={{ y: -3, transition: { duration: 0.18 } }}
                className={`group relative bg-card border border-border/50 rounded-xl p-5
                  hover:shadow-lg transition-all duration-250 hover:${t.border}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current to-transparent ${t.color}`} />

                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-full ${t.bg} border ${t.border} flex items-center justify-center font-mono font-bold text-xs ${t.color} shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-xs">{t.name}</p>
                    <p className={`font-mono text-[10px] ${t.color} opacity-80`}>{t.country}</p>
                  </div>
                </div>

                <Quote size={10} className={`${t.color} opacity-30 mb-1.5`} />
                <p className="text-secondary-foreground text-xs leading-relaxed font-body">
                  "{t.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Block 2: LinkedIn Mentoring ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Block header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-blue-400/10 border border-blue-400/20 flex items-center justify-center shrink-0">
              <Linkedin size={14} className="text-blue-400" />
            </div>
            <div>
              <p className="font-mono text-[10px] text-blue-400 tracking-[0.2em] uppercase">
                LinkedIn · Volunteer Mentoring · 2024 – Present
              </p>
              <p className="text-foreground font-semibold text-sm">
                Student & Professional Feedback · 20+ Mentored
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-5">
            {linkedinTestimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -2, transition: { duration: 0.15 } }}
                className={`group relative bg-card border border-border/50 rounded-xl p-5
                  hover:shadow-lg transition-all duration-250 hover:${t.border}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current to-transparent ${t.color}`} />

                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-full ${t.bg} border ${t.border} flex items-center justify-center font-mono font-bold text-xs ${t.color} shrink-0`}>
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-0.5">
                      <p className="text-foreground font-semibold text-xs">{t.name}</p>
                      <Linkedin size={10} className="text-blue-400 shrink-0" />
                    </div>
                    <p className="text-muted-foreground text-[10px] font-mono mb-3 leading-tight">
                      {t.role} · {t.org}
                    </p>
                    <Quote size={10} className={`${t.color} opacity-30 mb-1.5`} />
                    <p className="text-secondary-foreground text-xs leading-relaxed font-body">
                      "{t.quote}"
                    </p>
                    <p className={`font-mono text-[10px] mt-2 ${t.color} opacity-60`}>
                      — {t.context}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LinkedIn CTA */}
          <motion.a
            href="https://www.linkedin.com/in/kainat-nadeem-a9408b324"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.28 }}
            whileHover={{ y: -2, transition: { duration: 0.15 } }}
            className="flex items-center justify-between bg-card border border-border/50 rounded-xl px-5 py-4 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-400/5 transition-all duration-200 group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-400/8 border border-blue-400/20 flex items-center justify-center">
                <Users size={14} className="text-blue-400" />
              </div>
              <div>
                <p className="text-foreground font-medium text-sm">
                  Verify mentoring activity on LinkedIn
                </p>
                <p className="text-muted-foreground text-[10px] font-mono mt-0.5">
                  linkedin.com/in/kainat-nadeem-a9408b324
                </p>
              </div>
            </div>
            <Linkedin size={16} className="text-blue-400 group-hover:scale-110 transition-transform duration-200" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
