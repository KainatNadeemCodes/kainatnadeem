import CaseStudyLayout from "@/components/CaseStudyLayout";
import projectHaven from "@/assets/project-haven.jpg";

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
    heading: "Problem Statement",
    content: (
      <div className="space-y-3">
        {para("Many digital products create overstimulating environments through motion-heavy layouts, high-contrast colours, and complex navigation. Neurodivergent users require predictable, low-arousal interfaces designed around cognitive load management.")}
      </div>
    ),
  },
  {
    heading: "Accessibility Research",
    content: bullets([
      "Investigated cognitive load theory as applied to interface design",
      "Analysed the relationship between sensory input and user anxiety",
      "Reviewed WCAG guidelines for motion, contrast, and interaction patterns",
      "Studied neurodivergent user behaviour and environmental preferences",
    ]),
  },
  {
    heading: "Inclusive System Design Principles",
    content: bullets([
      "Single-focus screen architecture to reduce cognitive overload",
      "Reduced navigation depth with predictable layout patterns",
      "Motion-reduced interaction design respecting user preferences",
      "Clear visual hierarchy with consistent spacing and typography",
    ]),
  },
  {
    heading: "Structured UX Decision-Making",
    content: bullets([
      "Design decisions mapped to specific accessibility research findings",
      "Touch-friendly spacing derived from motor accessibility guidelines",
      "Colour palette constrained by WCAG contrast requirements",
      "Emotional regulation features informed by behavioural research",
    ]),
  },
  {
    heading: "Constraints & Methodology",
    content: bullets([
      "Balancing aesthetic quality with strict accessibility constraints",
      "Designing for diverse neurodivergent needs within a single system",
      "Validating design decisions against cognitive load metrics",
    ]),
  },
  {
    heading: "Reflection",
    content: para(
      "Haven deepened my understanding that inclusive design is a systematic discipline — requiring structured research, constrained decision-making, and continuous validation against real user needs."
    ),
  },
];

const HavenCaseStudy = () => (
  <CaseStudyLayout
    title="Haven"
    type="Accessibility Research · Inclusive Design"
    role="UX Researcher & Interface Designer"
    tools="Figma, Lovable, Accessibility Research"
    intro="A sensory-friendly digital interface applying cognitive load theory, accessibility research, and structured UX decision-making to support neurodivergent users."
    category="Inclusive Design"
    categoryColor="text-emerald-400 bg-emerald-400/10 border-emerald-400/25"
    heroImage={projectHaven}
    sections={sections}
  />
);

export default HavenCaseStudy;
