
import React from "react";
import { Mail, Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    
    { icon: <Mail className="h-5 w-5" />, href: "mailto:contact@example.com", label: "Email" },
  ];

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold text-customGreen-400 mb-4">Portfolio</h3>
 <p className="text-gray-400 mb-6">
 Building modern digital solutions powered by AI and automation. Transforming complex ideas into scalable, real-world applications through rapid prototyping, clean UI, and efficient development workflows.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-customGreen-400 transition-colors"
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-customGreen-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-customGreen-400 transition-colors">
                  Prompt Engineering
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-customGreen-400 transition-colors">
                  No-Code Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-customGreen-400 transition-colors">
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-customGreen-400 transition-colors">
                  Digital Product Creation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="nandygavas@gmail.com" className="hover:text-customGreen-400 transition-colors">
                  nandygavas@gmail.com
                </a>
              </li>
              <li className="text-gray-400">+91 8610382303</li>
              <li className="text-gray-400">Remote / Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center text-sm text-gray-400 hover:text-customGreen-400 transition-colors"
          >
            Back to top <ArrowUp className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
