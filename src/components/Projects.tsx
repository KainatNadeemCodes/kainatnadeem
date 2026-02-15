import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectHealth from "@/assets/project-health.jpg";
import projectNextGenShe from "@/assets/project-nextgenshe.jpg";

const projects = [
  {
    title: "AI-Powered Smart Health Assistant",
    description:
      "An intelligent system assisting users with symptom logic and decision support. Integrates user-centered design and ethical AI principles.",
    tech: ["Python", "Flask", "HTML/CSS", "AI Algorithms"],
    image: projectHealth,
    tag: "Final Year Project",
  },
  {
    title: "NextGenShe",
    description:
      "An online platform providing accessible education for women in conservative communities in Pakistan. Social impact through technology.",
    tech: ["UX Research", "Web Design", "Platform Development"],
    image: projectNextGenShe,
    tag: "Social Impact",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Featured Work</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/40 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-mono px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-foreground font-semibold text-xl mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
