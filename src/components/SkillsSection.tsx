import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  HiCode, 
  HiDesktopComputer, 
  HiDatabase, 
  HiCloud,
  HiDeviceMobile,
  HiCog
} from "react-icons/hi";

const skillCategories = [
  {
    title: "Frontend",
    icon: HiDesktopComputer,
    skills: [
      { name: "React/Next.js", level: 95, icon: "⚛️" },
      { name: "Angular/TypeScript", level: 95, icon: "🔷" },
      { name: "Tailwind CSS", level: 95, icon: "🎨" },
      { name: "Framer Motion", level: 85, icon: "🎭" },
    ]
  },
  {
    title: "Backend", 
    icon: HiDatabase,
    skills: [
      { name: "Node.js/Rust/Go", level: 95, icon: "💚" },
      { name: "PHP/Java", level: 95, icon: "🐘" },
      { name: "PostgreSQL/MySql", level: 95, icon: "🐘" },
      { name: "GraphQL/MongoDB", level: 90, icon: "🔗" },
    ]
  },
  {
    title: "DevOps",
    icon: HiCloud,
    skills: [
      { name: "AWS", level: 85, icon: "☁️" },
      { name: "Docker", level: 95, icon: "🐳" },
      { name: "CI/CD", level: 85, icon: "🔄" },
      { name: "Kubernetes", level: 75, icon: "⚓" },
    ]
  },
  {
    title: "Mobile",
    icon: HiDeviceMobile,
    skills: [
      { name: "React Native", level: 88, icon: "📱" },
      { name: "Flutter", level: 90, icon: "🦋" },
      { name: "Expo", level: 90, icon: "🚀" },
      { name: "App Store", level: 85, icon: "🏪" },
    ]
  },
  {
    title: "Tools",
    icon: HiCog,
    skills: [
      { name: "Git", level: 95, icon: "🌿" },
      { name: "VS Code", level: 98, icon: "💻" },
      { name: "Figma", level: 85, icon: "🎨" },
      { name: "Postman", level: 90, icon: "📮" },
    ]
  },
  {
    title: "Languages",
    icon: HiCode,
    skills: [
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "PHP", level: 85, icon: "🐘" },
      { name: "Java", level: 78, icon: "☕" },
    ]
  }
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
          <div className="w-20 h-1 bg-gradient-neon mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover-glow cursor-pointer group"
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-neon rounded-xl mr-4 group-hover:animate-bounce-in">
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-gradient">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="group/skill"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{skill.icon}</span>
                        <span className="text-text-primary font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-primary font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-dark-surface rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="h-full bg-gradient-neon relative"
                      >
                        <div className="absolute inset-0 bg-gradient-neon animate-glow-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {hoveredCategory === categoryIndex && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -inset-1 bg-gradient-neon rounded-2xl -z-10 blur opacity-75"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-poppins mb-4 text-gradient">
              Always Learning
            </h3>
            <p className="text-lg text-text-secondary">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the cutting edge of development. 
              My curiosity drives me to experiment with emerging technologies like AI, 
              Web3, and advanced animation libraries.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};