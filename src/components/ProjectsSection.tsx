
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce",
      description: "A modern e-commerce platform built entirely with no-code tools and AI integrations for product recommendations.",
      tags: ["Bubble", "AI", "UX/UI", "Automation"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      link: "#",
    },
    {
      title: "Workflow Automation Suite",
      description: "Custom workflow automation solution created with n8n and Make integrating multiple business systems.",
      tags: ["n8n", "Make", "Automation", "Integration"],
      image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "#",
    },
    {
      title: "Interactive Dashboard",
      description: "A dynamic dashboard for data visualization built with no-code tools and real-time data processing.",
      tags: ["Visual Dev", "Dashboard", "Data", "Design"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-customGreen-50 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/3 -left-16 w-48 h-48 bg-customGreen-50 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 relative">
          <div className="inline-block relative">
            <div className="absolute -top-10 -right-10 text-6xl text-customGreen-100 font-bold opacity-30">{projects.length}</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
              My <span className="relative">
                Projects
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,5 Q50,0 100,5 T200,5" stroke="#4BB543" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the solutions I've built using AI tools, no-code platforms, and 
            visual development environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        {/* More projects indicator */}
        <div className="flex justify-center mt-12">
          <div className="relative group cursor-pointer">
            <div className="text-customGreen-600 font-medium">More projects coming soon</div>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-customGreen-500 transition-all group-hover:w-full"></span>
            <div className="flex justify-center mt-2">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-customGreen-500 animate-pulse" style={{animationDelay: '0ms'}}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-customGreen-500 animate-pulse" style={{animationDelay: '300ms'}}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-customGreen-500 animate-pulse" style={{animationDelay: '600ms'}}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
