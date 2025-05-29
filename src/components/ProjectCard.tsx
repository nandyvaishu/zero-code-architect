import React from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  demoLink?: string;
  category: "Prompt-built" | "No-Code" | "API-connected" | "AI-integrated";
  status?: "In Progress" | "Completed" | "Coming Soon";
  badge?: string;
  githubLink?: string;
  imageClassName?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  image,
  link,
  demoLink,
  status,
  badge,
  githubLink,
  imageClassName,
}) => {
  return (
    <div className="group h-full rounded-xl overflow-hidden bg-white dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Top border animation */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-customBlue-300 to-customBlue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-video bg-gray-50 dark:bg-gray-900/40 p-3 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-105 ${imageClassName || ""}`}
          />
        </div>

        {/* Status badge */}
        {status && (
          <div
            className={`absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 
              ${status === "In Progress"
                ? "bg-amber-500/90 text-white animate-pulse"
                : status === "Completed"
                ? "bg-green-500/90 text-white"
                : "bg-gray-500/90 text-white"}`}
          >
            {status}
          </div>
        )}

        {/* Overlay hover effect */}
        <div className="absolute inset-0 bg-customBlue-500/0 group-hover:bg-customBlue-500/10 transition-all duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col h-[calc(100%-9rem)] relative">
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-customBlue-50 dark:bg-customBlue-900/20 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl"></div>

        {/* Tags and badge */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs font-medium px-2 py-0.5 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-customBlue-50 hover:border-customBlue-200 dark:hover:bg-customBlue-900/30 dark:hover:border-customBlue-800"
              style={{
                transitionDelay: `${index * 50}ms`,
                transform: "translateY(0)",
              }}
            >
              {tag}
            </Badge>
          ))}
          {badge && (
            <Badge
              variant="default"
              className="text-xs font-medium px-2 py-0.5 bg-customBlue-500 text-white transition-all duration-500 hover:bg-customBlue-600"
            >
              {badge}
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-customBlue-600 dark:group-hover:text-customBlue-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
          {description}
        </p>

        {/* Links */}
        <div className="mt-auto pt-2 flex flex-col gap-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-customBlue-600 dark:text-customBlue-400 hover:text-customBlue-800 dark:hover:text-customBlue-300 transition-colors relative group/link"
            >
              <span className="relative z-10 flex items-center">
                View Project
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-all duration-300 group-hover/link:translate-x-1.5" />
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-customBlue-400/50 group-hover/link:w-full transition-all duration-500"></span>
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors relative group/demo"
            >
              <span className="relative z-10 flex items-center">
                {title.includes("Job Scraper") ? "View Spreadsheet" : "Watch Demo"}
                <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-all duration-300 group-hover/demo:translate-x-1.5" />
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400/50 group-hover/demo:w-full transition-all duration-500"></span>
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors relative group/github"
            >
              <span className="relative z-10 flex items-center">
                <Github className="mr-1.5 h-4 w-4" /> View Code
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-400/50 group-hover/github:w-full transition-all duration-500"></span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
