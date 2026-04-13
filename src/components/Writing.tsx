import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Linkedin, Clock, Tag, ExternalLink, Brain } from "lucide-react";

const articles = [
  {
    title: "Designing Digital Empowerment: How AI Can Transform Women's Education in Pakistan",
    summary:
      "When I told my father I wanted to study medicine, he said no — not because I wasn't capable, but because I was a girl. This article explores how AI can create the open door that millions of women in Pakistan are still waiting for.",
    url: "https://www.linkedin.com/pulse/designing-digital-empowerment-how-ai-can-transform-womens-nadeem--bjbef",
    platform: "LinkedIn Article",
    platformIcon: Linkedin,
    platformColor: "text-blue-400",
    platformBg: "bg-blue-400/10",
    platformBorder: "border-blue-400/20",
    readTime: "7 min read",
    tags: ["AI for Good", "Women in STEM", "Pakistan", "EdTech", "Social Impact"],
    featured: true,
    date: "2026",
    accentColor: "primary",
    highlight: "Personal story · Research-backed · P@SHA data · NextGenShe · PathwayAI",
    border: "border-primary/20",
    borderHover: "hover:border-primary/40",
    glow: "hover:shadow-primary/10",
    via: "via-primary/50",
    cta: "Read on LinkedIn",
    type: "single",
  },
  {
    title: "Building Responsible AI for Pakistan's Health",
    summary:
      "A 7-part research series documenting the full journey of building the Smart Health Assistant — from first principles and ethical frameworks, through architecture decisions and real-world testing, to the questions that remain unanswered.",
    url: "#",
    platform: "LinkedIn · Series · 4 of 7 published",
    platformIcon: Brain,
    platformColor: "text-violet-400",
    platformBg: "bg-violet-400/10",
    platformBorder: "border-violet-400/20",
    readTime: "~45 min total",
    tags: ["Responsible AI", "Healthcare AI", "Pakistan", "FastAPI", "NLP", "Ethics"],
    featured: false,
    date: "2026",
    accentColor: "violet",
    highlight: "Architecture · NLP · Ethical constraints · Decision routing · Real-world testing",
    border: "border-violet-400/20",
    borderHover: "hover:border-violet-400/40",
    glow: "hover:shadow-violet-400/10",
    via: "via-violet-400/50",
    cta: null,
    type: "series",
  },
  {
    title: "Haven Blog — How Inclusive Design Began",
    summary:
      "A personal journal exploring how a moment of empathy sparked a research-driven design project for neurodivergent users. Eight posts covering cognitive load theory, sensory design, WCAG principles, and the human story behind Haven.",
    url: "https://havenblog.lovable.app",
    platform: "Haven Blog · 8 Posts",
    platformIcon: BookOpen,
    platformColor: "text-emerald-400",
    platformBg: "bg-emerald-400/10",
    platformBorder: "border-emerald-400/20",
    readTime: "~30 min total",
    tags: ["UX Research", "Accessibility", "Neurodiversity", "HCD", "Inclusive Design"],
    featured: false,
    date: "2026",
    accentColor: "emerald",
    highlight: "Personal observation → Research → Design decisions → Live platform",
    border: "border-emerald-400/20",
    borderHover: "hover:border-emerald-400/40",
    glow: "hover:shadow-emerald-400/10",
    via: "via-emerald-400/50",
    cta: "Read the Blog",
    type: "single",
  },
];

