
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

const ProjectCard = ({ title, description, tags, image, link }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden card-hover border-b-4 border-transparent hover:border-customGreen-500 group">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 p-3 z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white/80 backdrop-blur-sm text-customGreen-700 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <CardHeader>
        <h3 className="text-xl font-semibold group-hover:text-customGreen-600 transition-colors">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      </CardContent>
      <CardFooter>
        {link ? (
          <Button asChild variant="outline" className="w-full group">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
              <span>View Project</span> 
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
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
