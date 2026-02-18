import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Section {
  heading: string;
  content: ReactNode;
}

interface CaseStudyLayoutProps {
  title: string;
  type: string;
  role: string;
  tools: string;
  intro: string;
  category: string;
  categoryColor: string;
  heroImage: string;
  sections: Section[];
}

const CaseStudyLayout = ({
  title,
  type,
  role,
  tools,
  intro,
  category,
  categoryColor,
  heroImage,
  sections,
}: CaseStudyLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back nav */}
      <div className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto max-w-4xl px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
          >
            <ArrowLeft size={15} />
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-block text-xs font-mono px-3 py-1 rounded-full border mb-3 ${categoryColor}`}
            >
              {category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-foreground leading-tight"
            >
              {title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Meta strip */}
      <div className="border-b border-border/40 bg-card/30">
        <div className="container mx-auto max-w-4xl px-6 py-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { label: "Type", value: type },
              { label: "Role", value: role },
              { label: "Tools", value: tools },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-foreground font-medium">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-6 py-16 space-y-16">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed border-l-2 border-primary/60 pl-5">
            {intro}
          </p>
        </motion.div>

        {/* Sections */}
        {sections.map((section, i) => (
          <motion.div
            key={section.heading}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-primary text-xs tracking-widest uppercase">
                0{i + 1}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                {section.heading}
              </h2>
            </div>
            <div className="pl-8 border-l border-border/40">
              {section.content}
            </div>
          </motion.div>
        ))}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="pt-4 border-t border-border/40"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to All Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyLayout;
