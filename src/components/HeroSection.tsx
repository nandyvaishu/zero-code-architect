
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-customGreen-50 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-12 -right-12 w-80 h-80 bg-customGreen-50 rounded-full opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <span className="absolute -left-6 -top-6 text-8xl text-customGreen-100 font-bold opacity-30">"</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance relative z-10">
                I Build With <span className="text-gradient relative">
                  Prompts
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,5 Q50,0 100,5 T200,5" stroke="#4BB543" strokeWidth="2" fill="none" />
                  </svg>
                </span>, <br/>
                Not Code
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Transforming ideas into digital reality through AI tools, 
              no-code platforms, and creative problem-solving.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-customGreen-500 hover:bg-customGreen-600 relative overflow-hidden group">
                <a href="#projects">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-customGreen-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group relative">
                <a href="#contact" className="overflow-hidden">
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-customGreen-50 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></span>
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-scale-in">
            <div className="relative perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-customGreen-400/30 to-customGreen-600/30 blur-xl rounded-full transform rotate-12"></div>
              <div className="rounded-xl bg-gradient-to-br from-customGreen-400 to-customGreen-600 p-1 shadow-lg transform hover:rotate-2 transition-transform">
                <div className="bg-white rounded-lg p-6 md:p-8 transform hover:-rotate-1 transition-transform">
                  <div className="flex items-center mb-4">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="ml-4 h-5 bg-gray-100 rounded flex-1"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                    <div className="h-4 bg-customGreen-100 rounded w-4/6"></div>
                    <div className="h-4 bg-gray-100 rounded w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    <div className="h-4 bg-customGreen-100 rounded w-1/2"></div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <div className="h-8 bg-customGreen-500 rounded w-1/4"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full border border-customGreen-200 flex items-center justify-center z-10 shadow-lg transform hover:rotate-12 transition-transform">
                <div className="text-center animate-pulse">
                  <div className="text-xs text-gray-500">powered by</div>
                  <div className="font-bold text-customGreen-500 tracking-wide">AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
