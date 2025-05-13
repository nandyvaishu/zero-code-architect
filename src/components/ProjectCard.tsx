
import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  category?: "Prompt-built" | "No-Code" | "AI-integrated" | "API-connected";
}

const ProjectCard = ({ title, description, tags, image, link, category }: ProjectCardProps) => {
  // Define category badges with colors
  const categoryColors = {
    "Prompt-built": "bg-purple-100 text-purple-700",
    "No-Code": "bg-blue-100 text-blue-700",
    "AI-integrated": "bg-orange-100 text-orange-700",
    "API-connected": "bg-teal-100 text-teal-700"
  };
  
  const categoryColor = category ? categoryColors[category] : "bg-gray-100 text-gray-700";
  
  return (
    <Card className="overflow-hidden card-hover h-full border-none shadow-md group">
      <div className="relative h-48 overflow-hidden">
        {/* Category badge */}
        {category && (
          <div className="absolute top-3 left-3 z-20">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColor}`}>
              {category}
            </span>
          </div>
        )}
        
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
        
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute bottom-0 left-0 w-full p-3 z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/90 backdrop-blur-sm text-customGreen-700 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-0">
        <h3 className="text-xl font-semibold group-hover:text-customGreen-600 transition-colors relative">
          {title}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-customGreen-500 transition-all duration-300 group-hover:w-1/3"></span>
        </h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </CardContent>
      
      <CardFooter>
        {link ? (
          <Button asChild variant="outline" className="w-full group hover:bg-customGreen-50 hover:text-customGreen-600 hover:border-customGreen-200">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <span>View Project</span> 
              <ExternalLink className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        ) : (
          <Button disabled variant="outline" className="w-full cursor-not-allowed">
            <span className="mr-2">Coming Soon</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 rounded-full bg-gray-400 animate-pulse"></div>
              <div className="w-1 h-1 rounded-full bg-gray-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-1 rounded-full bg-gray-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
