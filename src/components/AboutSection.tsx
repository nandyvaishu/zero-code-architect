
import React from "react";
import { Rocket, Code, Wand2, GraduationCap, BookOpenCheck, Download } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative bg-white dark:bg-gray-900">
      {/* Background image with overlay - more subtle */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505628346824-60b2903929aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-[0.04] dark:opacity-[0.06]"
        />
      </div>
      
      {/* Decorative background elements - more subtle */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-customBlue-100 dark:bg-customBlue-900/20 rounded-full opacity-20 dark:opacity-10 blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-customBlue-100 dark:bg-customBlue-900/20 rounded-full opacity-20 dark:opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <div className="relative max-w-xs mx-auto">
              <div className="w-64 h-64 mx-auto relative">
                <img
                  src="https://i.ibb.co/zHXFR89N/In-Shot-20250530-075659197.jpg"
                  alt="About me"
                  className="w-full h-full object-cover rounded-full shadow-lg" // Removed hover-glow as it's likely a custom class
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-customBlue-500 rounded-full shadow-md transform hover:rotate-6 hover:translate-y-[-5px] transition-transform duration-300 flex items-center justify-center"> {/* Adjusted for standard hover effect */}
                  <Rocket className="text-white h-8 w-8" /> {/* Removed animate-pulse as it's likely a custom class */}
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:order-1">
            <div className="inline-block mb-4 px-3 py-1 bg-customBlue-50 dark:bg-customBlue-900/30 text-customBlue-600 dark:text-customBlue-300 text-sm font-medium rounded-full">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            Prompt-Driven Creator & Digital Problem Solver
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I engineer smart web experiences by fusing the power of prompts, automation, and thoughtful design. Every project I craft is rooted in clarity, functionality, and a sharp focus on real-world impact.
            </p>
            
            <div className="mb-8">
              <a
                href="https://drive.google.com/file/d/1K0rNEHXJcv935Vn-F3BPtg_j0Uf3GYov/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                download="resume.pdf"
                className="inline-flex items-center animate-bounce-slow hover:animate-none"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white dark:bg-gray-800 shadow-md hover-lift">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 hover:translate-y-[-5px] transition-transform"> {/* Adjusted for standard hover effect */}
                  <h4 className="text-sm font-semibold dark:text-white">
                    <Code className="inline-block h-4 w-4 mr-2 text-customBlue-500" />
                    No-Code Development
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Building applications without writing code.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-gray-800 shadow-md hover-lift">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 hover:translate-y-[-5px] transition-transform"> {/* Adjusted for standard hover effect */}
                  <h4 className="text-sm font-semibold dark:text-white">
                    <Wand2 className="inline-block h-4 w-4 mr-2 text-customBlue-500" />
                    Prompt Engineering
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Using AI prompts to create and automate tasks.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-gray-800 shadow-md hover-lift">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 hover:translate-y-[-5px] transition-transform"> {/* Adjusted for standard hover effect */}
                  <h4 className="text-sm font-semibold dark:text-white">
                    <GraduationCap className="inline-block h-4 w-4 mr-2 text-customBlue-500" />
                    Continuous Learning
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Always staying updated with the latest trends.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-gray-800 shadow-md hover-lift">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 hover:translate-y-[-5px] transition-transform"> {/* Adjusted for standard hover effect */}
                  <h4 className="text-sm font-semibold dark:text-white">
                    <BookOpenCheck className="inline-block h-4 w-4 mr-2 text-customBlue-500" />
                    Problem Solving
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Turning challenges into innovative solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
