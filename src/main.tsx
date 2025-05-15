
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Apply the theme from localStorage or system preference
const applyTheme = () => {
  const theme = localStorage.getItem('theme') || 'light';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (theme === 'dark' || (!theme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Apply theme immediately
applyTheme();

createRoot(document.getElementById("root")!).render(<App />);
