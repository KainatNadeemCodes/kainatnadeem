import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectHealth from "@/assets/project-health.jpg";
import projectNextGenShe from "@/assets/project-nextgenshe.jpg";

const projects = [
  {
    title: "Smart Health Assistant",
    problem: "Healthcare decisions in underserved regions often lack data-driven support, leading to delayed or uninformed care.",
    ai: "Custom AI logic engine for symptom analysis and intelligent decision-support routing.",
    ux: "Designed for low-tech-literacy users — minimal inputs, clear guidance, zero jargon.",
    tech: ["Python", "Flask", "AI Algorithms", "HTML/CSS"],
    image: projectHealth,
    tag: "AI + Healthcare",
    demo: "#",
    github: "#",
  },
  {
    title: "NextGenShe",
    problem: "Women in conservative Pakistani communities face systemic barriers to quality education and digital literacy.",
    ai: null,
    ux: "Built around real user research — navigation, content, and access patterns designed for the target community.",
    tech: ["UX Research", "Web Design", "Platform Dev"],
    image: projectNextGenShe,
    tag: "Social Impact",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-3">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">What I've Shipped</h3>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-elevated overflow-hidden transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image */}
                <div className="md:col-span-2 relative h-56 md:h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground text-xs font-mono px-3 py-1 rounded-full backdrop-blur-sm">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-7 md:p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-foreground font-bold text-2xl mb-3">{project.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.problem}
                    </p>

                    <div className="space-y-2 mb-5">
                      {project.ai && (
                        <div className="flex items-start gap-2 text-sm">
                          <span className="text-primary font-mono text-xs mt-0.5 shrink-0">AI</span>
                          <span className="text-secondary-foreground">{project.ai}</span>
                        </div>
                      )}
                      <div className="flex items-start gap-2 text-sm">
                        <span className="text-accent font-mono text-xs mt-0.5 shrink-0">UX</span>
                        <span className="text-secondary-foreground">{project.ux}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.demo}
                      className="bg-primary text-primary-foreground text-xs font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-1.5"
                    >
                      Live Demo <ExternalLink size={12} />
                    </a>
                    <a
                      href={project.github}
                      className="glass text-foreground text-xs font-semibold px-5 py-2 rounded-lg hover:border-primary/40 transition-colors flex items-center gap-1.5"
                    >
                      <Github size={13} /> Source
                    </a>
                  </div>
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
