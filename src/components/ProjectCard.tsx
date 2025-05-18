
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  category: "Prompt-built" | "No-Code" | "API-connected" | "AI-integrated";
  status?: "In Progress" | "Completed" | "Coming Soon";
  badge?: string;
}

const ProjectCard = ({ title, description, image, tags, link, status, badge }: ProjectCardProps) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };
  
  return (
    <Card className="overflow-hidden group h-full border-none shadow-md hover:shadow-lg transition-all dark:bg-gray-800/70 hover:-translate-y-1 duration-300">
      {/* Image Container */}
      <div className="relative">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="h-full w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <img 
                src={image} 
                alt={title} 
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </a>
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <img 
                src={image} 
                alt={title} 
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
        </AspectRatio>
        
        {/* Status Badge */}
        {status && (
          <div className="absolute top-3 right-3">
            <Badge 
              variant="outline" 
              className={`
                ${status === "In Progress" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/70 dark:text-yellow-300" : ""} 
                ${status === "Completed" ? "bg-green-100 text-green-700 dark:bg-green-900/70 dark:text-green-300" : ""} 
                ${status === "Coming Soon" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/70 dark:text-purple-300" : ""}
                text-xs py-1 font-medium shadow-sm dark:border-white/10 backdrop-blur-sm
              `}
            >
              {status}
            </Badge>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Special Badge */}
        {badge && (
          <div className="mb-3">
            <Badge className="bg-customBlue-100 hover:bg-customBlue-200 text-customBlue-700 dark:bg-customBlue-900/50 dark:text-customBlue-300 dark:hover:bg-customBlue-800/70">
              {badge}
            </Badge>
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 dark:text-white">
          {link ? (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group-hover:text-customBlue-600 dark:group-hover:text-customBlue-400 transition-colors flex items-center gap-1"
            >
              {title}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ) : (
            <span>{title}</span>
          )}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {truncateText(description, 150)}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, i) => (
            <Badge 
              key={i} 
              variant="secondary" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
