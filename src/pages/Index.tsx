import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchInterests from "@/components/ResearchInterests";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
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
        <About />
        <ResearchInterests />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <FutureDirection />
        <Repositories />
        <Contact />
      </div>
    </PageTransition>
  );
};

export default Index;
