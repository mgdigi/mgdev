import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FaLinkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/mohamed-gueye-864237234/", color: "hover:text-blue-500" },
    { icon: FaGithub, name: "GitHub", url: "https://github.com/mgdigi", color: "hover:text-gray-400" },
  ];

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark-bg border-t border-primary/20 relative overflow-hidden">
    

      <div className="container mx-auto px-6 py-12 relative z-10 flex flex-row justify-between">
       

        {/* Bottom Bar */}
        
          <div className="flex items-center text-text-secondary text-sm mb-4 md:mb-0">
            <span>Made with</span>
            <FaHeart className="mx-2 text-red-500 animate-pulse" />
            <span>by MGDEV </span>
          </div>

          <div className="flex items-center space-x-6 ">
            <span className="text-text-muted text-sm">
              © 2024 MGDEV. All rights reserved.
            </span>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="text-text-secondary hover:text-primary hover:bg-primary/20 transition-all duration-300 group"
            >
              <HiArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
      </div>
    </footer>
  );
};