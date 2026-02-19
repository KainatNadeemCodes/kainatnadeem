import CaseStudyLayout from "@/components/CaseStudyLayout";
import projectHealth from "@/assets/project-health.jpg";
import PageTransition from "@/components/PageTransition";

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
    heading: "Problem",
    content: (
      <div className="space-y-3">
        {para("Many individuals lack immediate access to preliminary health guidance.")}
        {para("There is a need for an intelligent, accessible tool that can assist users with symptom-based insights while maintaining ethical AI boundaries.")}
      </div>
    ),
  },
  {
    heading: "System Design",
    content: bullets([
      "Designed rule-based AI decision logic",
      "Built structured symptom flow model",
      "Implemented backend using Flask",
      "Created responsive frontend interface",
      "Focused on clarity and guided interaction",
    ]),
  },
  {
    heading: "AI Approach",
    content: bullets([
      "Logical decision-tree modeling",
      "Input-to-output mapping",
      "Controlled response boundaries",
      "Ethical disclaimers and safety limits",
    ]),
  },
  {
    heading: "UX Considerations",
    content: bullets([
      "Simplified symptom input flow",
      "Clear result hierarchy",
      "Minimal cognitive overload",
      "Trust-building language",
    ]),
  },
  {
    heading: "Challenges",
    content: bullets([
      "Avoiding misleading medical suggestions",
      "Designing safe AI boundaries",
      "Balancing accuracy with simplicity",
    ]),
  },
  {
    heading: "Reflection",
    content: para(
      "Building this project strengthened my understanding of responsible AI design and the importance of combining system logic with user-centered interaction."
    ),
  },
];

const SmartHealthCaseStudy = () => (
  <CaseStudyLayout
    title="AI-Powered Smart Health Assistant"
    type="AI Engineering Project"
    role="AI Engineer & Full-Stack Developer"
    tools="Python, Flask, HTML/CSS"
    intro="An AI-driven healthcare assistant designed to provide symptom-based decision support using structured logic and user-centered interface design."
    category="AI Engineering"
    categoryColor="text-primary bg-primary/10 border-primary/25"
    heroImage={projectHealth}
    sections={sections}
  />
);

export default SmartHealthCaseStudy;
