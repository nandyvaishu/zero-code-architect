
import React from "react";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  category: "Prompt-built" | "No-Code" | "API-connected" | "AI-integrated";
  status?: "In Progress" | "Completed" | "Coming Soon";
  badge?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  image,
  link,
  status,
  badge,
}) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full dark:bg-gray-800/70 hover:-translate-y-1">
      {/* Image wrapper */}
      <div className="relative aspect-[4/3] bg-white dark:bg-gray-900 p-2">
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs dark:bg-gray-900/90 bg-white/90 dark:text-white"
            >
              {tag}
            </Badge>
          ))}
          {badge && (
            <Badge
              variant="default"
              className="bg-customBlue-500 text-white text-xs"
            >
              {badge}
            </Badge>
          )}
        </div>

        <h3 className="text-lg font-semibold mb-2 dark:text-white">
          {link ? (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-customBlue-500 transition-colors"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
          {description}
        </p>

        {status && (
          <p className="mt-3 text-xs text-gray-400 italic">
            Status: {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
