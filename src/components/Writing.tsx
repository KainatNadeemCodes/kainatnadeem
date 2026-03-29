import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Linkedin, Clock, Tag } from "lucide-react";

const articles = [
  {
    title: "Designing Digital Empowerment: How AI Can Transform Women's Education in Pakistan",
    summary:
      "When I told my father I wanted to study medicine, he said no — not because I wasn't capable, but because I was a girl. This article explores how AI can create the open door that millions of women in Pakistan are still waiting for.",
    url: "https://www.linkedin.com/pulse/designing-digital-empowerment-how-ai-can-transform-womens-nadeem--bjbef",
    platform: "LinkedIn Article",
    readTime: "7 min read",
    tags: ["AI for Good", "Women in STEM", "Pakistan", "EdTech", "Social Impact"],
    featured: true,
    date: "2026",
    highlight:
      "Personal story · Research-backed · P@SHA data · NextGenShe · PathwayAI",
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
            Published Articles
          </h2>
          <p className="font-body text-muted-foreground text-sm max-w-lg leading-relaxed">
            Research-driven writing at the intersection of AI, women's education,
            and technology for underserved communities.
          </p>
        </motion.div>

        {/* Featured Article Card */}
        {articles.map((article, i) => (
          <motion.a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative block bg-card border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer mb-6"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* Featured badge */}
            {article.featured && (
              <div className="absolute top-5 right-5 z-10">
                <span className="font-mono text-[10px] px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary tracking-widest uppercase">
                  ★ Featured
                </span>
              </div>
            )}

            <div className="p-8 md:p-10">

              {/* Platform + date + read time */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-blue-400/10 border border-blue-400/20 text-blue-300 text-[11px] font-mono px-3 py-1.5 rounded-full">
                  <Linkedin size={11} />
                  {article.platform}
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground text-[11px] font-mono">
                  <Clock size={11} />
                  {article.readTime}
                </span>
                <span className="text-muted-foreground text-[11px] font-mono">
                  · {article.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-foreground font-bold text-xl md:text-2xl mb-4 leading-snug group-hover:text-primary transition-colors duration-200 pr-24">
                {article.title}
              </h3>

              {/* Opening quote / summary */}
              <p className="font-body text-secondary-foreground text-sm leading-relaxed mb-6 border-l-2 border-primary/40 pl-4 italic">
                "{article.summary}"
              </p>

              {/* Highlight strip */}
              <div className="bg-primary/5 border border-primary/15 rounded-lg px-4 py-3 mb-6">
                <p className="font-mono text-primary text-[10px] tracking-[0.15em] uppercase mb-1">
                  What's inside
                </p>
                <p className="text-muted-foreground text-xs font-mono">
                  {article.highlight}
                </p>
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
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  Read on LinkedIn
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </span>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-border/30 bg-card/50 px-8 md:px-10 py-3 flex items-center justify-between">
              <p className="text-muted-foreground text-[11px] font-mono">
                linkedin.com/pulse/designing-digital-empowerment...
              </p>
              <BookOpen size={13} className="text-muted-foreground" />
            </div>
          </motion.a>
        ))}

        {/* Coming soon note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-border/30" />
          <p className="font-mono text-muted-foreground/50 text-[10px] tracking-[0.2em] uppercase">
            More articles coming soon
          </p>
          <div className="flex-1 h-px bg-border/30" />
        </motion.div>

      </div>
    </section>
  );
};

export default Writing;
