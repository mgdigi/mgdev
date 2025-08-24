import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.welcome': 'Bienvenue dans mon univers',
    'hero.name': 'Mohamed',
    'hero.title': 'Développeur',
    'hero.roles.0': 'Développeur Full Stack',
    'hero.roles.1': 'Designer Créatif',
    'hero.roles.2': 'Résolveur de Problèmes',
    'hero.roles.3': 'Innovateur Tech',
    'hero.description': 'Passionné par la création d\'expériences numériques innovantes qui fusionnent technologie de pointe et design époustouflant. Construisons ensemble quelque chose d\'extraordinaire.',
    'hero.hire': 'Embauchez-moi',
    'hero.download': 'Télécharger CV',
    'hero.scroll': 'Scroll pour explorer',

    // About Section
    'about.title': 'À propos de',
    'about.me': 'Moi',
    'about.subtitle': 'Développeur Full Stack Passionné',
    'about.description1': 'Je suis Mohamed, un développeur full stack créatif et dévoué avec une passion pour créer des solutions numériques innovantes. Avec une expertise dans les technologies web modernes, je me spécialise dans la construction d\'applications réactives et conviviales qui offrent des expériences utilisateur exceptionnelles.',
    'about.description2': 'Mon parcours dans la technologie est motivé par la curiosité et un désir constant d\'apprendre. Je crois en la puissance du code propre, du design élégant et du travail d\'équipe collaboratif pour donner vie aux idées.',
    'about.stats.projects': 'Projets Terminés',
    'about.stats.experience': 'Années d\'Expérience',
    'about.stats.satisfaction': 'Satisfaction Client',
    'about.stats.support': 'Support Disponible',
    'about.learning': 'Toujours en Apprentissage',
    'about.learningDesc': 'La technologie évolue rapidement, et moi aussi. J\'explore constamment de nouveaux frameworks, outils et méthodologies pour rester à la pointe du développement. Ma curiosité me pousse à expérimenter avec les technologies émergentes comme l\'IA, le Web3 et les bibliothèques d\'animation avancées.',

    // Skills Section
    'skills.title': 'Mes',
    'skills.subtitle': 'Compétences',
    'skills.description': 'Une boîte à outils complète de technologies et frameworks modernes',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.devops': 'DevOps',
    'skills.mobile': 'Mobile',
    'skills.tools': 'Outils',
    'skills.languages': 'Langages',

    // Projects Section
    'projects.title': 'Projets',
    'projects.featured': 'En Vedette',
    'projects.description': 'Une vitrine de solutions innovantes et d\'applications de pointe',
    'projects.all': 'Tous',
    'projects.fullstack': 'Full Stack',
    'projects.aiml': 'IA/ML',
    'projects.mobile': 'Mobile',
    'projects.saas': 'SaaS',
    'projects.fintech': 'FinTech',
    'projects.edtech': 'EdTech',
    'projects.demo': 'Démo',
    'projects.code': 'Code',
    'projects.interested': 'Intéressé par Mon Travail ?',
    'projects.interestedDesc': 'Ce ne sont que quelques exemples de mes projets. J\'aimerais discuter de la façon dont je peux aider à donner vie à vos idées avec des solutions innovantes.',
    'projects.viewAll': 'Voir Tous les Projets',

    // Services Section
    'services.title': 'Mes',
    'services.subtitle': 'Services',
    'services.description': 'Solutions numériques complètes adaptées à vos besoins',
    'services.web.title': 'Développement Web',
    'services.web.description': 'Sites web et applications web modernes et réactifs construits avec des technologies de pointe.',
    'services.mobile.title': 'Développement Mobile',
    'services.mobile.description': 'Applications mobiles multiplateformes qui offrent des performances natives et une expérience utilisateur.',
    'services.fullstack.title': 'Développement Full Stack',
    'services.fullstack.description': 'Solutions de développement de bout en bout, de la conception de base de données à l\'interface utilisateur.',
    'services.cloud.title': 'Solutions Cloud',
    'services.cloud.description': 'Infrastructure cloud évolutive et solutions de déploiement pour applications modernes.',
    'services.architecture.title': 'Architecture Système',
    'services.architecture.description': 'Conception et implémentation d\'architectures système robustes et évolutives.',
    'services.consulting.title': 'Conseil Technique',
    'services.consulting.description': 'Conseils d\'experts sur les choix technologiques, les meilleures pratiques et la stratégie de projet.',
    'services.getStarted': 'Commencer',
    'services.whyChoose': 'Pourquoi Choisir Mes Services ?',
    'services.processOverview': 'Aperçu du Processus',

    // Contact Section
    'contact.title': 'Contactez',
    'contact.subtitle': 'Moi',
    'contact.description': 'Prêt à donner vie à vos idées ? Discutons de votre prochain projet',
    'contact.sendMessage': 'Envoyer un Message',
    'contact.name': 'Votre Nom',
    'contact.email': 'Votre Email',
    'contact.subject': 'Sujet',
    'contact.message': 'Votre Message',
    'contact.send': 'Envoyer le Message',
    'contact.sending': 'Envoi...',
    'contact.info': 'Informations de Contact',
    'contact.followMe': 'Suivez-moi',
    'contact.createAmazing': 'Créons Quelque Chose d\'Incroyable',
    'contact.createDesc': 'Je suis toujours excité de travailler sur de nouveaux projets et de collaborer avec des individus et équipes passionnés. Que vous ayez une vision claire ou juste une idée, discutons de la façon dont nous pouvons la concrétiser.',

    // Footer
    'footer.description': 'Développeur full-stack passionné créant des solutions numériques innovantes qui fusionnent technologie de pointe et design époustouflant. Construisons ensemble l\'avenir.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.getInTouch': 'Contactez-moi',
    'footer.availableForWork': 'Disponible pour travailler',
    'footer.acceptingProjects': 'Accepte actuellement des projets',
    'footer.madeWith': 'Fait avec',
    'footer.rights': 'Tous droits réservés.',

    // AI Assistant
    'ai.greeting': 'Bonjour ! Je suis l\'assistant IA d\'Mohamed. Je peux vous aider à en savoir plus sur ses compétences, projets, ou répondre à toutes vos questions. Comment puis-je vous aider aujourd\'hui ?',
    'ai.needHelp': '👋 Besoin d\'aide ?',
    'ai.chatWith': 'Chattez avec l\'assistant IA d\'Mohamed',
    'ai.placeholder': 'Posez-moi n\'importe quoi...',
    'ai.online': 'En ligne',

    // Form validation
    'form.nameRequired': 'Le nom est requis',
    'form.emailRequired': 'L\'email est requis',
    'form.emailInvalid': 'L\'email n\'est pas valide',
    'form.subjectRequired': 'Le sujet est requis',
    'form.messageRequired': 'Le message est requis',
    'form.messageSent': 'Message Envoyé !',
    'form.messageDesc': 'Merci pour votre message. Je vous répondrai bientôt !'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.welcome': 'Welcome to my universe',
    'hero.name': 'Mohamed',
    'hero.title': 'Developer',
    'hero.roles.0': 'Full Stack Developer',
    'hero.roles.1': 'Creative Designer',
    'hero.roles.2': 'Problem Solver',
    'hero.roles.3': 'Tech Innovator',
    'hero.description': 'Passionate about creating innovative digital experiences that merge cutting-edge technology with stunning design. Let\'s build something extraordinary together.',
    'hero.hire': 'Hire Me',
    'hero.download': 'Download CV',
    'hero.scroll': 'Scroll to explore',

    // About Section
    'about.title': 'About',
    'about.me': 'Me',
    'about.subtitle': 'Passionate Full Stack Developer',
    'about.description1': 'I\'m Mohamed, a creative and dedicated full stack developer with a passion for crafting innovative digital solutions. With expertise in modern web technologies, I specialize in building responsive, user-friendly applications that deliver exceptional user experiences.',
    'about.description2': 'My journey in technology is driven by curiosity and a constant desire to learn. I believe in the power of clean code, elegant design, and collaborative teamwork to bring ideas to life.',
    'about.stats.projects': 'Projects Completed',
    'about.stats.experience': 'Years Experience',
    'about.stats.satisfaction': 'Client Satisfaction',
    'about.stats.support': 'Support Available',
    'about.learning': 'Always Learning',
    'about.learningDesc': 'Technology evolves rapidly, and so do I. I\'m constantly exploring new frameworks, tools, and methodologies to stay at the cutting edge of development. My curiosity drives me to experiment with emerging technologies like AI, Web3, and advanced animation libraries.',

    // Skills Section
    'skills.title': 'My',
    'skills.subtitle': 'Skills',
    'skills.description': 'A comprehensive toolkit of modern technologies and frameworks',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.devops': 'DevOps',
    'skills.mobile': 'Mobile',
    'skills.tools': 'Tools',
    'skills.languages': 'Languages',

    // Projects Section
    'projects.title': 'Featured',
    'projects.featured': 'Projects',
    'projects.description': 'A showcase of innovative solutions and cutting-edge applications',
    'projects.all': 'All',
    'projects.fullstack': 'Full Stack',
    'projects.aiml': 'AI/ML',
    'projects.mobile': 'Mobile',
    'projects.saas': 'SaaS',
    'projects.fintech': 'FinTech',
    'projects.edtech': 'EdTech',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    'projects.interested': 'Interested in My Work?',
    'projects.interestedDesc': 'These are just a few examples of my projects. I\'d love to discuss how I can help bring your ideas to life with innovative solutions.',
    'projects.viewAll': 'View All Projects',

    // Services Section
    'services.title': 'My',
    'services.subtitle': 'Services',
    'services.description': 'Comprehensive digital solutions tailored to your needs',
    'services.web.title': 'Web Development',
    'services.web.description': 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    'services.mobile.title': 'Mobile Development',
    'services.mobile.description': 'Cross-platform mobile applications that deliver native performance and user experience.',
    'services.fullstack.title': 'Full Stack Development',
    'services.fullstack.description': 'End-to-end development solutions from database design to user interface.',
    'services.cloud.title': 'Cloud Solutions',
    'services.cloud.description': 'Scalable cloud infrastructure and deployment solutions for modern applications.',
    'services.architecture.title': 'System Architecture',
    'services.architecture.description': 'Design and implementation of robust, scalable system architectures.',
    'services.consulting.title': 'Technical Consulting',
    'services.consulting.description': 'Expert guidance on technology choices, best practices, and project strategy.',
    'services.getStarted': 'Get Started',
    'services.whyChoose': 'Why Choose My Services?',
    'services.processOverview': 'Process Overview',

    // Contact Section
    'contact.title': 'Get In',
    'contact.subtitle': 'Touch',
    'contact.description': 'Ready to bring your ideas to life? Let\'s discuss your next project',
    'contact.sendMessage': 'Send Message',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.info': 'Contact Information',
    'contact.followMe': 'Follow Me',
    'contact.createAmazing': 'Let\'s Create Something Amazing',
    'contact.createDesc': 'I\'m always excited to work on new projects and collaborate with passionate individuals and teams. Whether you have a clear vision or just an idea, let\'s discuss how we can bring it to life.',

    // Footer
    'footer.description': 'Passionate full-stack developer creating innovative digital solutions that merge cutting-edge technology with stunning design. Let\'s build the future together.',
    'footer.quickLinks': 'Quick Links',
    'footer.getInTouch': 'Get In Touch',
    'footer.availableForWork': 'Available for work',
    'footer.acceptingProjects': 'Currently accepting projects',
    'footer.madeWith': 'Made with',
    'footer.rights': 'All rights reserved.',

    // AI Assistant
    'ai.greeting': 'Hello! I\'m Mohamed\'s AI assistant. I can help you learn more about his skills, projects, or answer any questions you might have. How can I assist you today?',
    'ai.needHelp': '👋 Need help?',
    'ai.chatWith': 'Chat with Mohamed\'s AI assistant',
    'ai.placeholder': 'Ask me anything...',
    'ai.online': 'Online',

    // Form validation
    'form.nameRequired': 'Name is required',
    'form.emailRequired': 'Email is required',
    'form.emailInvalid': 'Email is invalid',
    'form.subjectRequired': 'Subject is required',
    'form.messageRequired': 'Message is required',
    'form.messageSent': 'Message Sent!',
    'form.messageDesc': 'Thank you for your message. I\'ll get back to you soon!'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};