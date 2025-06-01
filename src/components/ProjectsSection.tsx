import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal"; // Modal component

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const projects = [
    {
      title: "Farm to Frontend ",
      description:
        "A sleek, fully functional food website crafted with zero manual coding—just smart prompts. Features a responsive design, interactive shop, blog, and contact form, all built using HTML, CSS, and JavaScript",
      tags: ["HTML", "CSS", "JavaScript", "Prompt"],
      image: "https://i.ibb.co/HfXpFZgZ/In-Shot-20250519-143936568.jpg",
      link: "https://nandhini7390.github.io/Farm-fresh/",
      githubLink: "https://github.com/NANDHINI7390/Farm-fresh.git",
      category: "No-Code" as const,
      badge: "AI + Automation",
      caseStudy: `
**Challenge:** Build a fully functional website for a food brand using only prompt engineering without manual coding.

**Approach:** Used ChatGPT to generate HTML, CSS, and JavaScript components for each section—hero, products, blog, and contact—iteratively refining the design through smart prompts.

**Result:**
- Clean responsive layout.
- Functional shopping section, blog, and contact form.
- No coding done manually—just prompt crafting.

**Outcome:** Showcased the power of prompt engineering in creating complete websites.`,
    },
    {
      title: "Job Scraper Automation Suite",
      description:
        "Fully automated Job Scraper Workflow using n8n, integrating Gmail, RSS, Google Sheets, and Telegram. Fetches daily jobs and delivers them via Telegram.",
      tags: ["Automation", "Job Scraper", "N8N", "Google Sheets API", "Telegram Bot"],
      image: "https://i.ibb.co/5WvcmS5C/In-Shot-20250521-071315412.jpg",
      link: "https://docs.google.com/spreadsheets/d/1lzfqugnpNemL57n0ktGyLQlrY6kMOpZMvL7A9nvtydc/edit?gid=0#gid=0",
      badge: "Featured",
      category: "API-connected" as const,
      caseStudy: `
**Challenge:** Automate daily job extraction and delivery without writing code.

**Approach:** Built a complete n8n workflow using visual nodes:
- RSS for job feeds,
- HTML Extract for parsing data,
- Gmail/Telegram for delivery,
- Google Sheets for storage.

**Result:**
- Zero manual intervention.
- Jobs delivered daily in Telegram & Sheets.
- Easy to maintain & scalable.

**Impact:** A reusable no-code framework for job or data scraping tasks.`,
    },
    {
      title: "Remodified Ecom",
      description:
        "Redesigned an outdated CodePen site using modern HTML, CSS, JavaScript, and Bootstrap. Improved UI/UX, responsive layout, and interactivity.",
      tags: ["HTML", "CSS", "JS", "Bootstrap", "Prompts"],
      image: "https://i.ibb.co/0jfRKkf5/In-Shot-20250519-144050859.jpg",
      link: "https://nandhini7390.github.io/superecom/",
      githubLink: "https://github.com/NANDHINI7390/superecom.git",
      category: "AI-integrated" as const,
      badge: "Featured",
      caseStudy: `
**Challenge:** Modernize a legacy CodePen design into a functional ecommerce site.

**Approach:** Redesigned layout and interactivity using prompts to generate Bootstrap, HTML, and JavaScript. Improved UX, mobile responsiveness, and visual appeal.

**Result:**
- Cleaner layout.
- Responsive shopping cards and navigation.
- Enhanced with Bootstrap interactivity.

**Impact:** Demonstrated how AI-generated code can elevate outdated UIs into modern experiences.`,
    },
    {
      title: "Cricket Fantasy App",
      description:
        "Fantasy cricket app using LovableAI with Google login, live CricAPI data, wallet, leagues, and a chatbot prototype.",
      tags: ["Lovable AI", "LowCode", "Fantasy Cricket", "Live API", "Dream11 Clone"],
      image: "https://i.ibb.co/NdKpttnS/In-Shot-20250519-114121114.jpg",
      link: "https://cricket-fantasy-flare.vercel.app/",
      githubLink: "https://github.com/NANDHINI7390/cricket-fantasy-flare.git",
      category: "Prompt-built" as const,
      badge: "Featured",
      caseStudy: `
**Challenge:** Develop a fantasy cricket app using AI/low-code tools.

**Approach:** Leveraged Lovable AI to design and integrate:
- Google login,
- Real-time data via CricAPI,
- Wallet and league systems.

**Result:**
- Full UX flow with API integration.
- User dashboard with team creation.
- Chatbot concept added for engagement.

**Impact:** Brought a Dream11-like product to life using minimal hand coding.`,
    },
    {
      title: "FortuneVerse: AI-Powered Fortune Cookie App",
      description:
        "Built with Next.js, Genkit, and Docker, FortuneVerse generates and rewrites fortunes using Google's Gemini model. Features modern UI, API, and containerized deployment.",
      tags: ["Docker", "Next.js", "Generative AI", "React", "API Development"],
      image: "https://i.ibb.co/q3Ww0Ppq/In-Shot-20250524-120514247.jpg",
      link: "https://youtu.be/MApv_XHLJxU?si=vqRqfJXKI4gjU9ae",
      githubLink: "https://github.com/nandyvaishu/studio.git",
      category: "Prompt-built" as const,
      badge: "Featured",
      caseStudy: `
**Challenge:** Create an interactive web app using generative AI to simulate fortune cookies.

**Approach:** Built with:
- Next.js (UI & logic),
- Genkit for Gemini AI integration,
- Docker for containerization,
- ShadCN for styling.

**Result:**
- Users receive and edit fortunes.
- Gemini rewrites them dynamically.
- Clean API and UI with full-stack structure.

**Impact:** Blended frontend innovation with AI and backend infra into one responsive product.`,
    },
    {
      title: "Recipe Finder & Manager | No-Code Glide App",
      description:
        "No-code Glide app for browsing, managing, and editing personalized recipes with category filtering and a responsive UI.",
      tags: ["No-Code", "Glide App", "Recipe App", "Responsive Design", "Data Relations"],
      image: "https://i.ibb.co/7m6RtR6/In-Shot-20250524-132839611.jpg",
      link: "https://go.glideapps.com/play/aXUh1GNiPgJjbWPndJ0Z/dl/1c370a",
      category: "Prompt-built" as const,
      badge: "Featured",
      caseStudy: `
**Challenge:** Develop a personalized recipe management system with zero code.

**Approach:** Used Glide’s no-code platform to:
- Add category filters (Veg/Non-Veg/Dessert),
- Enable editing and image uploading,
- Link data tables using Glide’s visual logic.

**Result:**
- Fully editable and responsive recipe book.
- Easy navigation and user-friendly UI.
- Auth system for secure access.

**Impact:** Proved that complex relational apps can be built quickly with no-code tools and strong UX.`,
    },
  ];

  const categories = Array.from(new Set(projects.map((p) => p.category)));

  const handleViewCaseStudy = (caseStudy: string) => {
    setActiveCaseStudy(caseStudy);
    setOpen(true);
  };

  const filteredProjects = activeFilter
    ? projects.filter((p) => p.category === activeFilter)
    : projects;

  return (
    <section id="projects" className="py-20 relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 transform transition-transform duration-1000 hover:scale-110">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80"
          alt="Background"
          className="w-full h-full object-cover object-center opacity-[0.04] dark:opacity-[0.06]"
        />
      </div>

      {/* Decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-customBlue-50 dark:bg-customBlue-900/20 rounded-full opacity-20 dark:opacity-10 blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -left-16 w-48 h-48 bg-customBlue-50 dark:bg-customBlue-900/20 rounded-full opacity-20 dark:opacity-10 blur-3xl animate-pulse-glow"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 relative animate-slide-in-bottom">
          <div className="inline-block mb-2 px-3 py-1 bg-customBlue-50 dark:bg-customBlue-900/30 text-customBlue-600 dark:text-customBlue-300 text-sm font-medium rounded-full animate-pulse-glow">
            My Work
          </div>
          <div className="inline-block relative">
            <div className="absolute -top-10 -right-10 text-6xl text-customBlue-100 dark:text-customBlue-900/30 font-bold opacity-30 animate-float">
              {projects.length}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10 dark:text-white animate-typing">
              Recent Projects
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Explore the solutions I've built using AI tools, no-code platforms, and visual development environments.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8 stagger-children">
            <Button
              variant={activeFilter === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(null)}
              className={`${activeFilter === null ? "bg-customBlue-500 text-white rounded-md" : "hover:bg-customBlue-50 dark:hover:bg-customBlue-900/30 rounded-md"} transition-all duration-300 animate-bounce-slow`}
            >
              All Projects
            </Button>
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`${activeFilter === category ? "bg-customBlue-500 text-white rounded-md" : "hover:bg-customBlue-50 dark:hover:bg-customBlue-900/30 rounded-md"} transition-all duration-300`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              style={{ animationDelay: `${index * 150}ms` }}
              caseStudy={project.caseStudy}
              onViewCaseStudy={handleViewCaseStudy}
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="flex justify-center mt-12">
          <div className="relative group cursor-pointer animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-customBlue-600 dark:text-customBlue-400 font-medium flex items-center group-hover:text-customBlue-800 dark:group-hover:text-customBlue-300 transition-colors duration-300">
              More projects coming soon
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-customBlue-400 group-hover:w-full transition-all duration-700"></div>
          </div>
        </div>
      </div>

      <CaseStudyModal
        isOpen={open}
        onClose={() => setOpen(false)}
        content={activeCaseStudy || ""}
      />
    </section>
  );
};

export default ProjectsSection;
