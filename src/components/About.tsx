import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Who I Am</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            AI Engineer. UX Thinker. Impact Builder.
          </h3>

          <div className="space-y-6 font-body text-secondary-foreground text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I engineer AI-powered systems designed around the people who use them. My work
              bridges intelligent automation with intentional UX — from building a
              healthcare decision-support engine to architecting platforms that serve
              real communities with real constraints.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Through <span className="text-primary font-semibold">NextGenShe</span>, I
              founded a platform expanding educational access for women in underserved
              Pakistani communities — proof that technology, when built with empathy, can
              shift who gets opportunity.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I'm drawn to the hard problems at the intersection of machine intelligence
              and human need. Ethical AI isn't a checkbox — it's a design constraint
              that makes the work better.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
