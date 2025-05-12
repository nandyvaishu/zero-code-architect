
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
    <Card className="overflow-hidden card-hover">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 my-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-customGreen-50 text-customGreen-700 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        {link ? (
          <Button asChild variant="outline" className="w-full">
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button disabled variant="outline" className="w-full">
            Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
