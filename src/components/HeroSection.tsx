
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              I Build With <span className="text-gradient">Prompts</span>, <br/>
              Not Code
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Transforming ideas into digital reality through AI tools, 
              no-code platforms, and creative problem-solving.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-customGreen-500 hover:bg-customGreen-600">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-scale-in">
            <div className="relative">
              <div className="rounded-xl bg-gradient-to-br from-customGreen-400 to-customGreen-600 p-1">
                <div className="bg-white rounded-lg p-6 md:p-8">
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
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="text-xs text-gray-500">powered by</div>
                  <div className="font-semibold text-customGreen-500">AI</div>
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
