import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import ScholarshipSignal from "@/components/ScholarshipSignal";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ProblemApproach from "@/components/ProblemApproach";
import ResearchInterests from "@/components/ResearchInterests";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Education from "@/components/Education";
import FutureDirection from "@/components/FutureDirection";
import Repositories from "@/components/Repositories";
import Contact from "@/components/Contact";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <ProofStrip />
        <ScholarshipSignal />
        <Testimonials />
        <About />
        <ProblemApproach />
        <ResearchInterests />
        <Skills />
        <Experience />
        <Projects />
        <Writing />
        <Education />
        <FutureDirection />
        <Repositories />
        <Contact />
      </div>
    </PageTransition>
  );
};

export default Index;
