
import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  category: "Prompt-built" | "No-Code" | "API-connected" | "AI-integrated";
  status?: "In Progress" | "Completed" | "Coming Soon";
  badge?: string;
  imageClassName?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  link,
  badge,
}) => {
  return (
    <div className="group h-full rounded-xl overflow-hidden bg-white dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Card content */}
      <div className="p-5 flex flex-col h-full">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs font-medium px-2 py-0.5 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700"
            >
              {tag}
            </Badge>
          ))}
          {badge && (
            <Badge
              variant="default"
              className="text-xs font-medium px-2 py-0.5 bg-customBlue-500 text-white"
            >
              {badge}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-customBlue-600 dark:group-hover:text-customBlue-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Link button */}
        {link && (
          <div className="mt-auto pt-2 flex items-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-customBlue-600 dark:text-customBlue-400 hover:text-customBlue-800 dark:hover:text-customBlue-300 transition-colors"
            >
              View Project
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
