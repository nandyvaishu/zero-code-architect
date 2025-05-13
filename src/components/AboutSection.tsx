
import React from "react";
import { Check, ArrowRight, Zap, Code, Settings, Globe, Database, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  const skills = [
    "Prompt Engineering",
    "No-Code Development",
    "Visual Development",
    "AI Integration",
    "UX/UI Design",
    "Automation",
    "n8n & Make",
    "Bubble",
  ];

  const tools = [
    {name: "GlideApp", icon: <Globe className="h-4 w-4" />},
    {name: "Lovable AI", icon: <Zap className="h-4 w-4" />},
    {name: "Bubble", icon: <Code className="h-4 w-4" />},
    {name: "Firebase Studio", icon: <Database className="h-4 w-4" />},
    {name: "Webscraper.io", icon: <Globe className="h-4 w-4" />},
    {name: "N8N", icon: <Settings className="h-4 w-4" />},
    {name: "Make.com", icon: <Settings className="h-4 w-4" />},
    {name: "GitHub", icon: <Code className="h-4 w-4" />},
    {name: "Google Sheets", icon: <Database className="h-4 w-4" />},
    {name: "Telegram API", icon: <Globe className="h-4 w-4" />},
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-5"
        />
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-customGreen-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-customGreen-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-customGreen-200 rounded-xl translate-x-4 translate-y-4"></div>
              <div className="relative bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="bg-customGreen-500 h-3"></div>
                <div className="p-6">
                  {/* Development workflow visualization */}
                  <h4 className="text-sm font-medium text-gray-500 mb-3">My Development Workflow</h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-customGreen-100 flex items-center justify-center text-customGreen-500">1</div>
                      <div className="h-0.5 w-6 bg-customGreen-200"></div>
                      <div className="flex-1 p-3 border border-customGreen-200 rounded-lg">
                        <h5 className="text-sm font-medium">Problem Analysis & Prompt Crafting</h5>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-customGreen-100 flex items-center justify-center text-customGreen-500">2</div>
                      <div className="h-0.5 w-6 bg-customGreen-200"></div>
                      <div className="flex-1 p-3 border border-customGreen-200 rounded-lg">
                        <h5 className="text-sm font-medium">Solution Design with AI Tools</h5>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-customGreen-100 flex items-center justify-center text-customGreen-500">3</div>
                      <div className="h-0.5 w-6 bg-customGreen-200"></div>
                      <div className="flex-1 p-3 border border-customGreen-200 rounded-lg">
                        <h5 className="text-sm font-medium">No-Code Implementation</h5>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-customGreen-100 flex items-center justify-center text-customGreen-500">4</div>
                      <div className="h-0.5 w-6 bg-customGreen-200"></div>
                      <div className="flex-1 p-3 border border-customGreen-200 rounded-lg">
                        <h5 className="text-sm font-medium">Integration & Automation Setup</h5>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-customGreen-100 flex items-center justify-center text-customGreen-500">5</div>
                      <div className="h-0.5 w-6 bg-customGreen-200"></div>
                      <div className="flex-1 p-3 border border-customGreen-200 rounded-lg">
                        <h5 className="text-sm font-medium">Testing & Deployment</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <div className="inline-block mb-2 px-3 py-1 bg-customGreen-50 text-customGreen-600 text-sm font-medium rounded-full">About Me</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">From Prompt to Product</h2>
            <h3 className="text-xl md:text-2xl font-medium text-customGreen-500 mb-6">
              My Journey from AI Experimentation to Building Real-World Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              I design smart web solutions using powerful prompts, no-code platforms, and full-stack workflows. 
              My goal is to craft flawless UI/UX without writing a single line of code — just with the power of prompt engineering
              and cutting-edge tools.
            </p>
            <p className="text-gray-600 mb-8">
              Today, I specialize in leveraging AI-powered tools, n8n, Make (Integromat), Bubble, Firebase, 
              and other visual development platforms to create responsive, modern, and interactive 
              websites and applications that deliver exceptional user experiences.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <span>Skills & Expertise</span>
                <span className="ml-3 h-px bg-gray-200 flex-1"></span>
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow group hover:border-l-2 hover:border-customGreen-500"
                  >
                    <Check className="h-4 w-4 text-customGreen-500 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <span>Tech Stack & Tools</span>
                <span className="ml-3 h-px bg-gray-200 flex-1"></span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="bg-white py-1.5 px-3 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-customGreen-50 cursor-pointer flex items-center gap-2 border border-gray-100"
                  >
                    {tool.icon}
                    <span className="text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-8" />

            <Button asChild className="bg-customGreen-500 hover:bg-customGreen-600 flex items-center group">
              <a href="#services">
                View My Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
