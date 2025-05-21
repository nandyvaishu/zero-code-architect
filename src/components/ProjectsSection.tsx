import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const projects = [
    {
      title: "Farm to Frontend ",
      description: "A sleek, fully functional food website crafted with zero manual coding—just smart prompts. Features a responsive design, interactive shop, blog, and contact form, all built using HTML, CSS, and JavaScript",
      tags: ["Bubble", "AI", "Make.com", "Automation"],
      image: "https://i.ibb.co/HfXpFZgZ/In-Shot-20250519-143936568.jpg",
      link: "https://nandhini7390.github.io/Farm-fresh/",
      category: "No-Code" as const,
      status: "In Progress" as const,
      badge: "AI + Automation"
    },
    {
      title: "Job Scraper Automation Suite",
      description: "Built a job scraper workflow in n8n by arranging modules like Scheduler, Gmail, RSS, Loop, Extract, Google Sheets, Iterate, and Telegram. It automates daily job fetching, info extraction, and Telegram alerts—fully configured through visual node setup.",
      tags: ["n8n", "Make", "Automation", "Integration"],
      image: "https://i.ibb.co/5WvcmS5C/In-Shot-20250521-071315412.jpg",
      link: "https://nandy.app.n8n.cloud/workflow/aL4hWDl14RInxt1k",
      category: "API-connected" as const
    },
    {
      title: "Remodified Ecom",
      description: "This project demonstrates my expertise in redesigning an outdated CodePen site using HTML, CSS, JavaScript, and Bootstrap. It reflects my ability to transform legacy websites into modern, user-centric platforms with enhanced UI and UX.",
      tags: ["Visual Dev", "Dashboard", "Data", "Design"],
      image: "https://i.ibb.co/0jfRKkf5/In-Shot-20250519-144050859.jpg",
      link: "https://nandhini7390.github.io/superecom/",
      category: "AI-integrated" as const
    },
    {
      title: "Cricket Fantasy App",
      description: "Built a full-featured fantasy cricket app using LovableAI with sign-in, Google login, live match data via CricAPI, league creation, and wallet modules. Also integrated a mock AI chatbot for interactive user experience.",
      tags: ["AI", "NLP", "Make.com", "Bubble"],
      image: "https://i.ibb.co/NdKpttnS/In-Shot-20250519-114121114.jpg",
      link: "https://cricket-fantasy-flare.vercel.app/",
      category: "Prompt-built" as const,
      status: "Coming Soon" as const
    },
  ];

  const categories = ["Prompt-built", "No-Code", "AI-integrated", "API-connected"];
  
  const filteredProjects = activeFilter 
    ? projects.filter(project => project.category === activeFilter)
    : projects;

  return (
    <section id="projects" className="py-20 relative bg-white dark:bg-gray-900">
      {/* Background image with overlay - more subtle */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-[0.04] dark:opacity-[0.06]"
        />
      </div>
      
      {/* Decorative background elements - more subtle */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-customBlue-50 dark:bg-customBlue-900/20 rounded-full opacity-20 dark:opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-16 w-48 h-48 bg-customBlue-50 dark:bg-customBlue-900/20 rounded-full opacity-20 dark:opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 relative">
          <div className="inline-block mb-2 px-3 py-1 bg-customBlue-50 dark:bg-customBlue-900/30 text-customBlue-600 dark:text-customBlue-300 text-sm font-medium rounded-full">My Work</div>
          <div className="inline-block relative">
            <div className="absolute -top-10 -right-10 text-6xl text-customBlue-100 dark:text-customBlue-900/30 font-bold opacity-30">{projects.length}</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10 dark:text-white">
              Recent Projects
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the solutions I've built using AI tools, no-code platforms, and 
            visual development environments.
          </p>
          
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 stagger-children">
            <Button 
              variant={activeFilter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(null)}
              className={activeFilter === null ? "bg-customBlue-500 text-white rounded-md" : "hover:bg-customBlue-50 dark:hover:bg-customBlue-900/30 rounded-md"}
            >
              All Projects
            </Button>
            
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={activeFilter === category ? "bg-customBlue-500 text-white rounded-md" : "hover:bg-customBlue-50 dark:hover:bg-customBlue-900/30 rounded-md"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {filteredProjects.map((project, index) => (
             <a
              key={index} 
              href={project.link} // Use the project link as the href
              target="_blank" // Open link in new tab (optional)
              rel="noopener noreferrer" // Security best practice
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
             </a>
          ))}
        </div>
        
        {/* More projects indicator */}
        <div className="flex justify-center mt-12">
          <div className="relative group cursor-pointer">
            <div className="text-customBlue-600 dark:text-customBlue-400 font-medium flex items-center">
              More projects coming soon
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
