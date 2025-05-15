
import React from "react";
import { Code, Database, Globe, Settings, Terminal, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  skills: string[];
}

const TechStackSection = () => {
  const skillGroups: SkillGroup[] = [
    {
      category: "Frontend",
      icon: <Code className="h-5 w-5 text-customBlue-500" />,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Basic React"]
    },
    {
      category: "Authentication",
      icon: <Globe className="h-5 w-5 text-customBlue-500" />,
      skills: ["Google Sign-In / Login", "OAuth Integration"]
    },
    {
      category: "APIs",
      icon: <Globe className="h-5 w-5 text-customBlue-500" />,
      skills: ["Data Fetching", "JSON Display", "Live API Integrations"]
    },
    {
      category: "Databases/Backend",
      icon: <Database className="h-5 w-5 text-customBlue-500" />,
      skills: ["Firebase Studio", "Supabase"]
    },
    {
      category: "No-Code Tools",
      icon: <Zap className="h-5 w-5 text-customBlue-500" />,
      skills: ["Bubble.io", "GlideApp"]
    },
    {
      category: "Automation",
      icon: <Settings className="h-5 w-5 text-customBlue-500" />,
      skills: ["Make.com", "N8N"]
    },
    {
      category: "Deployment",
      icon: <Globe className="h-5 w-5 text-customBlue-500" />,
      skills: ["Vercel", "GitHub Pages"]
    },
    {
      category: "Dev Tools",
      icon: <Terminal className="h-5 w-5 text-customBlue-500" />,
      skills: ["Replit", "Visual Studio Code", "CodePen"]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 relative bg-white dark:bg-gray-900">
      {/* Background image with overlay - more subtle */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-[0.03] dark:opacity-[0.05]"
        />
      </div>

      {/* Decorative background elements - more subtle */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-customBlue-50 dark:bg-customBlue-900/20 rounded-full opacity-20 dark:opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-16 w-48 h-48 bg-customBlue-50 dark:bg-customBlue-900/20 rounded-full opacity-20 dark:opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-2 px-3 py-1 bg-customBlue-50 dark:bg-customBlue-900/30 text-customBlue-600 dark:text-customBlue-300 text-sm font-medium rounded-full">My Toolkit</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Tech Stack</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My diverse toolkit allows me to create effective solutions using both traditional development 
            and modern no-code approaches, ensuring the right tools for each specific challenge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <Card key={index} className="border-none shadow-md dark:bg-gray-800/70 dark:text-white hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-2 flex flex-row items-center gap-3">
                <div className="p-2 bg-customBlue-50 dark:bg-customBlue-900/50 text-customBlue-500 dark:text-customBlue-300 rounded-md group-hover:bg-customBlue-100 dark:group-hover:bg-customBlue-800 transition-colors">
                  {group.icon}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-customBlue-600 dark:group-hover:text-customBlue-300 transition-colors">
                  {group.category}
                </h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-customBlue-400 dark:bg-customBlue-500 rounded-full"></span>
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
