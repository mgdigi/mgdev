import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiExternalLink, HiCode, HiEye } from "react-icons/hi";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Cargo Management System",
    description: "Web application for managing and tracking cargo shipments. Features include route planning for road and maritime transport, real-time map visualization with Leaflet, PDF document generation, and management of shippers and consignees.",
    image: "/images/ges-cargo.png", 
    technologies: ["TypeScript", "Leaflet", "OpenRouteService API", "HTML/CSS", "Json-server", "LocalStorage", "Vite", "Docker"],
    demoUrl: "https://mgdigigp.onrender.com/",  
    codeUrl: "#",  
    category: "Full Stack"
},
  {
    id: 2,
    title: "Maxit-sa",
    description: "Complete financial services platform, from modeling to deployment! with pur PHP .",
    image: "/images/maxit-sa.jpeg",
    technologies: ["PHP", "Typescript", "PostgresSQL", "MySql", "cloudinary", "Render", "Docker"],
    demoUrl: "https://maxitsa-knvs.onrender.com/",
    codeUrl: "#",
    category: "FinTech"
  },
  {
    id: 3,
    title: "whatsapp clone App",
    description: "complete application that replicates core WhatsApp functionalities, including real-time messaging, multimedia sharing, and push notifications.",
    image: "/images/whatspp-clone.png",
    technologies: ["Javascript", "Tailwind", "Superbase", "Socket.io", 'Vite', "Vercel", "Docker"],
    demoUrl: "https://whatspp-clone-1x74o82ih-gueyes-projects.vercel.app/",
    codeUrl: "#",
    category: "Full Stack"
  },
  {
    id: 4,
    title: "Stock Flow",
    description: "inventory project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.",
    image: "/images/prostock.png",
    technologies: ["Typescript","chart.js",  "tailwind css","Vue.js", "Express", "Socket.io", "MongoDb", "Docker"],
    demoUrl: "#",
    codeUrl: "https://pro-stock-seven.vercel.app/",
    category: "SaaS"
  },
  {
    id: 5,
    title: "Yaatou Market ",
    description: "An e-commerce website built with WordPress and WooCommerce, specializing in selling household appliances, electronics, clothing, kitchenware, and home essentials. Designed with a modern, responsive layout and optimized for SEO and user experience. .",
    image: "/images/yaatoumarket.png",
    technologies: ["PHP", "Wordpress", "Elementor", "Woodmart", "Woocommerce", "OVHCLOUD", "Seo", "paytech"],
    demoUrl: "#",
    codeUrl: "https://yaatoumarket.sn/",
    category: "CMS"
  },
  {
    id: 6,
    title: "Ets Madina Gounass",
    description: "An e-commerce website built with WordPress and WooCommerce, specializing in selling household  electronics,  Designed with a modern, responsive layout and optimized for SEO and user experience. .",
    image: "/images/ets.png",
    technologies: ["PHP", "Wordpress", "Elementor", "Woodmart", "Woocommerce", "OVHCLOUD", "Seo", "paytech"],
    demoUrl: "https://etsmadinagounass.com/",
    codeUrl: "#",
    category: "CMS"
  }
];

const categories = ["All", "Full Stack", "CMS", "SaaS", "FinTech"];

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
            Latest <span className="text-gradient">Projects</span>
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
                    <img src={project.image} alt="" />
                  </div>
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    className="absolute inset-0 bg-primary/90 flex items-center justify-center space-x-4"
                  >
                    
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
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <HiEye className="mr-2 h-4 w-4" />
                      Demo
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