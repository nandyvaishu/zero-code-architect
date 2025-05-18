
import React from "react";
import { Code, Globe, Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CodepenProject {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  tags: string[];
}

const CoreSkillsSection = () => {
  const codepenProjects: CodepenProject[] = [
    {
      title: "Street Fighter",
      description: "An interactive, audio-enhanced 1v1 fighting game built with HTML, CSS, and JavaScript, featuring animated characters and power meters.",
      thumbnail: "https://i.ibb.co/cKvXsyXN/image.png",
      url: "https://codepen.io/Nandy7390/pen/zxxXdOm",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Netflix Clone",
      description: "A responsive Netflix Originals UI clone that dynamically displays movies using the TMDB API with interactive hover effects.",
      thumbnail: "https://i.ibb.co/whm0Hp0h/IMG-20250518-074311.jpg",
      url: "https://codepen.io/Nandy7390/pen/azzxwgP?editors=1000",
      tags: ["HTML", "CSS", "JavaScript","API Integration"]
    },
    {
      title: "Rock Paper and Scissors",
      description: "A responsive Rock-Paper-Scissors game with sound effects, real-time score tracking, and dynamic bot responses using JavaScript",
      thumbnail: "https://i.ibb.co/4Z3wjCX1/IMG-20250518-075101.jpg",
      url: "https://codepen.io/Nandy7390/pen/jOeyVKO",
      tags: ["HTML", "CSS", "Javascript"]
    },
    {
      title: "Superhero App",
      description: "A superhero app built with HTML, CSS, and JavaScript that lets users search or discover random heroes using the SuperHero API. Showcases skills in API integration, Fetch API, and DOM manipulation.",
      thumbnail: "https://i.ibb.co/3yDSkCyR/IMG-20250518-082408.jpg",
      url: "https://codepen.io/Nandy7390/pen/YzJevxv",
      tags: ["HTML", "CSS", "JavaScript", "DOM","API"]
    }
  ];

  return (
    <section id="core-skills" className="py-20 relative bg-gray-50 dark:bg-gray-900">
      {/* Background image with overlay - more subtle */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-[0.03] dark:opacity-[0.05]"
        />
      </div>
      
      {/* Decorative background elements - more subtle */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-customBlue-100 dark:bg-customBlue-900/20 rounded-full opacity-20 dark:opacity-10 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-customBlue-100 dark:bg-customBlue-900/20 rounded-full opacity-20 dark:opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-2 px-3 py-1 bg-customBlue-50 dark:bg-customBlue-900/30 text-customBlue-600 dark:text-customBlue-300 text-sm font-medium rounded-full">Foundational Projects</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Core Web Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I've built over 10+ mini-projects on CodePen using HTML, CSS, JavaScript, and Bootstrap during my learning phase. 
            These projects were focused on UI/UX, responsiveness, and DOM-based interactivity. This foundational work ensures 
            I don't rely solely on no-code tools — I understand the fundamentals deeply.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {codepenProjects.map((project, index) => (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              key={index}
              className="group block"
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800/70">
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 left-2 right-2 z-20">
                    <div className="flex flex-wrap gap-1 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="bg-white/90 dark:bg-gray-900/90 dark:text-white text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardHeader className="py-3 px-4">
                  <h3 className="text-base font-medium group-hover:text-customBlue-600 dark:text-white dark:group-hover:text-customBlue-400 transition-colors inline-block">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="py-0 px-4 pb-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400">{project.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            These are not large-scale projects, but demonstrate strong front-end fundamentals.
          </p>
          
          <div className="mt-6">
            <Button asChild variant="outline" className="group hover:bg-customBlue-50 hover:text-customBlue-600 dark:hover:bg-customBlue-900/30 dark:hover:text-customBlue-400 hover:border-customBlue-200 dark:border-gray-700">
              <a href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <Code className="mr-2 h-4 w-4" />
                <span>View More on CodePen</span>
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSkillsSection;
