
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Apply the theme from localStorage or system preference
const applyTheme = () => {
  const theme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (theme === 'dark' || (!theme && prefersDark)) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
};

// Apply theme immediately
applyTheme();

// Setup reveal animations when scrolling
const setupRevealAnimations = () => {
  const revealElements = document.querySelectorAll('section');
  
  const reveal = () => {
    revealElements.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };
  
  // Add reveal class to all sections
  revealElements.forEach((el) => {
    el.classList.add('reveal');
  });
  
  // Initial check on load
  window.addEventListener('DOMContentLoaded', reveal);
  // Check on scroll
  window.addEventListener('scroll', reveal);
};

// Initialize animations on DOM load
window.addEventListener('DOMContentLoaded', setupRevealAnimations);

createRoot(document.getElementById("root")!).render(<App />);
