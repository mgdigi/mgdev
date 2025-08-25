import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiLightBulb, HiHeart, HiStar } from "react-icons/hi";
import { useLanguage } from "@/contexts/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: HiCode, value: "50+", label: t('about.stats.projects') },
    { icon: HiLightBulb, value: "3+", label: t('about.stats.experience') },
    { icon: HiHeart, value: "100%", label: t('about.stats.satisfaction') },
    { icon: HiStar, value: "24/7", label: t('about.stats.support') },
  ];

  return (
    <section id="about" className="py-20 bg-dark-surface/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            {t('about.title')} <span className="text-gradient">{t('about.me')}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-neon mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-neon p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-dark-bg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center">
                    <div className="text-6xl text-primary"><img src="/public/images/me.jpeg" alt="" /></div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-glow rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-neon-bright rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold font-poppins text-gradient">
              Passionate Full Stack Developer
            </h3>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm Mohamed, a creative and dedicated full stack developer with a passion for 
              crafting innovative digital solutions. With expertise in modern web technologies, 
              I specialize in building responsive, user-friendly applications that deliver 
              exceptional user experiences.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              My journey in technology is driven by curiosity and a constant desire to learn. 
              I believe in the power of clean code, elegant design, and collaborative teamwork 
              to bring ideas to life.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {["React", "Node.js", "TypeScript", "Python", "AWS", "Docker"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="px-4 py-2 bg-dark-surface border border-primary/30 rounded-full text-primary text-sm font-medium hover:bg-primary/10 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-neon rounded-full mb-4 mx-auto">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold font-poppins text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};