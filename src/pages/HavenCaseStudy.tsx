import CaseStudyLayout from "@/components/CaseStudyLayout";
import projectHaven from "@/assets/project-haven.jpg";
import PageTransition from "@/components/PageTransition";

const bullets = (items: string[]) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-secondary-foreground text-sm leading-relaxed">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400/70 shrink-0" />
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
        {para("Many digital products are overstimulating due to motion-heavy layouts, bright colors, and complex navigation.")}
        {para("Neurodivergent users require predictable, low-arousal environments.")}
      </div>
    ),
  },
  {
    heading: "Research Insights",
    content: bullets([
      "Predictability reduces anxiety",
      "Minimal animation improves focus",
      "High contrast improves clarity",
      "Cognitive load impacts usability",
    ]),
  },
  {
    heading: "Design Goals",
    content: bullets([
      "Reduce sensory overload",
      "Increase readability",
      "Simplify navigation",
      "Provide emotional regulation features",
    ]),
  },
  {
    heading: "Wireframes & Layout Logic",
    content: bullets([
      "Reduced navigation depth",
      "Single-focus screens",
      "Clear visual hierarchy",
    ]),
  },
  {
    heading: "Accessibility Strategy",
    content: bullets([
      "WCAG-informed contrast",
      "Reduced motion preference",
      "Touch-friendly spacing",
      "Consistent layout patterns",
    ]),
  },
  {
    heading: "Reflection",
    content: para(
      "Haven strengthened my understanding that inclusive design is foundational, not optional."
    ),
  },
];

const HavenCaseStudy = () => (
  <CaseStudyLayout
    title="Haven"
    type="Inclusive UX Concept"
    role="UX Researcher & Interface Designer"
    tools="Figma, Lovable"
    intro="Haven is a sensory-friendly digital interface designed to support neurodivergent users through calm, predictable, accessibility-first design principles."
    category="Inclusive UX"
    categoryColor="text-emerald-400 bg-emerald-400/10 border-emerald-400/25"
    heroImage={projectHaven}
    sections={sections}
  />
);

export default HavenCaseStudy;
