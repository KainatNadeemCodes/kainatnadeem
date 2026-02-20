import { motion } from "framer-motion";

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
            Engineering systems that center<br className="hidden sm:block" /> on human need.
          </h2>

          <div className="space-y-5 font-body text-secondary-foreground text-base leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I work at the intersection of AI engineering and user experience — building
              intelligent systems where the technology serves the person, not the other way
              around. From healthcare decision-support engines to platforms serving
              underserved communities, my work is grounded in real constraints and real impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Through <span className="text-foreground font-medium">NextGenShe</span>, I
              founded a platform expanding educational access for women in underserved
              Pakistani communities — demonstrating that technology built with empathy
              can shift who gets opportunity.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ethical AI isn't a checkbox — it's a design constraint that makes the work better.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
