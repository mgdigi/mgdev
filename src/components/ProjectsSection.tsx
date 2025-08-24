import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiExternalLink, HiCode, HiEye } from "react-icons/hi";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, admin dashboard, and mobile-responsive design.",
    image: "🛒",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    demoUrl: "#",
    codeUrl: "#",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Data visualization platform with machine learning insights. Built with Next.js, Python backend, and integrated with multiple data sources.",
    image: "📊",
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    demoUrl: "#",
    codeUrl: "#",
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Social Media Mobile App",
    description: "Cross-platform mobile application built with React Native. Features real-time messaging, photo sharing, and social networking capabilities.",
    image: "📱",
    technologies: ["React Native", "Firebase", "Redux", "Socket.io"],
    demoUrl: "#",
    codeUrl: "#",
    category: "Mobile"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
    image: "✅",
    technologies: ["Vue.js", "Express", "Socket.io", "MySQL", "Docker"],
    demoUrl: "#",
    codeUrl: "#",
    category: "SaaS"
  },
  {
    id: 5,
    title: "Cryptocurrency Tracker",
    description: "Real-time crypto tracking platform with portfolio management, price alerts, and market analysis tools.",
    image: "₿",
    technologies: ["React", "Chart.js", "WebSockets", "Redis", "Kubernetes"],
    demoUrl: "#",
    codeUrl: "#",
    category: "FinTech"
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Educational platform with video streaming, interactive quizzes, progress tracking, and certificate generation.",
    image: "🎓",
    technologies: ["Angular", "NestJS", "FFmpeg", "AWS S3", "ElasticSearch"],
    demoUrl: "#",
    codeUrl: "#",
    category: "EdTech"
  }
];

const categories = ["All", "Full Stack", "AI/ML", "Mobile", "SaaS", "FinTech", "EdTech"];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-dark-surface/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A showcase of innovative solutions and cutting-edge applications
          </p>
          <div className="w-20 h-1 bg-gradient-neon mx-auto mt-6"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-neon text-primary-foreground shadow-neon"
                  : "border-primary/30 text-text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="glass rounded-2xl overflow-hidden hover-glow transition-all duration-500 group-hover:scale-105">
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-dark flex items-center justify-center overflow-hidden">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    className="absolute inset-0 bg-primary/90 flex items-center justify-center space-x-4"
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/20 hover:bg-white/30 text-white"
                    >
                      <HiEye className="h-5 w-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/20 hover:bg-white/30 text-white"
                    >
                      <HiCode className="h-5 w-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-white/20 hover:bg-white/30 text-white"
                    >
                      <HiExternalLink className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold font-poppins text-gradient">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-dark-surface border border-primary/20 text-text-secondary px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30"
                    >
                      <HiEye className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-primary/30 text-text-secondary hover:border-primary hover:text-primary"
                    >
                      <HiCode className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              {hoveredProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -inset-1 bg-gradient-neon rounded-2xl -z-10 blur opacity-75"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-poppins mb-4 text-gradient">
              Interested in My Work?
            </h3>
            <p className="text-lg text-text-secondary mb-6">
              These are just a few examples of my projects. I'd love to discuss 
              how I can help bring your ideas to life with innovative solutions.
            </p>
            <Button className="bg-gradient-neon text-primary-foreground hover:shadow-neon-strong px-8 py-3">
              View All Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};