const smartHealthParts = [
  {
    num: "01",
    title: "Why I Started Building This",
    excerpt: "The question that started everything — why build an AI health assistant for Pakistan when nothing else existed.",
    url: "https://www.linkedin.com/pulse/im-building-ai-health-assistant-pakistan-because-waiting-nadeem--izerf",
    published: true,
  },
  {
    num: "02",
    title: "Before I Wrote a Single Line of Code",
    excerpt: "The ethical and research questions I had to answer before touching a keyboard — and why they shaped every decision that followed.",
    url: "https://www.linkedin.com/pulse/before-i-wrote-single-line-code-had-answer-questions-kainat-nadeem--jxtnf",
    published: true,
  },
  {
    num: "03",
    title: "When the System Started Becoming Real",
    excerpt: "Where idea became architecture — the decisions that turned a concept into a working system.",
    url: "https://www.linkedin.com/pulse/where-system-stopped-being-idea-started-becoming-real-kainat-nadeem--a5rpf",
    published: true,
  },
  {
    num: "04",
    title: "Where the System Met Reality",
    excerpt: "When the prototype was tested and reality pushed back — the failures, the fixes, and what they revealed.",
    url: "https://www.linkedin.com/pulse/where-system-met-reality-pushed-back-series-building-ai-nadeem--i6s7f",
    published: true,
  },
  {
    num: "05",
    title: "Final Deliverables",
    excerpt: "Coming soon",
    url: null,
    published: false,
  },
  {
    num: "06",
    title: "Ethical Constraints in Practice",
    excerpt: "Coming soon",
    url: null,
    published: false,
  },
  {
    num: "07",
    title: "What I Learned — and Where It Goes Next",
    excerpt: "Coming soon",
    url: null,
    published: false,
  },
];

// Haven blog post previews
const havenPosts = [
  {
    num: "01",
    title: "How Haven Began",
    excerpt: "It started with watching someone else's world — a child named Mert, and a moment that changed how I think about design.",
  },
  {
    num: "02",
    title: "Designing for Minds That Feel Differently",
    excerpt: "Research in cognitive psychology shows excessive motion triggers anxiety. Most platforms are built in exactly the wrong way.",
  },
  {
    num: "03",
    title: "The World Is Not Designed for Every Mind",
    excerpt: "15–20% of the global population is neurodivergent. Almost 1 in 5. And yet digital spaces are built for only one kind of mind.",
  },
  {
    num: "04",
    title: "More Posts",
    excerpt: "5 more posts covering WCAG principles, cognitive load theory, sensory-friendly colour palettes, and the design process behind Haven.",
  },
];

