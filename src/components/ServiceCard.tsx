
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="group h-full overflow-hidden relative border-none shadow-md bg-gradient-to-br from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-customGreen-400 to-customGreen-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-customGreen-50 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>
      
      <CardHeader>
        <div className="relative z-10">
          <div className="bg-customGreen-50 text-customGreen-500 p-3 rounded-lg w-fit mb-4 
                        group-hover:bg-customGreen-500 group-hover:text-white transition-all duration-300 
                        shadow-sm group-hover:shadow-customGreen-200 group-hover:shadow-md">
            {icon}
          </div>
          <h3 className="text-xl font-semibold group-hover:text-customGreen-600 transition-colors">
            {title}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-customGreen-500 transition-all duration-300 group-hover:w-1/2"></span>
          </h3>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{description}</p>
        
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="mt-6 inline-block overflow-hidden relative">
              <span className="text-sm text-customGreen-600 flex items-center gap-1 group-hover:translate-x-0 transform -translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                Learn more
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-customGreen-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 backdrop-blur-sm bg-white/90 border border-customGreen-100 shadow-lg shadow-customGreen-50/30">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-customGreen-700">{title}</h4>
              <p className="text-sm text-gray-600">
                {description} This service is tailored to meet your specific business needs using cutting-edge prompt engineering and no-code solutions.
              </p>
              <div className="pt-2 flex justify-end">
                <span className="text-xs text-customGreen-500 flex items-center">
                  Get started <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
