import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  HiCode, 
  HiDesktopComputer, 
  HiDeviceMobile, 
  HiCloud, 
  HiCog,
  HiLightBulb,
  HiArrowRight 
} from "react-icons/hi";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: HiDesktopComputer,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    features: [
      "React/Next.js Applications",
      "Responsive Design",
      "Performance Optimization",
      "SEO Implementation"
    ],
    price: "Starting at $2,500",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile Development",
    description: "Cross-platform mobile applications that deliver native performance and user experience.",
    features: [
      "React Native Apps",
      "iOS & Android",
      "App Store Deployment",
      "Push Notifications"
    ],
    color: "from-green-500 to-teal-600"
  },
  {
    icon: HiCode,
    title: "Full Stack Development",
    description: "End-to-end development solutions from database design to user interface.",
    features: [
      "API Development",
      "Database Design",
      "Authentication Systems",
      "Third-party Integrations"
    ],
    color: "from-orange-500 to-red-600"
  },
  {
    icon: HiCloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
    features: [
      "AWS/Azure Deployment",
      "CI/CD Pipelines",
      "Auto-scaling Setup",
      "Security Implementation"
    ],
    price: "Starting at $2,000",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: HiCog,
    title: "System Architecture",
    description: "Design and implementation of robust, scalable system architectures.",
    features: [
      "Microservices Design",
      "Performance Optimization",
      "Code Review & Refactoring",
      "Technical Documentation"
    ],
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: HiLightBulb,
    title: "Technical Consulting",
    description: "Expert guidance on technology choices, best practices, and project strategy.",
    features: [
      "Technology Assessment",
      "Architecture Planning",
      "Team Training",
      "Code Auditing"
    ],
    color: "from-cyan-500 to-blue-600"
  }
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
          <div className="w-20 h-1 bg-gradient-neon mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div 
                className="glass rounded-2xl p-6 h-full flex flex-col hover-glow transition-all duration-500 group-hover:scale-105 cursor-pointer"
                style={{
                  transform: hoveredService === index ? 'rotateY(5deg) rotateX(5deg)' : 'rotateY(0deg) rotateX(0deg)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Service Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} group-hover:animate-bounce-in`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-poppins mb-4 text-gradient">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1 + featureIndex * 0.05 
                        }}
                        className="flex items-center text-sm text-text-secondary"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="mt-auto">
                 
                  
                 
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredService === index ? 0.1 : 0 
                  }}
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl`}
                />
              </div>

              {/* 3D Glow Effect */}
              {hoveredService === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl -z-10 blur opacity-75`}
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
          className="mt-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins mb-4 text-gradient">
                Why Choose My Services?
              </h3>
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  100% client satisfaction rate
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  On-time delivery guarantee
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Modern, scalable solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Ongoing support & maintenance
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins mb-4 text-gradient">
                Process Overview
              </h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Consultation", desc: "Understanding your needs" },
                  { step: "2", title: "Planning", desc: "Strategy & timeline" },
                  { step: "3", title: "Development", desc: "Building your solution" },
                  { step: "4", title: "Deployment", desc: "Launch & optimization" }
                ].map((phase) => (
                  <div key={phase.step} className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-neon rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                      {phase.step}
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">{phase.title}</div>
                      <div className="text-sm text-text-secondary">{phase.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};