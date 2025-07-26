import { Card, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Interactive Dashboard",
      description: "A modern analytics dashboard with real-time data visualization and smooth animations.",
      tech: ["React", "TypeScript", "D3.js"]
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with seamless user experience and responsive design.",
      tech: ["Next.js", "Node.js", "MongoDB"]
    },
    {
      title: "Creative Portfolio",
      description: "A stunning portfolio website showcasing creative work with interactive elements.",
      tech: ["React", "Three.js", "GSAP"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-secondary py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my passion for creating engaging web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg mb-4 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary-glow/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-card rounded opacity-80"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More projects coming soon... Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;