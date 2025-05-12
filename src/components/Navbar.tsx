
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "services", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold relative group">
            <span className="text-customGreen-500 tracking-tight">Portfolio</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-customGreen-500 transition-all group-hover:w-full"></span>
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative font-medium text-gray-600 hover:text-customGreen-500 transition-colors ${
                    activeSection === link.href.substring(1) ? "text-customGreen-500" : ""
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-customGreen-500 transition-all duration-300 ${
                    activeSection === link.href.substring(1) ? "w-full" : ""
                  }`}></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Navigation Trigger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-0.5 bg-gray-800 transform transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 top-3" : "top-1.5"
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-gray-800 top-3 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}></span>
              <span className={`absolute block w-6 h-0.5 bg-gray-800 transform transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 top-3" : "top-4.5"
              }`}></span>
            </div>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-10 transform transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="h-full flex flex-col justify-center items-center">
          <ul className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  className="block text-2xl font-medium text-gray-800 hover:text-customGreen-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
                <span className="block h-0.5 w-0 bg-customGreen-500 mx-auto mt-1 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-10 text-gray-500">
            <p className="text-sm">© 2025 Portfolio</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
