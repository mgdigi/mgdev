import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiDownload, HiArrowRight } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { ParticleField } from "./ParticleField";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    t('hero.roles.0'),
    t('hero.roles.1'),
    t('hero.roles.2'),
    t('hero.roles.3')
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let timeoutId: NodeJS.Timeout;

    if (displayedText.length < currentTitle.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, currentIndex, titles]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-primary text-lg font-medium tracking-wider uppercase">
              {t('hero.welcome')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6"
          >
            <span className="text-gradient">{t('hero.name')}</span>
            <br />
            <span className="text-foreground">{t('hero.title')}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-20 mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-poppins text-text-secondary">
              {language === 'fr' ? "Je suis un " : "I'm a "}
              <span className="text-primary text-glow font-semibold">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="hero-btn bg-gradient-neon text-primary-foreground hover:shadow-neon-strong transition-all duration-300 px-8 py-4 text-lg font-semibold group"
            >
              <span>{t('hero.hire')}</span>
              <HiArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 text-lg group"
            >
              <HiDownload className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              <span>{t('hero.download')}</span>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-text-muted">
              <span className="text-sm mb-2">{t('hero.scroll')}</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-primary rounded-full mt-2"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};