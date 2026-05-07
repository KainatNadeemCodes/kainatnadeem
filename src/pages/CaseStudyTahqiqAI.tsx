import CaseStudyLayout from "@/components/CaseStudyLayout";
import projectTahqiq from "@/assets/project-tahqiq.jpg";

const bullets = (items: string[]) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-secondary-foreground text-sm leading-relaxed">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400/70 shrink-0" />
        {item}
      </li>
    ))}
  </ul>
);

const para = (text: string) => (
  <p className="text-secondary-foreground text-sm leading-relaxed">{text}</p>
);

const sections = [
  {
    heading: "Problem Statement",
    content: (
      <div className="space-y-3">
        {para(
          "500,000 Pakistani students select a university every year. 78% rely on word-of-mouth, 40% drop out due to wrong-fit institutions, and 182+ HEC-listed universities are fake or suspended. Zero free Urdu-language counselors exist in rural Pakistan — leaving students and families making one of life's most consequential decisions almost entirely blind."
        )}
        {para(
          "The existing tools are English-only PDFs, Facebook group contradictions, and paid consultants inaccessible to most families. Bilal's father saved 22 years for this moment. The system offered him nothing reliable."
        )}
      </div>
    ),
  },
  {
    heading: "My Role in the Team",
    content: (
      <div className="space-y-3">
        {para(
          "Tahqiq AI was built by a 5-member team at the HEC Gen AI Hackathon 2026. My responsibilities were backend architecture, multi-agent pipeline integration, LLM Router implementation, and deployment."
        )}
        {bullets([
          "Designed and integrated the 5-agent LangChain pipeline — Query Agent, Data Agent, XAI Agent, Insight Agent, and PDF Serializer",
          "Built the multi-provider LLM Router with exponential backoff: HuggingFace → Grok → GPT-4o → Claude → Offline Mock",
          "Implemented provider health tracking with 60-second cooldown windows and per-provider failure counters",
          "Deployed the FastAPI backend to Hugging Face Spaces with Docker",
          "Integrated Pydantic ContractResponse schema — ensuring every output is validated before it reaches the user",
        ])}
      </div>
    ),
  },
  {
    heading: "5-Agent Architecture",
    content: bullets([
      "Agent 1 — Query Agent: Extracts marks, subject, budget, and location from Urdish/Roman Urdu/English mixed input using intent parsing",
      "Agent 2 — Data Agent: Semantic search via SentenceTransformers all-MiniLM-L6-v2 + ChromaDB HNSW index; TF-IDF fallback for offline use across 253 HEC-verified universities",
      "Agent 3 — XAI Agent: Generates a plain Urdu explanation + deterministic confidence score per recommendation, citing exact HEC CSV fields — never LLM estimates",
      "Agent 4 — Insight Agent: Roman Urdu next-step action items — application dates, scholarship documents, alternative pathways for students below the 45% HEC threshold",
      "Agent 5 — Contract Serializer: Assembles strict Pydantic ContractResponse → branded PDF export. Fields not confidently extracted are set to null — never guessed",
    ]),
  },
  {
    heading: "What Makes It Non-Trivial",
    content: bullets([
      "Bilingual NLP at production quality — handles Roman Urdu, formal Urdu, English, and 'Urdish' code-switching in a single pipeline with a rule-based fallback that works even when the LLM is offline",
      "Anti-hallucination contract system — every output is a validated Pydantic schema; confidence scores are deterministic arithmetic from HEC CSV data, not LLM probability estimates",
      "Resilient multi-LLM routing — the system degrades gracefully from frontier LLMs all the way to a deterministic offline mock response with zero single point of failure",
      "Hybrid search with Urdish-aware embeddings — ChromaDB vector search combined with metadata filtering (fee ceiling, hostel, location); Roman Urdu synonym layers ensure 'sasti university' surfaces correct results",
      "Multimodal OCR — students upload a result card photo; marks are extracted automatically via HuggingFace Llama-3.2-11B-Vision",
      "PDF 'Show Baba' export — one-click branded PDF with charts, confidence scores, and XAI explanations designed to be printed and shown to parents",
    ]),
  },
  {
    heading: "Technical Stack",
    content: bullets([
      "Frontend: Streamlit with custom glassmorphism UI, Lottie animations, CSS skeleton loaders, full dark-mode variables",
      "Backend: FastAPI + Docker → Hugging Face Spaces deployment",
      "Vector DB: ChromaDB with SentenceTransformer + TF-IDF dual-mode embeddings",
      "LLM Router: HuggingFace (Llama-3.3-70B-Instruct) → Grok (grok-2-1212) → GPT-4o → Claude Sonnet → Offline Mock",
      "Agents: LangChain — prompt templates, chain composition, output parsers",
      "Vision/OCR: Grok grok-2-vision-1212 for marksheet photo → marks extraction",
      "Data: Custom-scraped HEC CSV — 253 universities, cleaned and indexed",
    ]),
  },
  {
    heading: "Key Outcomes",
    content: bullets([
      "253 HEC-verified universities indexed — zero hallucinations by design",
      "5 coordinated AI agents completing end-to-end counseling in under 30 seconds",
      "4+ LLM providers with automatic failover — system never goes completely offline",
      "Roman Urdu, English, and code-switched Urdish queries all handled in one pipeline",
      "Live and deployed — accessible at tahqiq-ai-hec.streamlit.app",
    ]),
  },
  {
    heading: "Constraints & Challenges",
    content: bullets([
      "Building a production-quality NLP pipeline for Roman Urdu — a low-resource language with no standard tokenization — within a 24-hour hackathon sprint",
      "Designing anti-hallucination guarantees without sacrificing response quality when HEC data is incomplete",
      "Coordinating 5 agents with different failure modes while maintaining sub-30-second response times",
      "Balancing LLM reasoning power with offline fallback capability for users in low-connectivity environments",
    ]),
  },
  {
    heading: "Reflection",
    content: para(
      "Tahqiq AI taught me that real-world AI systems are not about model quality alone — they are about failure design. Every architectural decision we made was driven by the question: what happens when this breaks? The LLM router, the Pydantic contracts, the offline mock, the TF-IDF fallback — all of it exists because we were building for Bilal, whose father cannot afford for the system to be wrong. Building under that constraint in 24 hours changed how I think about responsible AI in high-stakes contexts."
    ),
  },
];

const TahqiqAICaseStudy = () => (
  <CaseStudyLayout
    title="Tahqiq AI"
    type="HEC Gen AI Hackathon 2026 · Multi-Agent AI System"
    role="Backend Developer · Multi-agent pipeline · LLM Router · Deployment"
    tools="FastAPI, LangChain, ChromaDB, Streamlit, HuggingFace, Pydantic"
    intro="Pakistan's first Explainable AI university counselor — a 5-agent pipeline that accepts Roman Urdu queries, searches 253 HEC-verified universities, and returns ranked recommendations with XAI confidence scores, Urdu explanations, and a branded PDF in under 30 seconds."
    category="Multi-Agent AI"
    categoryColor="text-indigo-400 bg-indigo-400/10 border-indigo-400/25"
    heroImage={projectTahqiq}
    sections={sections}
  />
);

export default TahqiqAICaseStudy;
