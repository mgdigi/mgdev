import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      content: "gueyemohamed287@gmail.com",
      link: "mailto:gueyemohamed287@gmail.com"
    },
    {
      icon: HiPhone,
      title: "Phone",
      content: "+221 78 011 82 23",
      link: "tel:+221780118223"
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      content: "DAKAR, SENEGAL",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/mohamed-gueye-864237234/", color: "hover:text-blue-500" },
    { icon: FaGithub, name: "GitHub", url: "https://github.com/mgdigi", color: "hover:text-gray-400" }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = t('form.nameRequired');
    if (!formData.email.trim()) newErrors.email = t('form.emailRequired');
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t('form.emailInvalid');
    if (!formData.subject.trim()) newErrors.subject = t('form.subjectRequired');
    if (!formData.message.trim()) newErrors.message = t('form.messageRequired');
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast({
        title: t('form.messageSent'),
        description: t('form.messageDesc'),
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-surface/50 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            {t('contact.title')} <span className="text-gradient">{t('contact.subtitle')}</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
          <div className="w-20 h-1 bg-gradient-neon mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins mb-6 text-gradient">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`bg-dark-surface border-primary/30 focus:border-primary ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <span className="text-red-400 text-sm mt-1">{errors.name}</span>
                    )}
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`bg-dark-surface border-primary/30 focus:border-primary ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-400 text-sm mt-1">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div>
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className={`bg-dark-surface border-primary/30 focus:border-primary ${
                      errors.subject ? "border-red-500" : ""
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-red-400 text-sm mt-1">{errors.subject}</span>
                  )}
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`bg-dark-surface border-primary/30 focus:border-primary resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <span className="text-red-400 text-sm mt-1">{errors.message}</span>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-neon text-primary-foreground hover:shadow-neon-strong transition-all duration-300 py-3 text-lg font-semibold group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <HiPaperAirplane className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins mb-6 text-gradient">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="flex items-center group hover:text-primary transition-colors"
                  >
                    <div className="p-3 bg-gradient-neon rounded-xl mr-4 group-hover:animate-bounce-in">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm text-text-secondary">{info.title}</div>
                      <div className="font-semibold">{info.content}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold font-poppins mb-6 text-gradient">
                Follow Me
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className={`p-3 bg-dark-surface border border-primary/30 rounded-xl text-text-secondary ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-neon`}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold font-poppins mb-4 text-gradient">
                Let's Create Something Amazing
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I'm always excited to work on new projects and collaborate with 
                passionate individuals and teams. Whether you have a clear vision 
                or just an idea, let's discuss how we can bring it to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};