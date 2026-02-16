import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Who I Am</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">AI Engineer · UX Strategist · Impact Builder</h3>
          <div className="glass rounded-2xl p-8 md:p-10">
            <p className="text-secondary-foreground leading-relaxed text-lg">
              I build AI-powered products that put people first. From designing intelligent health systems
              to founding <span className="text-primary font-semibold">NextGenShe</span> — a platform expanding
              educational access for women in underserved communities — my work sits at the intersection of
              machine intelligence, thoughtful UX, and real-world impact. I bring a rigorous engineering
              mindset to every project, paired with a deep belief that technology should serve the people
              who need it most.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
