
import React from "react";
import { ArrowRight, Code, Wand2, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 overflow-hidden relative dark:bg-gray-900">
      {/* Background image with overlay - more subtle */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-[0.015] dark:opacity-[0.02]"
        />
      </div>

      {/* Background decorative elements - enhanced and more subtle */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-customBlue-50 dark:bg-customBlue-900/20 rounded-full opacity-30 dark:opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-12 -right-12 w-80 h-80 bg-customBlue-50 dark:bg-customBlue-900/20 rounded-full opacity-30 dark:opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-customBlue-100 dark:bg-customBlue-800/30 rounded-full opacity-20 dark:opacity-20 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2">
            <div className="flex items-center mb-3">
              <span className="bg-customBlue-100 dark:bg-customBlue-900/50 text-customBlue-600 dark:text-customBlue-300 text-xs font-medium px-3 py-1 rounded-full">Prompt Engineer & No-Code Builder</span>
            </div>
            
            <div className="relative">
              <span className="absolute -left-6 -top-6 text-8xl text-customBlue-100 dark:text-customBlue-900/40 font-bold opacity-30">"</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance relative z-10 dark:text-white">
                Building the Future with <span className="text-gradient relative inline-block">
                  Prompts,
                </span> 
                <br className="md:hidden"/>
                <span className="relative inline-block">
                  No-Code, 
                </span>
                <br className="md:hidden"/> and
                <span className="relative inline-block ml-2">
                  Smart Automation
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              I design smart web solutions using powerful prompts, no-code platforms, and full-stack workflows. 
              Crafting flawless UI/UX without writing code — just with the power of prompt engineering.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-customBlue-500 hover:bg-customBlue-600 dark:bg-customBlue-600 dark:hover:bg-customBlue-700 relative overflow-hidden group rounded-md">
                <a href="#projects">
                  <span className="relative z-10 flex items-center">
                    Explore My Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-customBlue-600 dark:bg-customBlue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group relative rounded-md dark:text-gray-200 dark:border-gray-700">
                <a href="#contact" className="overflow-hidden">
                  <span className="relative z-10">Let's Collaborate</span>
                  <span className="absolute inset-0 bg-customBlue-50 dark:bg-customBlue-900/30 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></span>
                </a>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Wand2 className="h-4 w-4 mr-2 text-customBlue-500 dark:text-customBlue-400" />
                <span>Prompt Engineering</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Code className="h-4 w-4 mr-2 text-customBlue-500 dark:text-customBlue-400" />
                <span>No-Code Development</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Palette className="h-4 w-4 mr-2 text-customBlue-500 dark:text-customBlue-400" />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Zap className="h-4 w-4 mr-2 text-customBlue-500 dark:text-customBlue-400" />
                <span>Automation</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-scale-in">
            <div className="relative perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-customBlue-400/20 to-customBlue-600/20 dark:from-customBlue-500/20 dark:to-customBlue-700/20 blur-xl rounded-full transform rotate-12"></div>
              
              {/* Code editor mockup */}
              <div className="rounded-xl bg-gradient-to-br from-customBlue-400 to-customBlue-600 dark:from-customBlue-600 dark:to-customBlue-800 p-1 shadow-lg transform hover:rotate-2 transition-transform">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 transform hover:-rotate-1 transition-transform">
                  <div className="flex items-center mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-customBlue-400"></div>
                    </div>
                    <div className="ml-4 h-5 bg-gray-100 dark:bg-gray-700 rounded flex-1"></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="w-16 bg-gray-100 dark:bg-gray-700 h-4 mr-2"></div>
                      <div className="h-4 bg-customBlue-100 dark:bg-customBlue-800/70 rounded flex-1"></div>
                    </div>
                    <div className="flex">
                      <div className="w-16 bg-gray-100 dark:bg-gray-700 h-4 mr-2"></div>
                      <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-3/4"></div>
                    </div>
                    <div className="flex">
                      <div className="w-16 bg-gray-100 dark:bg-gray-700 h-4 mr-2"></div>
                      <div className="h-4 bg-customBlue-100 dark:bg-customBlue-800/70 rounded w-1/2"></div>
                    </div>
                    <div className="flex">
                      <div className="w-16 bg-gray-100 dark:bg-gray-700 h-4 mr-2"></div>
                      <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded flex-1"></div>
                    </div>
                    <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-3/4 ml-6"></div>
                    <div className="h-4 bg-customBlue-100 dark:bg-customBlue-800/70 rounded w-5/6 ml-6"></div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <div className="h-8 bg-customBlue-500 dark:bg-customBlue-600 rounded w-1/3 flex items-center justify-center text-white text-xs">Generate</div>
                    <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
              
              {/* AI badge */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-white dark:bg-gray-800 rounded-full border border-customBlue-200 dark:border-customBlue-900/30 flex items-center justify-center z-10 shadow-lg transform hover:rotate-12 transition-transform">
                <div className="text-center animate-pulse">
                  <div className="text-xs text-gray-500 dark:text-gray-400">powered by</div>
                  <div className="font-bold text-customBlue-500 dark:text-customBlue-400 tracking-wide text-lg">AI + Prompts</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-customBlue-100 dark:bg-customBlue-900/50 rounded-lg flex items-center justify-center shadow-sm transform rotate-12 animate-bounce" style={{animationDuration: "3s"}}>
                <Wand2 className="h-6 w-6 text-customBlue-500 dark:text-customBlue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
