import CaseStudyLayout from "@/components/CaseStudyLayout";
import projectHealth from "@/assets/project-health.jpg";

const bullets = (items: string[]) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-secondary-foreground text-sm leading-relaxed">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
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
        {para("Many individuals lack immediate access to preliminary health guidance. There is a need for an intelligent, accessible tool that provides symptom-based insights while maintaining ethical AI boundaries and human oversight.")}
      </div>
    ),
  },
  {
    heading: "System Architecture",
    content: bullets([
      "Structured decision-routing logic using rule-based AI",
      "Input-to-output mapping with controlled response boundaries",
      "Backend implementation using Python and Flask",
      "Responsive frontend for guided symptom input flow",
      "Modular system design for maintainability",
    ]),
  },
  {
    heading: "Decision Logic & Model Design",
    content: bullets([
      "Logical decision-tree modeling for symptom classification",
      "Structured data preprocessing and validation",
      "Controlled output boundaries to prevent misleading results",
      "Ethical disclaimers and safety constraints embedded in logic",
    ]),
  },
  {
    heading: "Human Oversight Considerations",
    content: bullets([
      "Designed to support — not replace — clinical judgement",
      "Clear escalation pathways for high-severity inputs",
      "Transparent reasoning in result presentation",
      "Trust-building language and safety-first framing",
    ]),
  },
  {
    heading: "Constraints & Challenges",
    content: bullets([
      "Balancing accuracy with simplicity for low-tech-literacy users",
      "Designing safe AI boundaries without overpromising capability",
      "Handling ambiguous symptom inputs with structured fallbacks",
    ]),
  },
  {
    heading: "Reflection",
    content: para(
      "This project strengthened my understanding of responsible AI design — the importance of combining structured decision logic with user-centered interaction and clear ethical boundaries."
    ),
  },
];

const SmartHealthCaseStudy = () => (
  <CaseStudyLayout
    title="AI-Powered Smart Health Assistant"
    type="AI Engineering Project"
    role="AI Engineer & Full-Stack Developer"
    tools="Python, Flask, HTML/CSS"
    intro="An AI-driven symptom analysis system using structured decision-routing logic, ethical constraints, and user-centered interface design."
    category="AI Engineering"
    categoryColor="text-primary bg-primary/10 border-primary/25"
    heroImage={projectHealth}
    sections={sections}
  />
);

export default SmartHealthCaseStudy;
