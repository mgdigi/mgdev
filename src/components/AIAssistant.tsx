import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiPaperAirplane, HiChat } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const AIAssistant = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: t('ai.greeting'),
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const responses = {
    skills: "Mohamed specializes in React, Node.js, TypeScript, PHP, and cloud technologies. He's particularly skilled in building responsive web applications with modern UI frameworks and has extensive experience with AWS and Docker deployment.",
    projects: "Mohamed has worked on 50+ projects including e-commerce platforms, SaaS applications, mobile apps, and AI-powered tools. His portfolio showcases full-stack applications with modern design and robust functionality.",
    experience: "With 3+ years of professional development experience, Mohamed has worked with startups and established companies, delivering high-quality solutions and maintaining 100% client satisfaction.",
    contact: "You can contact Mohamed through the contact form on this website, or connect with him on LinkedIn. He's always open to discussing new opportunities and collaborations!",
    services: "Mohamed offers full-stack development, UI/UX design, mobile app development, cloud deployment, and technical consulting. He can help bring your ideas to life with modern, scalable solutions.",
    default: "That's a great question! Mohamed is passionate about creating innovative digital solutions. Feel free to explore his portfolio, check out his projects, or use the contact form to get in touch directly. Is there something specific you'd like to know about his work or experience?",
  };

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech")) {
      return responses.skills;
    }
    if (lowerMessage.includes("project") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
      return responses.projects;
    }
    if (lowerMessage.includes("experience") || lowerMessage.includes("background") || lowerMessage.includes("career")) {
      return responses.experience;
    }
    if (lowerMessage.includes("contact") || lowerMessage.includes("hire") || lowerMessage.includes("email")) {
      return responses.contact;
    }
    if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("help")) {
      return responses.services;
    }
    
    return responses.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(true)}
          className={`w-16 h-16 rounded-full bg-gradient-neon shadow-neon-strong hover:shadow-neon-strong hover:scale-110 transition-all duration-300 ${
            isOpen ? "hidden" : "flex"
          } items-center justify-center group`}
        >
          <HiChat className="h-8 w-8 text-primary-foreground group-hover:animate-bounce" />
        </Button>

        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="absolute bottom-20 right-0 bg-card border border-primary/30 rounded-lg p-3 shadow-card min-w-[200px]"
          >
            <div className="text-sm text-text-primary font-medium mb-1">
              {t('ai.needHelp')}
            </div>
            <div className="text-xs text-text-secondary">
              {t('ai.chatWith')}
            </div>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-card border-r border-b border-primary/30"></div>
          </motion.div>
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 w-96 h-[500px] bg-card/95 backdrop-blur-lg border border-primary/30 rounded-2xl shadow-neon z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-neon p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground">MGDEV's AI Assistant</div>
                  <div className="text-xs text-primary-foreground/80">{t('ai.online')}</div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <HiX className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <div className="text-sm">{message.text}</div>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted rounded-2xl px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t('ai.placeholder')}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 bg-background border-primary/30 focus:border-primary"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-primary hover:bg-primary/90"
                >
                  <HiPaperAirplane className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};