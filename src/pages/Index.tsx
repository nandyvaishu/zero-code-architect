
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import CoreSkillsSection from "@/components/CoreSkillsSection";
import TechStackSection from "@/components/TechStackSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <HeroSection />
      <div className="bg-white dark:bg-gray-900">
        <AboutSection />
      </div>
      <CoreSkillsSection />
      <TechStackSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
