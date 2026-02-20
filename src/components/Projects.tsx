import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import projectHealth from "@/assets/project-health.jpg";
import projectNextGenShe from "@/assets/project-nextgenshe.jpg";
import projectHaven from "@/assets/project-haven.jpg";

const projects = [
  {
    title: "Smart Health Assistant",
    category: "AI Engineering",
    summary: "AI-driven symptom analysis engine with ethical decision-support routing, designed for low-tech-literacy users.",
    tech: ["Python", "Flask", "AI Algorithms", "HTML/CSS"],
    image: projectHealth,
    slug: "/case-study/smart-health-assistant",
  },
  {
    title: "NextGenShe",
    category: "Social Impact",
    summary: "Technology platform expanding educational access for women in underserved Pakistani communities through intentional design.",
    tech: ["UX Research", "Web Design", "Platform Dev"],
    image: projectNextGenShe,
    slug: "/case-study/nextgenshe",
  },
  {
    title: "Haven",
    category: "Inclusive UX",
    summary: "Sensory-friendly digital platform for neurodivergent users — calm palettes, predictable navigation, reduced cognitive load.",
    tech: ["UX Research", "Accessibility", "Inclusive Design"],
    image: projectHaven,
    slug: "/case-study/haven",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Selected Work</h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => navigate(project.slug)}
              className="bg-card border border-border/50 rounded-xl overflow-hidden cursor-pointer group hover:border-primary/20 transition-colors duration-300"
            >
              <div className="grid md:grid-cols-5">
                {/* Image */}
                <div className="md:col-span-2 relative h-52 md:h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <p className="font-mono text-primary/70 text-xs tracking-wider uppercase mb-2">{project.category}</p>
                  <h3 className="text-foreground font-bold text-xl mb-3">{project.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-md font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 text-primary text-xs font-medium group-hover:gap-2.5 transition-all duration-200">
                      View Case Study <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
