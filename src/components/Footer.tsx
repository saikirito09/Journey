// src/components/Footer.tsx
import React from "react";
import { Github } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark py-4 mt-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <p>&copy; {currentYear} Sandy. All rights reserved.</p>
        </div>
        <a
          href="https://github.com/yourgithubusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-light dark:text-primary-dark hover:text-text-light dark:hover:text-text-dark transition-colors duration-300"
        >
          <Github size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
