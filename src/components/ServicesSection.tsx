
import React from "react";
import { AlertCircle, Code, Globe, Lightbulb, Puzzle, Settings } from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "Prompt Engineering Consulting",
      description: "Expert guidance on crafting effective prompts for AI tools and models to achieve your specific business goals.",
      icon: <AlertCircle className="h-6 w-6" />,
    },
    {
      title: "No-Code Development",
      description: "Custom web and mobile applications built with leading no-code platforms like Bubble, Webflow, and Adalo.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Workflow Automation",
      description: "Automate your business processes with n8n, Make (Integromat), and other leading automation platforms.",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      title: "Digital Product Creation",
      description: "End-to-end development of digital products from concept to launch without traditional coding.",
      icon: <Puzzle className="h-6 w-6" />,
    },
    {
      title: "UI/UX Design",
      description: "Clean, modern designs focused on user experience with attention to responsiveness and accessibility.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Integration Solutions",
      description: "Connect your existing tools and platforms to create seamless workflows and enhance productivity.",
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      {/* Background image with overlay - more subtle */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-[0.03] dark:opacity-[0.05]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">My Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized services designed to bring your digital ideas to life without traditional coding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 md:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md text-center animate-fade-in dark:text-white">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Coming Soon: Digital Products</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm working on a collection of digital products including prompt templates, UI kits, 
            and no-code modules to help you accelerate your own projects.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-300">Prompt Templates</div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-300">UI Component Kits</div>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-300">No-Code Modules</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
