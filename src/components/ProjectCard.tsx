
import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  category?: "Prompt-built" | "No-Code" | "AI-integrated" | "API-connected";
  status?: "In Progress" | "Completed" | "Coming Soon";
  badge?: string;
}

const ProjectCard = ({ title, description, tags, image, link, category, status, badge }: ProjectCardProps) => {
  // Define category badges with colors
  const categoryColors = {
    "Prompt-built": "bg-purple-100 text-purple-700",
    "No-Code": "bg-blue-100 text-blue-700",
    "AI-integrated": "bg-orange-100 text-orange-700",
    "API-connected": "bg-teal-100 text-teal-700"
  };
  
  const statusColors = {
    "In Progress": "bg-yellow-100 text-yellow-700 border-yellow-200",
    "Completed": "bg-green-100 text-green-700 border-green-200",
    "Coming Soon": "bg-gray-100 text-gray-700 border-gray-200"
  };
  
  const categoryColor = category ? categoryColors[category] : "bg-gray-100 text-gray-700";
  const statusColor = status ? statusColors[status] : "";
  
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
        
        {/* Status badge */}
        {status && (
          <div className="absolute top-3 right-3 z-20">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColor}`}>
              {status}
            </span>
          </div>
        )}
        
        {/* Special badge/ribbon */}
        {badge && (
          <div className="absolute -right-12 top-5 rotate-45 z-30">
            <div className="bg-customBlue-500 text-white text-xs py-1 px-10 font-bold shadow-md">
              {badge}
            </div>
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
                className="bg-white/90 backdrop-blur-sm text-customBlue-700 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-0">
        <h3 className="text-xl font-semibold group-hover:text-customBlue-600 transition-colors relative">
          {title}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-customBlue-500 transition-all duration-300 group-hover:w-1/3"></span>
        </h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </CardContent>
      
      <CardFooter>
        {link ? (
          <Button asChild variant="outline" className="w-full group hover:bg-customBlue-50 hover:text-customBlue-600 hover:border-customBlue-200">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <span>Preview Project</span> 
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
