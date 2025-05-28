import React from "react";
import {
  Rocket,
  Bot,
  LayoutTemplate,
  Paintbrush,
  Repeat,
  PlugZap,
  Package,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services: { title: string; description: string; icon: JSX.Element }[] = [
    {
      title: "MVP Development (AI + No-Code)",
      description:
        "Launch-ready MVPs built in 3–7 days using Glide, Bubble, Firebase Studio, and Lovable AI — fast, functional, and scalable.",
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      title: "AI Chatbot Development",
      description:
        "Custom chatbots for websites and apps using Google AI Studio and OpenAI — ideal for support, lead generation, or user guidance.",
      icon: <Bot className="h-6 w-6" />,
    },
    {
      title: "Full-Stack Web App Creation",
      description:
        "Develop fully responsive web apps with clean UI and real-time functionality using Firebase Studio and custom code.",
      icon: <LayoutTemplate className="h-6 w-6" />,
    },
    {
      title: "Website Redesign + UI/UX Revamp",
      description:
        "Revamp outdated sites with modern, user-friendly design and better performance across devices.",
      icon: <Paintbrush className="h-6 w-6" />,
    },
    {
      title: "Workflow Automation",
      description:
        "Save hours with smart automations using Make.com, n8n, and Google tools — perfect for tasks, emails, forms, and content.",
      icon: <Repeat className="h-6 w-6" />,
    },
    {
      title: "API Integration",
      description:
        "Seamlessly connect your apps to live APIs (e.g. sports data, recipe, user systems) and handle custom response mapping.",
      icon: <PlugZap className="h-6 w-6" />,
    },
    {
      title: "Digital Product Development",
      description:
        "I create ready-to-launch digital tools like recipe generators and fantasy sports apps — build once, sell multiple times.",
      icon: <Package className="h-6 w-6" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      {/* Background image with subtle overlay */}
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
