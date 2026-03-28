import { motion } from "framer-motion";
import { Quote, Linkedin, Users } from "lucide-react";

const testimonials = [
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
    role: "BS Software Engineering Student",
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
  {
    name: "Zahid Hussain",
    role: "Personal Brand Builder · Founder",
    org: "Helping Busy Founders",
    quote: "Thank you so much for sharing these valuable insights and your experience. These valuable insights help me a lot.",
    context: "On Kainat's experience post · LinkedIn",
    initials: "ZH",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
];

const stats = [
  { value: "20+",  label: "Students mentored" },
  { value: "148",  label: "Post impressions"   },
  { value: "5+",   label: "Countries reached"  },
  { value: "∞",    label: "Posts shared forward"},
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
          className="mb-12"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Community Voice</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            What People Say
          </h2>
          <p className="font-body text-muted-foreground text-sm max-w-lg leading-relaxed">
            Real feedback from students, interns, and professionals whose work was shaped
            by Kainat's mentoring, writing, and guidance — verified on LinkedIn.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-4 gap-3 mb-10"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-card border border-border/50 rounded-xl p-4 text-center"
            >
              <p className="text-foreground font-bold text-xl font-mono mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-[10px] font-mono leading-tight">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className={`group relative bg-card border border-border/50 rounded-xl p-5
                hover:border-opacity-60 hover:shadow-lg transition-all duration-250
                hover:${t.border}
                ${i === 0 ? "md:col-span-2" : ""}
              `}
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-px rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-current to-transparent ${t.color}`} />

              <div className="flex items-start gap-4">

                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full ${t.bg} border ${t.border} flex items-center justify-center shrink-0 font-mono font-bold text-xs ${t.color}`}>
                  {t.initials}
                </div>

                <div className="flex-1 min-w-0">

                  {/* Name + role */}
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <p className="text-foreground font-semibold text-sm">{t.name}</p>
                    <div className="flex items-center gap-1">
                      <Linkedin size={10} className="text-blue-400" />
                      <span className="text-muted-foreground text-[10px] font-mono">LinkedIn</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-[10px] font-mono mb-4 leading-tight">
                    {t.role} · {t.org}
                  </p>

                  {/* Quote */}
                  <div className="relative">
                    <Quote size={12} className={`${t.color} opacity-40 absolute -top-1 -left-1`} />
                    <p className={`font-body text-sm leading-relaxed pl-4 ${i === 0 ? "text-foreground font-medium" : "text-secondary-foreground"}`}>
                      {t.quote}
                    </p>
                  </div>

                  {/* Context badge */}
                  <p className={`font-mono text-[10px] mt-3 ${t.color} opacity-70`}>
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
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ y: -2, transition: { duration: 0.15 } }}
          className="flex items-center justify-between bg-card border border-border/50 rounded-xl px-5 py-4 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-400/5 transition-all duration-200 group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-400/8 border border-blue-400/20 flex items-center justify-center">
              <Users size={15} className="text-blue-400" />
            </div>
            <div>
              <p className="text-foreground font-medium text-sm">See full mentoring activity on LinkedIn</p>
              <p className="text-muted-foreground text-[10px] font-mono mt-0.5">
                linkedin.com/in/kainat-nadeem-a9408b324
              </p>
            </div>
          </div>
          <Linkedin size={16} className="text-blue-400 group-hover:scale-110 transition-transform duration-200" />
        </motion.a>

      </div>
    </section>
  );
};

export default Testimonials;
