
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the solutions I've built using AI tools, no-code platforms, and 
            visual development environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
