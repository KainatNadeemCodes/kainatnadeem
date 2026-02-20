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
    heading: "Problem Statement",
    content: (
      <div className="space-y-3">
        {para("Women in conservative and underserved communities face cultural and environmental barriers that limit access to education. A discreet, accessible, and technically sound digital platform is needed to address this systemic gap.")}
      </div>
    ),
  },
  {
    heading: "Systems Design Approach",
    content: bullets([
      "Mobile-first platform architecture for low-bandwidth environments",
      "Modular content delivery system for scalable curriculum management",
      "Privacy-first design patterns for user safety and trust",
      "Clear navigation structure to reduce cognitive friction",
    ]),
  },
  {
    heading: "Socio-Technical Problem Framing",
    content: bullets([
      "Mapped cultural constraints to technical design decisions",
      "Prioritised access expansion as the primary system objective",
      "Designed for trust-building through transparency and simplicity",
      "Balanced technological capability with real-world infrastructure limitations",
    ]),
  },
  {
    heading: "Platform Architecture",
    content: bullets([
      "Lightweight frontend optimised for minimal data usage",
      "Structured content hierarchy for guided learning paths",
      "Accessible typography and touch-friendly interface patterns",
      "Scalable design supporting future localisation and language support",
    ]),
  },
  {
    heading: "Impact & Methodology",
    content: para(
      "NextGenShe demonstrates how technology can be systematically designed to reduce structural barriers — applying platform thinking to expand opportunity in underserved contexts."
    ),
  },
  {
    heading: "Reflection",
    content: para(
      "This project reinforced the importance of socio-technical analysis in system design — understanding that technology solutions must account for cultural, economic, and infrastructural constraints to achieve meaningful impact."
    ),
  },
];

const NextGenSheCaseStudy = () => (
  <CaseStudyLayout
    title="NextGenShe"
    type="Systems Design · Social Impact"
    role="Founder, Technical Lead, UX Strategist"
    tools="UX Research, Systems Design, Platform Development"
    intro="A technology platform designed to expand educational access for women in underserved communities through intentional systems design and socio-technical problem framing."
    category="Systems Design"
    categoryColor="text-accent bg-accent/10 border-accent/25"
    heroImage={projectNextGenShe}
    sections={sections}
  />
);

export default NextGenSheCaseStudy;
