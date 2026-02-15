export const downloadResume = () => {
  const resumeContent = `
KAINAT NADEEM
================================================================================
Near Shell Petrol Pump, GT Road, Gujar Khan, Pakistan
Phone: +92 342 5611470 | Email: kainat.nadeem.work@gmail.com
LinkedIn: https://www.linkedin.com/in/kainat-nadeem-a9408b324
Nationality: Pakistani

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Software engineer with expertise in developing AI-driven applications and impactful
digital solutions. Proven track record in creating healthcare software and leading
projects like NextGenShe. Selected for prestigious international leadership programs,
demonstrating commitment to professional growth.

================================================================================
WORK HISTORY
================================================================================

01/2025 - Present | AI & Software Development Projects
Virtual University of Pakistan
- Developed AI-Powered Smart Health Assistant for intelligent symptom analysis
- Applied Python, Flask, HTML/CSS, and AI logic algorithms
- Focused on ethical AI, user-centered design, and data-driven decision support

01/2024 - Present | Freelance UX & Front-End Designer
Self-employed
- Designed logos, posters, invitation cards, social media posts, and flyers
- Applied UX research and user flow principles to improve digital designs
- Tools used: Canva, Figma, HTML/CSS for interactive prototypes

01/2024 - Present | Social Impact Tech Project - NextGenShe
- Founded a digital platform providing educational access to women in underserved communities
- Managed UX research, design workflow, and online platform implementation
- Developed leadership and project management skills

08/2024 - 11/2024 | Aspire Leadership Program Finalist
Aspire Institute (Harvard Faculty) - Global
- Selected for prestigious international leadership programme
- Collaborated with global cohort using design thinking
- Strengthened ethical leadership and cross-cultural communication

================================================================================
EDUCATION
================================================================================

2022 - 2026 | Bachelor of Science: Software Engineering
Virtual University of Pakistan - Lahore
- Online-first program with in-person exams
- Focus on programming, OOP, AI fundamentals, web development, UX/UI design
- Final Year Project: AI-Powered Smart Health Assistant

================================================================================
SKILLS
================================================================================

Programming:       Python, C, C++, HTML, CSS, JavaScript
AI & Data:         Machine Learning, Deep Learning, Neural Networks, Data Visualization
UX/UI Design:      User Research, Wireframing, Prototyping
Web Development:   Flask, Django, REST API
Databases:         MySQL, SQLite, MongoDB
Tools:             Git, VS Code, Canva, Figma

================================================================================
CERTIFICATIONS
================================================================================

- Google Professional Certificate in UX Design
- Professional Certificate "Improve Your English Communication Skills" (Georgia Tech)
- Coursera: "AI for Everyone"
- Google Prompting Essentials Certificate
- Cyber-security Course Certificate from IBM

================================================================================
LANGUAGES
================================================================================

English: B2 | Urdu: Native

================================================================================
PROJECTS
================================================================================

AI-Powered Smart Health Assistant (Final Year Project)
- Intelligent system for symptom logic and decision support
- Technologies: Python, Flask, HTML/CSS, AI logic algorithms

NextGenShe (Social Impact Project)
- Online platform for accessible education for women in Pakistan
`.trim();

  const blob = new Blob([resumeContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Kainat_Nadeem_Resume.txt";
  a.click();
  URL.revokeObjectURL(url);
};
