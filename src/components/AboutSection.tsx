
import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-customGreen-200 rounded-xl translate-x-4 translate-y-4"></div>
              <div className="relative bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="bg-customGreen-500 h-3"></div>
                <div className="p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="w-16 h-16 bg-customGreen-100 rounded-full flex items-center justify-center text-customGreen-500 font-bold text-xl">
                      AI
                    </div>
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl">
                      UX
                    </div>
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl">
                      Dev
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-5/6"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-4/6"></div>
                    <div className="h-4 bg-customGreen-100 rounded-full w-full"></div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="h-8 bg-customGreen-500 rounded"></div>
                    <div className="h-8 bg-customGreen-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <h3 className="text-xl md:text-2xl font-medium text-customGreen-500 mb-6">
              My Journey from AI Experimentation to Building Real-World Solutions
            </h3>
            <p className="text-gray-600 mb-6">
              I began as a curious explorer in the world of AI tools and no-code platforms, 
              fascinated by their potential to democratize software development. What started as 
              experimentation quickly evolved into a passion for building sophisticated digital 
              solutions without traditional coding.
            </p>
            <p className="text-gray-600 mb-8">
              Today, I specialize in leveraging AI-powered tools, n8n, Make (Integromat), Bubble, 
              and other visual development platforms to create responsive, modern, and interactive 
              websites and applications that deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-white p-3 rounded-lg shadow-sm"
                >
                  <Check className="h-4 w-4 text-customGreen-500 mr-2" />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>

            <Button asChild className="bg-customGreen-500 hover:bg-customGreen-600">
              <a href="#services">View My Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
