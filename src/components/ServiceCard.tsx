
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { ArrowRight } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip"; 

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="group h-full overflow-hidden relative border-none shadow-md bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 dark:text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-customBlue-400 to-customBlue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-customBlue-50 dark:bg-customBlue-500/10 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"></div>
      
      <CardHeader>
        <div className="relative z-10">
          <div className="bg-customBlue-50 text-customBlue-500 dark:bg-customBlue-900/50 dark:text-customBlue-300 p-3 rounded-lg w-fit mb-4 
                        group-hover:bg-customBlue-500 group-hover:text-white dark:group-hover:bg-customBlue-600 transition-all duration-300 
                        shadow-sm group-hover:shadow-customBlue-200 dark:group-hover:shadow-customBlue-900/50 group-hover:shadow-md">
            {icon}
          </div>
          <h3 className="text-xl font-semibold group-hover:text-customBlue-600 dark:text-white dark:group-hover:text-customBlue-400 transition-colors">
            {title}
          </h3>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10">
        <p className="text-gray-600 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200 transition-colors">{description}</p>
        
        <TooltipProvider>
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="mt-6 inline-block overflow-hidden relative">
                <span className="text-sm text-customBlue-600 dark:text-customBlue-400 flex items-center gap-1 group-hover:translate-x-0 transform -translate-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                  Learn more
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border border-customBlue-100 dark:border-customBlue-900/50 shadow-lg shadow-customBlue-50/30 dark:shadow-customBlue-900/20 dark:text-white">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-customBlue-700 dark:text-customBlue-400">{title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {description} This service is tailored to meet your specific business needs using cutting-edge prompt engineering and no-code solutions.
                </p>
                <div className="pt-2 flex justify-end">
                  <span className="text-xs text-customBlue-500 dark:text-customBlue-400 flex items-center">
                    Get started <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
