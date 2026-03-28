import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const pillars = [
  { label: "AI Engineering",       detail: "Decision systems · Ethical constraints · FastAPI + Scikit-Learn" },
  { label: "Frontend Development", detail: "React · TypeScript · Tailwind · Accessible interfaces"           },
  { label: "UX Research & Design", detail: "HCD · WCAG · Figma · Cognitive load theory"                     },
  { label: "Social Impact Tech",   detail: "NextGenShe · Haven · SheSphere · Underserved communities"        },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
            Building AI systems grounded in<br className="hidden sm:block" />
            technical rigour and social responsibility.
          </h2>
        </motion.div>

        {/* ── Personal Origin Story ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="relative bg-card border border-primary/20 rounded-xl p-6 mb-8 overflow-hidden"
        >
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

          {/* Quote icon */}
          <div className="w-8 h-8 rounded-lg bg-primary/8 border border-primary/20 flex items-center justify-center mb-5">
            <Quote size={14} className="text-primary" />
          </div>

          {/* The story */}
          <div className="space-y-4 font-body">

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-foreground text-base leading-relaxed font-medium"
            >
              I grew up in a conservative household where the expectation for girls was simple:
              stay home, marry young, and leave ambition at the door.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-secondary-foreground text-sm leading-relaxed"
            >
              I was a top-performing medical student — medals, trophies, marks that should have
              opened any door. When I told my father I wanted to pursue medicine, he said no.
              Not because I wasn't capable. Because I was a girl, and our society didn't allow
              girls to study far from home. My achievements, in that moment, counted for nothing.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="text-secondary-foreground text-sm leading-relaxed"
            >
              Most people in that situation give up. I made a different decision.
              I chose Software Engineering at Virtual University — a distance-learning institution —
              because it meant I could study without leaving home. I secured a top CGPA, earned
              a 6-year provincial merit scholarship, received a government laptop grant, and proved
              — quietly, persistently — that boundaries are not permanent.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="text-secondary-foreground text-sm leading-relaxed"
            >
              Every project I have built since carries that experience.
              NextGenShe exists because I know what it feels like to have your education
              restricted by your postcode and your gender.
              Haven exists because I understand what it means to need a space that feels safe.
              SheSphere exists because protection should never depend on who is nearby.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="text-foreground text-sm leading-relaxed font-medium border-l-2 border-primary/50 pl-4"
            >
              My parents, who once said no, are now willing to send me abroad for higher studies.
              That change did not happen by accident. It happened because I built proof they
              could not argue with. I intend to do the same for every girl in Pakistan who
              is still waiting for permission she should never have needed.
            </motion.p>

          </div>
        </motion.div>

        {/* ── Credentials summary ── */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body text-muted-foreground text-sm leading-relaxed mb-10"
        >
          Final-year Software Engineering student (CGPA 3.93 · Top 1%) at Virtual University
          of Pakistan. 6-year PEEF Merit Scholar. Alumna of the Aspire Institute Leadership
          Program (Harvard Faculty). Founder of NextGenShe. Preparing to pursue an MSc in
          Artificial Intelligence — to build the systems that make education, healthcare, and
          safety accessible for every woman who has ever been told to choose less.
        </motion.p>

        {/* ── Pillar grid ── */}
        <div className="grid sm:grid-cols-2 gap-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.22 + i * 0.07 }}
              whileHover={{ x: 3, transition: { duration: 0.15 } }}
              className="group flex items-start gap-3 bg-card border border-border/50 rounded-lg p-4 hover:border-primary/25 transition-all duration-200"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 group-hover:bg-primary transition-colors duration-200" />
              <div>
                <p className="text-foreground font-medium text-sm mb-0.5">{pillar.label}</p>
                <p className="text-muted-foreground text-xs font-mono leading-relaxed">{pillar.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