const Writing = () => {
  return (
    <section id="writing" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">
            Writing & Research
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Published Writing
          </h2>
          <p className="font-body text-muted-foreground text-sm max-w-lg leading-relaxed">
            Research-driven writing on AI ethics, women's education, and inclusive design —
            written personally, not generated.
          </p>
        </motion.div>

        {/* Article cards */}
        <div className="space-y-6">
          {articles.map((article, i) => {
            const PlatformIcon = article.platformIcon;
            return (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={`group relative bg-card border ${article.border} rounded-2xl overflow-hidden ${article.borderHover} hover:shadow-2xl ${article.glow} transition-all duration-300`}
                >
                  {/* Top accent */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${article.via} to-transparent`} />

                  {/* Featured badge */}
                  {article.featured && (
                    <div className="absolute top-5 right-5 z-10">
                      <span className="font-mono text-[10px] px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary tracking-widest uppercase">
                        ★ Featured
                      </span>
                    </div>
                  )}

                  <div className="p-7 md:p-9">

                    {/* Platform + meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className={`inline-flex items-center gap-1.5 ${article.platformBg} border ${article.platformBorder} ${article.platformColor} text-[11px] font-mono px-3 py-1.5 rounded-full`}>
                        <PlatformIcon size={11} />
                        {article.platform}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-muted-foreground text-[11px] font-mono">
                        <Clock size={11} />
                        {article.readTime}
                      </span>
                      <span className="text-muted-foreground text-[11px] font-mono">· {article.date}</span>

                      {/* Series in progress badge */}
                      {article.type === "series" && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-full bg-violet-400/10 border border-violet-400/20 text-violet-400">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400"></span>
                          </span>
                          Series in progress
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-foreground font-bold text-xl md:text-2xl mb-4 leading-snug pr-20">
                      {article.title}
                    </h3>

                    {/* Summary as pull quote */}
                    <p className="font-body text-secondary-foreground text-sm leading-relaxed mb-5 border-l-2 border-current pl-4 italic"
                       style={{ borderColor: article.type === "series" ? '#a78bfa' : article.platformColor.replace('text-', '').includes('emerald') ? '#34d399' : '#3b82f6' }}>
                      "{article.summary}"
                    </p>

                    {/* Smart Health series parts */}
                    {article.type === "series" && (
                      <div className="grid sm:grid-cols-2 gap-2 mb-5">
                        {smartHealthParts.map((part) => (
                          <div
                            key={part.num}
                            className={`border rounded-lg p-3 transition-colors duration-200 ${
                              part.published
                                ? "bg-violet-400/5 border-violet-400/20 hover:bg-violet-400/10"
                                : "bg-secondary/20 border-border/20 opacity-50"
                            }`}
                          >
                            <div className="flex items-baseline gap-2 mb-1">
                              <span className={`font-mono text-[10px] ${part.published ? "text-violet-400" : "text-muted-foreground"}`}>
                                {part.num}
                              </span>
                              {part.published && part.url ? (
                                <a
                                  href={part.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-foreground font-medium text-xs hover:text-violet-400 transition-colors duration-150 inline-flex items-center gap-1 group/link"
                                >
                                  {part.title}
                                  <ArrowUpRight size={10} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                </a>
                              ) : (
                                <p className="text-muted-foreground font-medium text-xs">{part.title}</p>
                              )}
                            </div>
                            <p className="text-muted-foreground text-[11px] leading-relaxed font-body">
                              {part.excerpt}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Haven posts preview */}
                    {article.type === "single" && !article.featured && (
                      <div className="grid sm:grid-cols-2 gap-2 mb-5">
                        {havenPosts.map((post) => (
                          <div
                            key={post.num}
                            className="bg-secondary/40 border border-border/30 rounded-lg p-3"
                          >
                            <div className="flex items-baseline gap-2 mb-1">
                              <span className="font-mono text-[10px] text-emerald-400 opacity-70">{post.num}</span>
                              <p className="text-foreground font-medium text-xs">{post.title}</p>
                            </div>
                            <p className="text-muted-foreground text-[11px] leading-relaxed font-body">
                              {post.excerpt}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlight strip */}
                    <div className={`${article.platformBg} border ${article.platformBorder} rounded-lg px-4 py-3 mb-5`}>
                      <p className={`font-mono ${article.platformColor} text-[10px] tracking-[0.15em] uppercase mb-1`}>
                        What's inside
                      </p>
                      <p className="text-muted-foreground text-xs font-mono">{article.highlight}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border border-border/40"
                        >
                          <Tag size={9} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    {article.cta && (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${article.platformColor} hover:opacity-80 transition-opacity duration-200 cursor-pointer`}
                      >
                        {article.cta}
                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    )}

                    {/* Series read links row */}
                    {article.type === "series" && (
                      <div className="flex flex-wrap gap-3">
                        {smartHealthParts.filter(p => p.published && p.url).map((part) => (
                          <a
                            key={part.num}
                            href={part.url!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-violet-400 hover:opacity-70 transition-opacity duration-150"
                          >
                            Part {part.num}
                            <ArrowUpRight size={10} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom bar */}
                  <div className="border-t border-border/30 bg-card/50 px-7 md:px-9 py-3 flex items-center justify-between">
                    <p className="text-muted-foreground text-[11px] font-mono truncate">
                      {article.type === "series" ? "linkedin.com/in/kainat-nadeem · 4 articles published" : article.url}
                    </p>
                    <ExternalLink size={12} className="text-muted-foreground shrink-0 ml-2" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active research note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-8 bg-card border border-border/40 rounded-xl px-6 py-4"
        >
          <div className="flex items-start gap-3">
            {/* Pulsing active indicator */}
            <div className="flex items-center gap-2 shrink-0 mt-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
            </div>
            <div>
              <p className="text-foreground font-medium text-sm mb-1">
                Research in Progress
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed font-body">
                Two active writing threads: the Smart Health Assistant series (4 of 7 published, continuing as the project progresses)
                and the Haven blog (growing with new posts on WCAG principles, sensory-friendly colour systems, and user testing insights).
                Both platforms continue to evolve alongside the research.
              </p>
              <p className="font-mono text-[10px] text-muted-foreground/60 mt-2">
                All writing is original · Not AI-generated · Updated regularly
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Writing;
