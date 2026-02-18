import CaseStudyLayout from "@/components/CaseStudyLayout";
import projectNextGenShe from "@/assets/project-nextgenshe.jpg";

const bullets = (items: string[]) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-secondary-foreground text-sm leading-relaxed">
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
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
        {para("Many women face cultural and environmental barriers that limit access to education.")}
        {para("There is a need for a discreet, accessible, and supportive digital learning platform.")}
      </div>
    ),
  },
  {
    heading: "Research Insights",
    content: bullets([
      "Privacy and safety are critical",
      "Low-bandwidth accessibility matters",
      "Clear navigation reduces friction",
      "Trust is essential in design",
    ]),
  },
  {
    heading: "Design Goals",
    content: bullets([
      "Simple and intuitive layout",
      "Low data usage",
      "Mobile-first design",
      "Emotional safety and inclusivity",
    ]),
  },
  {
    heading: "UX Decisions",
    content: bullets([
      "Clean interface with minimal distractions",
      "Clear content hierarchy",
      "Accessible typography",
      "Trust-centered messaging",
    ]),
  },
  {
    heading: "Impact Vision",
    content: para(
      "NextGenShe uses technology as a tool for empowerment, access, and opportunity."
    ),
  },
  {
    heading: "Reflection",
    content: para(
      "This project reinforced my belief that technology should reduce barriers and expand opportunity, especially in underserved communities."
    ),
  },
];

const NextGenSheCaseStudy = () => (
  <CaseStudyLayout
    title="NextGenShe"
    type="Social Impact EdTech Platform"
    role="Founder, UX Strategist, Product Designer"
    tools="UX Research, Web Design, Platform Development"
    intro="NextGenShe is a digital platform designed to provide accessible educational resources to women in underserved and conservative communities."
    category="Social Impact"
    categoryColor="text-accent bg-accent/10 border-accent/25"
    heroImage={projectNextGenShe}
    sections={sections}
  />
);

export default NextGenSheCaseStudy;
