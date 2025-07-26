import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen">
      <HeroSection onViewProjects={scrollToProjects} />
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Index;
