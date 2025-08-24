import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiSun, HiMoon, HiGlobe } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navigation = ({ darkMode, toggleDarkMode }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: t('nav.home'), href: "#hero" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.skills'), href: "#skills" },
    { label: t('nav.projects'), href: "#projects" },
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold font-poppins"
          >
            <span className="text-gradient">MGDEV</span>
            <span className="text-primary">.</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-text-secondary hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-neon group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/20 flex items-center space-x-1"
              >
                <HiGlobe className="h-4 w-4" />
                <span className="text-sm font-medium uppercase">{language}</span>
              </Button>
              
              <div className="absolute right-0 top-full mt-2 bg-card border border-primary/30 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[100px] z-50">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`w-full px-4 py-2 text-left hover:bg-primary/10 transition-colors ${
                    language === 'fr' ? 'text-primary' : 'text-text-secondary'
                  }`}
                >
                  🇫🇷 Français
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-full px-4 py-2 text-left hover:bg-primary/10 transition-colors ${
                    language === 'en' ? 'text-primary' : 'text-text-secondary'
                  }`}
                >
                  🇺🇸 English
                </button>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="hover:bg-primary/20"
            >
              {darkMode ? (
                <HiSun className="h-5 w-5" />
              ) : (
                <HiMoon className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-card/95 backdrop-blur-lg rounded-b-2xl mt-4 border border-primary/20"
            >
              <div className="p-6 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-lg font-medium text-text-secondary hover:text-primary transition-colors duration-300 py-2 border-b border-border/30 last:border-b-0"
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                {/* Mobile Language & Theme Controls */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="flex items-center justify-between pt-4 border-t border-border/30"
                >
                  <div className="flex items-center space-x-2">
                    <HiGlobe className="h-5 w-5 text-primary" />
                    <span className="text-sm text-text-secondary">Langue:</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setLanguage('fr')}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          language === 'fr' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground hover:bg-primary/20'
                        }`}
                      >
                        FR
                      </button>
                      <button
                        onClick={() => setLanguage('en')}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          language === 'en' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted text-muted-foreground hover:bg-primary/20'
                        }`}
                      >
                        EN
                      </button>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleDarkMode}
                    className="hover:bg-primary/20"
                  >
                    {darkMode ? (
                      <>
                        <HiSun className="h-4 w-4 mr-2" />
                        Clair
                      </>
                    ) : (
                      <>
                        <HiMoon className="h-4 w-4 mr-2" />
                        Sombre
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};