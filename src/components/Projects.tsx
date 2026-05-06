import { motion } from "framer-motion";
import { ExternalLink, Github, BookOpen, Trophy, Users, FlaskConical } from "lucide-react";

const projects = [
  {
    id: "tahqiq-ai",
    badge: "🏆 HEC Gen AI Hackathon 2026",
    badgeColor: "text-amber-600 bg-amber-50 border border-amber-200",
    title: "Tahqiq.ai",
    subtitle: "Pakistan's First Explainable AI University Advisor",
    tagline: "Har Student Ka Apna University Guide",
    description:
      "Built at the HEC Gen AI Hackathon 2026 in a team of 5 across 3 disciplines. Tahqiq.ai solves a crisis affecting 500,000 Pakistani students annually — university selection without access to unbiased, language-appropriate guidance. I led the backend: a 5-agent LLM pipeline with auto-failover across Llama-3.3-70B, Grok, GPT-4o, and Claude, grounded in a custom-scraped HEC CSV of 253 universities. Zero hallucinations — every recommendation cites exact HEC data fields with an Urdu confidence score.",
    highlights: [
      { icon: Trophy, label: "Hackathon", text: "HEC Gen AI Hackathon 2026 — competed against CS final-year teams from HEC-recognised universities nationwide" },
      { icon: Users, label: "Team of 5", text: "Cross-functional team: backend (me), frontend, data scraping, QA, and presentation — delivered in 24 hours" },
      { icon: FlaskConical, label: "Case Study", text: "5-agent pipeline: Query → Data (ChromaDB + TF-IDF fallback) → XAI → Insight → PDF Serializer. 30s end-to-end response. Offline mock fallback if all LLM providers fail" },
    ],
    tech: ["FastAPI", "Streamlit", "ChromaDB", "LangChain", "Hugging Face", "Llama-3.3-70B", "all-MiniLM-L6-v2", "Grok", "Pydantic", "Docker"],
    stats: [
      { value: "253", label: "HEC Universities" },
      { value: "5", label: "AI Agents" },
      { value: "30s", label: "Response Time" },
      { value: "500K+", label: "Students/Year" },
    ],
    links: [
      { label: "Live App", href: "https://tahqiq-ai-hec.streamlit.app", icon: ExternalLink },
      { label: "Frontend", href: "https://github.com/KainatNadeemCodes/Tahqiq-AI-HEC-Frontend", icon: Github },
      { label: "Backend", href: "https://huggingface.co/spaces/Universex01/Tahqiq-AI-HEC-Backend", icon: Github },
      { label: "Blog", href: "https://tahqiq-ai-hec-blog.lovable.app", icon: BookOpen },
    ],
    accentColor: "amber",
  },
  {
    id: "smart-health",
    badge: "🎓 Final Year Project",
    badgeColor: "text-indigo-600 bg-indigo-50 border border-indigo-200",
    title: "AI Smart Health Assistant",
    subtitle: "NLP-Powered Medical Triage System",
    tagline: "Built for Pakistan's underserved — where waiting costs lives",
    description:
      "An end-to-end healthcare AI system designed for communities where specialist access is delayed by months. Achieved 84%+ symptom classification accuracy across 5 severity levels using Scikit-Learn and curated symptom datasets. The system routes patients to appropriate care — from self-management to emergency — with explainable outputs a non-specialist can act on.",
    highlights: null,
    tech: ["Python", "Scikit-Learn", "NLP", "Flask", "React", "Streamlit"],
    stats: [
      { value: "84%+", label: "Classification Accuracy" },
      { value: "5", label: "Severity Levels" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/KainatNadeemCodes/health-assistant-FYP", icon: Github },
      { label: "Research Series", href: "https://www.linkedin.com/pulse/im-building-ai-health-assistant-pakistan-because-waiting-nadeem--izerf", icon: BookOpen },
    ],
    accentColor: "indigo",
  },
  {
    id: "nextgenShe",
    badge: "👩‍💻 Social Impact",
    badgeColor: "text-rose-600 bg-rose-50 border border-rose-200",
    title: "NextGenShe",
    subtitle: "STEM Education Platform for Women",
    tagline: "Bridging the gender gap in Pakistan's tech sector",
    description:
      "Co-founded and led development of a platform expanding STEM educational access to 20+ women across underserved communities in Pakistan. Paired with mentorship tracks and scholarship matching for CS programs.",
    highlights: null,
    tech: ["React", "Node.js", "Firebase", "Vercel"],
    stats: [
      { value: "20+", label: "Women Reached" },
    ],
    links: [
      { label: "Live Site", href: "https://women-edu-first.vercel.app", icon: ExternalLink },
      { label: "Frontend", href: "https://github.com/KainatNadeemCodes/Women-Edu-First-frontend", icon: Github },
      { label: "Backend", href: "https://github.com/KainatNadeemCodes/Women-Edu-First-backend", icon: Github },
    ],
    accentColor: "rose",
  },
  {
    id: "haven",
    badge: "♿ Accessibility",
    badgeColor: "text-teal-600 bg-teal-50 border border-teal-200",
    title: "Haven",
    subtitle: "Neuro-Inclusive Safe Space Platform",
    tagline: "Safety tools designed around cognitive and sensory differences",
    description:
      "A WCAG-compliant platform designed around the needs of neurodivergent individuals. Features real-time SOS alerts, calming UI modes, and accessible design — built after user research with neurodivergent community members.",
    highlights: null,
    tech: ["React", "Node.js", "WebSockets", "Vercel"],
    stats: [],
    links: [
      { label: "Live Site", href: "https://safespacehaven.vercel.app", icon: ExternalLink },
      { label: "Frontend", href: "https://github.com/KainatNadeemCodes/Haven_Frontend", icon: Github },
      { label: "Backend", href: "https://github.com/KainatNadeemCodes/Haven_Backend", icon: Github },
    ],
    accentColor: "teal",
  },
];

const accentMap: Record<string, { border: string; badge: string; stat: string; highlight: string; link: string }> = {
  amber: {
    border: "border-amber-200 hover:border-amber-400",
    badge: "text-amber-700",
    stat: "text-amber-600",
    highlight: "bg-amber-50 border-amber-100",
    link: "hover:text-amber-600",
  },
  indigo: {
    border: "border-indigo-100 hover:border-indigo-300",
    badge: "text-indigo-700",
    stat: "text-indigo-600",
    highlight: "bg-indigo-50 border-indigo-100",
    link: "hover:text-indigo-600",
  },
  rose: {
    border: "border-rose-100 hover:border-rose-300",
    badge: "text-rose-700",
    stat: "text-rose-600",
    highlight: "bg-rose-50 border-rose-100",
    link: "hover:text-rose-600",
  },
  teal: {
    border: "border-teal-100 hover:border-teal-300",
    badge: "text-teal-700",
    stat: "text-teal-600",
    highlight: "bg-teal-50 border-teal-100",
    link: "hover:text-teal-600",
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-primary text-xs tracking-[0.2em] uppercase mb-3">Selected Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Systems Built With Purpose
          </h2>
          <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xl">
            Each project started with a real problem — healthcare access, university guidance, gender inequality, neurodivergent safety. The technical decisions followed from the human ones.
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => {
            const accent = accentMap[project.accentColor];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-card border ${accent.border} rounded-2xl p-7 transition-all duration-200`}
              >
                {/* Badge */}
                <span className={`inline-block text-xs font-mono px-2.5 py-1 rounded-full mb-4 ${project.badgeColor}`}>
                  {project.badge}
                </span>

                {/* Title block */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground font-mono mt-0.5">{project.subtitle}</p>
                  <p className="text-xs text-muted-foreground/70 italic mt-1">{project.tagline}</p>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Three-angle highlights (Tahqiq AI only) */}
                {project.highlights && (
                  <div className="grid gap-3 mb-5">
                    {project.highlights.map((h) => {
                      const Icon = h.icon;
                      return (
                        <div
                          key={h.label}
                          className={`flex gap-3 items-start border rounded-xl p-3 ${accent.highlight}`}
                        >
                          <div className="mt-0.5">
                            <Icon size={14} className={accent.badge} />
                          </div>
                          <div>
                            <p className={`text-xs font-mono font-semibold ${accent.badge} mb-0.5`}>{h.label}</p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{h.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Stats */}
                {project.stats.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-5">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <p className={`text-lg font-bold font-mono ${accent.stat}`}>{s.value}</p>
                        <p className="text-[10px] text-muted-foreground font-mono">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 bg-muted text-muted-foreground rounded-full border border-border/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground ${accent.link} transition-colors duration-150`}
                      >
                        <Icon size={12} />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
