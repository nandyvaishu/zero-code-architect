import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CaseStudyModal from "./CaseStudyModal"; // Modal component

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showUpcoming, setShowUpcoming] = useState(false);
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
        "Fully automated Job Scraper Workflow using n8n, integrating Gmail, RSS, Google Sheets, and Telegram. Fetches daily jobs and delivers them via Telegram.The output of this automation can be viewed directly through the linked Google Spreadsheet, which reflects the live data processed by the job scraping workflow previously hosted on n8n.",
 tags: ["Automation", "Job Scraper", "N8N", "Google Sheets API", "Telegram Bot"],
      link: "https://docs.google.com/spreadsheets/d/1lzfqugnpNemL57n0ktGyLQlrY6kMOpZMvL7A9nvtydc/edit?gid=0#gid=0",
      image: "https://i.ibb.co/5WvcmS5C/In-Shot-20250521-071315412.jpg",
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
        "Fantasy cricket app with Google login, live CricAPI data, wallet, leagues, and a chatbot prototype.Live Matches and Scores may occasionally be unavailable due to free API limits, which reset daily. This was a cost-effective choice during development and can be upgraded for full-time real-time support.",
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
        "Built with Next.js, Genkit, and Docker, FortuneVerse generates and rewrites fortunes using Google's Gemini model. Features modern UI, API, and containerized deployment.The live deployment was previously hosted on Render's free tier. While it’s currently paused, I’d be happy to share a Firebase Studio preview or provide a quick walkthrough upon request.The complete codebase is available on GitHub.",
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
    {
      title: "FortuneVerse: AI-Powered Fortune Cookie App",
      description:
        "Built with Next.js, Genkit, and Docker, FortuneVerse generates and rewrites fortunes using Google's Gemini model. Features modern UI, API, and containerized deployment.The live deployment was previously hosted on Render's free tier. While it’s currently paused, I’d be happy to share a Firebase Studio preview or provide a quick walkthrough upon request.The complete codebase is available on GitHub.",
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
      title: "BloomShop – A Luxury E-commerce Web Experience",
      description:
        "BloomShop is a sleek, responsive e-commerce website designed to help luxury brands establish a high-end digital presence. With a rich royal color palette, modern UI, and smooth shopping flow, it offers an elegant solution for businesses seeking a fast, premium online store experience.",
      tags: ["E-commerce Website", "Responsive Web Design", "Online Store", "UI/UX Design", "Client-Facing Demo"],
      image: "https://i.ibb.co/fdPt8m12/In-Shot-20250616-133056926.jpg",
      link: "https://launch-and-bloom-shop.vercel.app/",
      githubLink: "https://github.com/nandyvaishu/launch-and-bloom-shop.git",
      category: "Prompt-built" as const,
      badge: "Featured",
      caseStudy: `
**Challenge:**
- Needed a quick e-commerce demo for luxury clients.
-Design had to feel premium and responsive.

**Approach:** :
- Used AI with a custom prompt,
- Applied a rich, royal color palette and clean layout.

**Result:**
- Fully functional front-end store with cart and checkout.
- Ready for client demos, no backend required.

**Impact:** 
-Showcased prompt engineering power.`,
    },
    {
      title: "SoulSync – An Emotional AI Companion Web App",
      description:
        "SoulSync is a full-featured emotional wellness companion web application designed to provide comfort, conversation, and care. It features a lifelike, talking avatar that interacts through both voice and text, tracks user mood, suggests mood-based movies and songs, and offers journaling space and a comfort room with ambient experiences like rain sounds and calming visuals.Built with a React-based frontend and powered by Supabase as the backend for managing chat history, mood logs, and user preferences. SoulSync is fully responsive, secure, and optimized for real-time emotional support and personal reflection.",
      tags: ["PersonalWellnessPlatform", "WebSpeechAPI", "SpeechSynthesis", "Supabase", "React","Voice Chat"],
      image: "https://i.ibb.co/DPkGkT6w/In-Shot-20250616-214235632.jpg",
      link: "https://gentle-sway-companion.vercel.app/",
      githubLink: "https://github.com/nandyvaishu/gentle-sway-companion.git",
      category: "Prompt-built" as const,
      badge: "Featured",
      caseStudy: `
**Challenge:**
- Create a real-time emotional companion with human-like avatar and voice interaction.
-Store and manage user-generated data securely.

**Approach:** :
- Integrated Web Speech API for voice input and SpeechSynthesis for avatar responses.
- Implemented mood-based content suggestions (e.g., Spotify/Netflix links) in a dedicated recommendations panel.

**Result:**
- Seamless voice-enabled conversation with a human-like avatar.
- Clean navigation structure and scalable UI for future SaaS potential.



**Impact:** 
-Demonstrates advanced frontend engineering and UX strategy in emotional AI space.
-Showcases use of browser-native APIs and Supabase integration without relying on paid AI APIs.
-Suitable for portfolio, client pitch, or as an MVP for a SaaS wellness product.`,
    },
    {
 title: "AI-Powered Legal Contract Analyzer",
 description:
 "An upcoming intelligent web app designed to automate the analysis of legal contracts. It will extract key clauses, highlight potential risks, and provide an interactive AI-powered Q&A interface — all secured with Supabase authentication and storage.",
 tags:
      ["AI", "Legal Tech", "Automation", "React", "Supabase", "LLM", "LangChain.js", "SaaS", "Upcoming"],
 link: "https://contract-risk-lens.vercel.app/",
 githubLink: "https://github.com/NANDHINI7390/contract-risk-lens",
 image: "https://i.ibb.co/jK6jhvC/In-Shot-20250605-090844332.jpg", 
 badge: "Upcoming Project | MVP in Development | AI & Legal Tech",
 category: "Artificial Intelligence / SaaS / Legal Technology" as const,
 caseStudy: `
 **Challenge:**
 Manually reviewing legal contracts is slow and prone to errors. The challenge is building an AI-driven tool that can accurately parse contracts, highlight risks, and answer user questions interactively while maintaining data security.

 **Approach:**
 Leverage LovableAI to rapidly prototype the frontend with React and AI integration, connecting to Supabase for user authentication and secure contract storage. Use LLMs (OpenAI/Claude) for natural language contract analysis and interactive Q&A. Plan iterative development with prompt engineering for accurate AI responses.

 **Result:**
 (Expected) A cloud-based, scalable MVP that automates contract reviews, reducing manual workload and speeding up decision-making with AI insights.
 The app will offer a seamless, user-friendly interface accessible on any device.

 **Impact:**
 Empowers legal professionals and businesses to improve contract review efficiency and accuracy. Demonstrates practical AI integration in SaaS products, enhancing client engagement and business growth potential.
 `,
 isUpcoming: true,
 }, {
 title: "Placeholder Project 1",
 description:
 "This is a placeholder description for an upcoming project. It will detail the project's goals, technologies used, and expected impact. Stay tuned for updates!",
 tags: ["Placeholder", "Upcoming", "Tech 1", "Tech 2"],
 image: "https://via.placeholder.com/400x250", // Placeholder image URL
 link: "#", // Placeholder link
 githubLink: "#", // Placeholder GitHub link
 category: "Upcoming" as const,
 badge: "Coming Soon",
 caseStudy: `
 **Challenge:** Placeholder challenge description.

 **Approach:** Placeholder approach description.

 **Result:** Placeholder result description.

 **Impact:** Placeholder impact description.
 `,
 isUpcoming: true,
 },
 {
 title: "Placeholder Project 2",
 description:
 "Another exciting project in the works! This placeholder outlines the core concept and potential applications. More details will be available soon.",
 tags: ["Placeholder", "Upcoming", "Innovation", "Research"],
 image: "https://via.placeholder.com/400x250", // Placeholder image URL
 link: "#", // Placeholder link
 githubLink: "#", // Placeholder GitHub link
 category: "Upcoming" as const,
 badge: "In Development",
 caseStudy: `
 **Challenge:** Placeholder challenge description for project 2.

 **Approach:** Placeholder approach description for project 2.

 **Result:** Placeholder result description for project 2.

 **Impact:** Placeholder impact description for project 2.
 `,
 isUpcoming: true,
 },
    // Recent Projects
    {
      title: "AI-Powered Cricket Fantasy Assistant",
      description:
        "An intelligent chatbot that provides real-time cricket match data, live scores, and AI-generated fantasy team recommendations. Get instant insights on player performances, captain/vice-captain suggestions, and strategic fantasy advice powered by live cricket APIs and OpenAI. Features include live match tracking, player analysis, scorecard breakdowns, and personalized team building guidance for fantasy cricket enthusiasts.It is the core feature of my Cricket Fantasy App",
      tags: ["Real-time Data", "Live Scores", "Sports Chatbot", "Fantasy Recommendations","AI Assistant","Cricket Fantasy"],
      image: "https://i.ibb.co/wNq7qZ4p/In-Shot-20250528-112036172.jpg", // Placeholder image
      link: "https://cricket-fantasy-flare.vercel.app/",
      githubLink: "https://github.com/NANDHINI7390/cricket-fantasy-flare/tree/main/supabase/functions/cricket-assistant",
      category: "AI-integrated" as const,
      badge: "Recent",
      caseStudy:`
**Challenge:**
- Scattered match data across platforms making smart team selection difficult.
- Lack of real-time player suggestions based on current form or conditions.
- Need for intelligent assistance tailored to match context.

**Approach:** Built a chatbot that combines:
- Live cricket data from real-time APIs (e.g., player stats, match info, scorecards).
- AI-powered responses using OpenAI or Gemini to generate team recommendations.
- A clean, responsive chat interface for natural language queries like:
  - “Who should be the captain today?”
  - “Suggest a team for India vs Australia”

The app fetches live stats → analyzes with AI → delivers contextual, user-friendly insights.

**Result:**
- Delivered accurate, real-time fantasy team suggestions.
- Enabled interactive chat-based decision-making for T20, ODI, and Test matches.
- Automated insights like pitch analysis, form ratings, and player comparisons.

**Impact:**
- Created a Dream11-like experience through conversational UI.
- Showcased how live data + AI can power sports strategy.
- Validated potential as a service for fantasy platforms, sports startups, and analytics firms.`,
      isUpcoming: false, // Moved from upcoming to recent
    },
    
  ];
  const upcomingProjects = projects.filter(p => p.isUpcoming);

  const categories = Array.from(new Set(projects.filter(p => !p.isUpcoming).map((p) => p.category)));

  const handleViewCaseStudy = (caseStudy: string) => {
    setActiveCaseStudy(caseStudy);
 setOpen(true);
  };
  const filteredProjects = activeFilter
    ? projects
        .filter((p) => !p.isUpcoming) // Exclude upcoming projects initially
 .filter((p) => p.category === activeFilter)

    : projects.filter((p) => !p.isUpcoming); // Only show non-upcoming projects initially

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

 {/* Recent Projects */}
 {filteredProjects.length > 0 && (
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
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
 )}

        {/* Upcoming Projects (conditionally rendered) */}
        {showUpcoming && upcomingProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 animate-fade-in-up">
            {projects
              .filter(p => p.isUpcoming)
              .slice(0, 1).map((project, index) => (
              <ProjectCard
               key={project.title}
               githubLink={project.githubLink} // Explicitly pass githubLink
               {...project}
               onViewCaseStudy={handleViewCaseStudy}
             />
            ))}
          </div>
        )}
 {/* Link to show upcoming projects */}
        {upcomingProjects.length > 0 && (
          <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div
              className="relative group cursor-pointer animate-fade-in"
              style={{ animationDelay: "0.8s" }}
              onClick={() => setShowUpcoming(!showUpcoming)}
            >
              <div className="text-customBlue-600 dark:text-customBlue-400 font-medium flex items-center group-hover:text-customBlue-800 dark:group-hover:text-customBlue-300 transition-colors duration-300">
                {showUpcoming ? 'Hide upcoming projects' : 'View upcoming projects'}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-customBlue-400 group-hover:w-full transition-all duration-700"></div>
            </div>
 </div>
        )}
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
