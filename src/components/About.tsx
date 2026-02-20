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
            Building AI systems grounded in<br className="hidden sm:block" /> technical rigour and social responsibility.
          </h2>

          <div className="space-y-5 font-body text-secondary-foreground text-base leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I am a final-year Software Engineering student with a focused interest in
              artificial intelligence — particularly decision-support systems, responsible AI,
              and access-focused technology. My work spans AI system design, full-stack
              development, and UX research, always oriented toward real-world constraints
              and measurable impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Through projects like an AI-powered health assistant and a platform expanding
              educational access for women in underserved communities, I have developed
              practical experience in system architecture, ethical AI constraints, and
              human-centered design methodology.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-foreground font-medium"
            >
              I am preparing to pursue an MSc in Artificial Intelligence to deepen my
              expertise in machine learning, intelligent systems, and ethical AI development.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
