
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="group h-full card-hover border-t-4 border-t-transparent hover:border-t-customGreen-500 transition-all duration-300">
      <CardHeader>
        <div className="relative">
          <div className="bg-customGreen-50 text-customGreen-500 p-3 rounded-lg w-fit mb-4 
                        group-hover:bg-customGreen-500 group-hover:text-white transition-colors relative z-10">
            {icon}
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-customGreen-100 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-[2.5] transition-all duration-500"></div>
        </div>
        <h3 className="text-xl font-semibold group-hover:text-customGreen-600 transition-colors">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{description}</p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="mt-4 inline-block">
              <span className="text-sm text-customGreen-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <div>
                <h4 className="text-sm font-semibold">{title}</h4>
                <p className="text-sm text-gray-600">
                  {description} This service is tailored to meet your specific business needs.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
