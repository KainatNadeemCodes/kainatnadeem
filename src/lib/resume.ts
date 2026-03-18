// Uses jsPDF for proper PDF generation.
// Install with: npm install jspdf
// Types:        npm install --save-dev @types/jspdf

import jsPDF from "jspdf";

export const downloadResume = () => {
  const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });

  const PAGE_W = 210;
  const PAGE_H = 297;
  const ML = 18;
  const MR = 18;
  const CW = PAGE_W - ML - MR;
  let y = 0;

  // ── Colours ──────────────────────────────────────────────────────
  const PRIMARY    = [37,  99,  235] as [number,number,number];
  const DARK       = [15,  23,  42 ] as [number,number,number];
  const MID        = [71,  85,  105] as [number,number,number];
  const LIGHT      = [148, 163, 184] as [number,number,number];
  const WHITE      = [255, 255, 255] as [number,number,number];
  const BG_HEADER  = [15,  23,  42 ] as [number,number,number];
  const ACCENT_BG  = [239, 246, 255] as [number,number,number];

  // ── Helpers ───────────────────────────────────────────────────────
  const setFont = (
    style: "normal" | "bold",
    size: number,
    color: [number, number, number] = DARK
  ) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
  };

  const rule = (
    lx: number, ly: number, lw: number,
    color: [number,number,number] = PRIMARY,
    thickness = 0.35
  ) => {
    doc.setDrawColor(...color);
    doc.setLineWidth(thickness);
    doc.line(lx, ly, lx + lw, ly);
  };

  const checkPage = (needed = 8) => {
    if (y + needed > PAGE_H - 14) {
      doc.addPage();
      y = 16;
    }
  };

  const sectionHeader = (title: string) => {
    checkPage(14);
    y += 5;
    setFont("bold", 8, PRIMARY);
    doc.text(title.toUpperCase(), ML, y);
    y += 2.5;
    rule(ML, y, CW);
    y += 4;
  };

  const bulletLine = (text: string, indent = 4) => {
    checkPage(6);
    doc.setFillColor(...PRIMARY);
    doc.circle(ML + indent + 0.8, y - 1.2, 0.75, "F");
    setFont("normal", 8, MID);
    const lines = doc.splitTextToSize(text, CW - indent - 5);
    doc.text(lines, ML + indent + 4, y);
    y += lines.length * 4.2 + 0.8;
  };

  const tagLine = (label: string, value: string) => {
    checkPage(6);
    setFont("bold", 8, DARK);
    doc.text(label, ML + 4, y);
    setFont("normal", 8, MID);
    doc.text(value, ML + 36, y);
    y += 5;
  };

  const pill = (
    text: string,
    x: number,
    py: number,
    fillColor: [number,number,number],
    strokeColor: [number,number,number],
    textColor: [number,number,number]
  ) => {
    const tw = doc.getTextWidth(text) + 5;
    doc.setFillColor(...fillColor);
    doc.setDrawColor(...strokeColor);
    doc.setLineWidth(0.2);
    doc.roundedRect(x, py - 3.5, tw, 5.5, 1.2, 1.2, "FD");
    setFont("bold", 7.5, textColor);
    doc.text(text, x + 2.5, py);
    return tw;
  };

  const roleEntry = (
    title: string,
    org: string,
    period: string,
    impact: string,
    tags: string[]
  ) => {
    checkPage(24);
    setFont("bold", 9.5, DARK);
    doc.text(title, ML + 4, y);
    setFont("normal", 8, PRIMARY);
    doc.text(period, PAGE_W - MR - doc.getTextWidth(period), y);
    y += 4.8;

    setFont("normal", 8, MID);
    doc.text(org, ML + 4, y);
    y += 5;

    // Impact
    setFont("bold", 8, PRIMARY);
    doc.text("→", ML + 4, y);
    setFont("normal", 8, MID);
    const impactLines = doc.splitTextToSize(impact, CW - 13);
    doc.text(impactLines, ML + 10, y);
    y += impactLines.length * 4.2 + 3;

    // Tag pills
    let tx = ML + 4;
    tags.forEach((tag) => {
      const tw = doc.getTextWidth(tag) + 5;
      if (tx + tw > PAGE_W - MR) { tx = ML + 4; y += 6; }
      pill(tag, tx, y, ACCENT_BG, PRIMARY, PRIMARY);
      tx += tw + 2.5;
    });
    y += 8;
  };

  // ════════════════════════════════════════════════════════════════
  // HEADER
  // ════════════════════════════════════════════════════════════════
  doc.setFillColor(...BG_HEADER);
  doc.rect(0, 0, PAGE_W, 48, "F");

  doc.setFillColor(...PRIMARY);
  doc.rect(0, 45.5, PAGE_W, 1.5, "F");

  setFont("bold", 28, WHITE);
  doc.text("Kainat Nadeem", ML, 20);

  setFont("normal", 9, LIGHT);
  doc.text("Software Engineering Scholar  ·  Top 1% Merit Awardee  ·  Women in STEM Advocate", ML, 29);

  setFont("normal", 7.5, LIGHT);
  doc.text(
    "kainat.nadeem.work@gmail.com   ·   +92 342 5611470   ·   github.com/KainatNadeemCodes   ·   Pakistan",
    ML, 38
  );

  y = 56;

  // ════════════════════════════════════════════════════════════════
  // SUMMARY
  // ════════════════════════════════════════════════════════════════
  sectionHeader("Professional Summary");
  setFont("normal", 8.5, MID);
  const summaryText =
    "High-achieving Software Engineering student (CGPA 3.93 / 4.00 · Top 1%) and 6-year PEEF Merit Scholar at " +
    "Virtual University of Pakistan. Alumna of the Aspire Institute Leadership Program (Harvard Faculty). Founder of " +
    "NextGenShe, addressing the gender gap in technology. Experienced in AI-driven systems, full-stack development, " +
    "and human-centered design. Seeking to advance inclusive technology through an MSc in Artificial Intelligence.";
  const summaryLines = doc.splitTextToSize(summaryText, CW - 4);
  doc.text(summaryLines, ML + 4, y);
  y += summaryLines.length * 4.5 + 3;

  // ════════════════════════════════════════════════════════════════
  // EDUCATION
  // ════════════════════════════════════════════════════════════════
  sectionHeader("Education");

  setFont("bold", 10.5, DARK);
  doc.text("BS Software Engineering", ML + 4, y);
  setFont("normal", 8, PRIMARY);
  doc.text("2022 – 2026 (Expected)", PAGE_W - MR - doc.getTextWidth("2022 – 2026 (Expected)"), y);
  y += 5;

  setFont("normal", 8.5, MID);
  doc.text("Virtual University of Pakistan", ML + 4, y);
  y += 6;

  // Badges
  const cgpaW = pill("CGPA 3.93 / 4.00  ·  Top 1%", ML + 4, y, ACCENT_BG, PRIMARY, PRIMARY);
  pill("6-Year PEEF Merit Scholar", ML + 4 + cgpaW + 3, y, [240,253,244], [34,197,94], [22,163,74]);
  y += 7;

  setFont("bold", 8.5, DARK);
  doc.text("Final Year Project: AI-Powered Smart Health Assistant", ML + 4, y);
  y += 5;
  bulletLine("End-to-end AI triage system · FastAPI + Scikit-Learn + NLTK");
  bulletLine("Healthcare accessibility in low-resource environments · Ethical AI constraints");

  y += 1;
  setFont("bold", 8, DARK);
  doc.text("Key Coursework:", ML + 4, y);
  y += 4.5;
  setFont("normal", 8, MID);
  const coursework =
    "Artificial Intelligence · Analysis of Algorithms · Data Structures · Linear Algebra · " +
    "Probability & Statistics · Human-Computer Interaction";
  const cwLines = doc.splitTextToSize(coursework, CW - 8);
  doc.text(cwLines, ML + 4, y);
  y += cwLines.length * 4.2 + 4;

  // ════════════════════════════════════════════════════════════════
  // SKILLS
  // ════════════════════════════════════════════════════════════════
  sectionHeader("Skills");
  tagLine("AI & ML",      "Python · Scikit-Learn · NLTK · TensorFlow · NLP · Decision Systems · Predictive Modeling");
  tagLine("Full-Stack",   "React · TypeScript · FastAPI · Flask · Django · REST APIs · Tailwind CSS · JavaScript");
  tagLine("UX & Design",  "Figma · UX Research · WCAG Accessibility · Human-Centered Design · Prototyping");
  tagLine("Tools",        "Git · GitHub · SQL · MySQL · MongoDB · Agile");

  // ════════════════════════════════════════════════════════════════
  // EXPERIENCE
  // ════════════════════════════════════════════════════════════════
  sectionHeader("Experience & Leadership");

  roleEntry(
    "Team Lead · Global AI Hackathon",
    "Aspire Institute × CAYU",
    "Jan 2026",
    "Led 5-member international team (Kenya, Nigeria, Bolivia, Pakistan) to build Pathway AI in 24-hour sprint. Selected among 4,000+ participants from 50+ countries.",
    ["AI Engineering", "Cross-Border Leadership", "24-hr Sprint"]
  );
  roleEntry(
    "AI Engineer · Smart Health Assistant",
    "Final Year Project · Virtual University of Pakistan",
    "2025 – Present",
    "Built end-to-end AI triage system with FastAPI + Scikit-Learn + NLTK. Ethical AI boundaries and human oversight constraints for healthcare accessibility.",
    ["Python", "FastAPI", "Scikit-Learn", "NLTK", "Ethical AI"]
  );
  roleEntry(
    "Founder & Technical Lead · NextGenShe",
    "Women in STEM Initiative",
    "2024 – Present",
    "Founded STEM platform expanding educational access for women in underserved communities. Aspire Capstone proposal commended for rural digital literacy scaling.",
    ["Systems Design", "UX Research", "Platform Architecture", "Social Impact"]
  );
  roleEntry(
    "UX Researcher & Lead Designer · Haven",
    "Neuro-Inclusive Safety Platform",
    "2026 – Present",
    "Designed sensory-friendly interface applying cognitive load theory, HCD, and WCAG principles for neurodivergent users.",
    ["HCD", "WCAG", "Figma", "Accessibility"]
  );
  roleEntry(
    "Engineer · SheSphere",
    "Women's Safety & Resilience Platform",
    "2026 – Present",
    "Engineered real-time SOS alert system and community storytelling platform for women's digital safety.",
    ["React.js", "TypeScript", "Figma", "Inclusive UI"]
  );
  roleEntry(
    "Volunteer Mentor · LinkedIn Learning Community",
    "Independent",
    "2024 – Present",
    "Mentoring 20+ university students on programming logic, FYP strategy, and career pathways.",
    ["Mentorship", "Programming", "Career Guidance"]
  );
  roleEntry(
    "Aspire Leadership Program Alumna",
    "Aspire Institute · Harvard Faculty Initiative",
    "Nov 2024",
    "Applied design thinking to systemic social challenges within a global cohort from 50+ countries.",
    ["Design Thinking", "Ethical Leadership", "Global Cohort"]
  );

  // ════════════════════════════════════════════════════════════════
  // AWARDS
  // ════════════════════════════════════════════════════════════════
  sectionHeader("Awards & Recognition");

  checkPage(12);
  setFont("bold", 9.5, DARK);
  doc.text("6-Year PEEF Merit Scholarship", ML + 4, y);
  setFont("normal", 8, PRIMARY);
  doc.text("2020 – Present", PAGE_W - MR - doc.getTextWidth("2020 – Present"), y);
  y += 5;
  bulletLine("Continuous provincial merit scholarship · Punjab Educational Endowment Fund");

  checkPage(12);
  setFont("bold", 9.5, DARK);
  doc.text("PM Youth Laptop Scheme · Phase 4", ML + 4, y);
  setFont("normal", 8, PRIMARY);
  doc.text("2025", PAGE_W - MR - doc.getTextWidth("2025"), y);
  y += 5;
  bulletLine("Awarded laptop on merit under Prime Minister of Pakistan's national youth scheme");

  // ════════════════════════════════════════════════════════════════
  // CERTIFICATIONS
  // ════════════════════════════════════════════════════════════════
  sectionHeader("Certifications");

  const certs: [string, string, string][] = [
    ["Google UX Design Professional Certificate",   "Google · Coursera",         "Jun 2025"],
    ["Google Prompting Essentials · Generative AI", "Google · Coursera",         "Mar 2025"],
    ["Python for Data Science, AI & Development",   "IBM · Coursera",            "Jun 2025"],
    ["AI for Everyone",                             "DeepLearning.AI · Coursera","Jan 2025"],
    ["AI-Integrated Leadership Program",            "Aspire Institute",          "Dec 2025"],
    ["Aspire Leadership Program",                   "Aspire Institute",          "Nov 2024"],
    ["Improve Your English Communication Skills",   "Georgia Tech · Coursera",   "Mar 2025"],
    ["IBM Cybersecurity Certificate",               "IBM",                       "2024"    ],
  ];

  certs.forEach(([name, issuer, date]) => {
    checkPage(10);
    doc.setFillColor(...ACCENT_BG);
    doc.setDrawColor(...PRIMARY);
    doc.setLineWidth(0.18);
    doc.roundedRect(ML + 4, y - 4, CW - 4, 7.5, 1, 1, "FD");
    setFont("bold", 8, DARK);
    doc.text(name, ML + 7, y);
    setFont("normal", 7.5, MID);
    doc.text(issuer, ML + 7, y + 3.2);
    setFont("normal", 7.5, PRIMARY);
    doc.text(date, PAGE_W - MR - doc.getTextWidth(date) - 5, y);
    y += 10;
  });

  // ════════════════════════════════════════════════════════════════
  // LANGUAGES
  // ════════════════════════════════════════════════════════════════
  sectionHeader("Languages");
  tagLine("English", "Professional Working Proficiency (B2)");
  tagLine("Urdu",    "Native");

  // ════════════════════════════════════════════════════════════════
  // FOOTER on every page
  // ════════════════════════════════════════════════════════════════
  const totalPages = (doc as any).internal.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFillColor(...BG_HEADER);
    doc.rect(0, PAGE_H - 10, PAGE_W, 10, "F");
    setFont("normal", 7, LIGHT);
    doc.text(
      "Kainat Nadeem  ·  kainat.nadeem.work@gmail.com  ·  github.com/KainatNadeemCodes",
      ML, PAGE_H - 4
    );
    doc.text(`${p} / ${totalPages}`, PAGE_W - MR, PAGE_H - 4, { align: "right" });
  }

  doc.save("Kainat_Nadeem_Resume_2026.pdf");
};
