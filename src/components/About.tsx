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
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Professional Summary</h3>
          <div className="glass rounded-2xl p-8 md:p-10">
            <p className="text-secondary-foreground leading-relaxed text-lg">
              Software engineer with expertise in developing AI-driven applications and impactful
              digital solutions. Proven track record in creating healthcare software and leading projects
              like <span className="text-primary font-semibold">NextGenShe</span>. Selected for prestigious international leadership programs,
              demonstrating commitment to professional growth. Currently pursuing a BS in Software Engineering
              at Virtual University of Pakistan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
