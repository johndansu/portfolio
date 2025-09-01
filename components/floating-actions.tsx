"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  User, 
  Code, 
  Terminal, 
  Briefcase, 
  Mail, 
  Plus,
  X 
} from "lucide-react";

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: Home, label: "Home", section: "home" },
    { icon: User, label: "About", section: "about" },
    { icon: Code, label: "Skills", section: "skills" },
    { icon: Terminal, label: "Terminal", section: "terminal" },
    { icon: Briefcase, label: "Projects", section: "projects" },
    { icon: Mail, label: "Contact", section: "contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Action Buttons */}
      <div className={`space-y-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {actions.map((action, index) => (
          <div
            key={action.section}
            className="flex items-center gap-3"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <span className="text-sm text-muted-foreground bg-background px-2 py-1 rounded-md shadow-lg">
              {action.label}
            </span>
            <Button
              size="icon"
              variant="secondary"
              onClick={() => scrollToSection(action.section)}
              className="w-12 h-12 shadow-lg hover:scale-110 transition-all duration-200"
            >
              <action.icon className="h-5 w-5" />
            </Button>
          </div>
        ))}
      </div>

      {/* Main Toggle Button */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-destructive hover:bg-destructive/90 rotate-45' 
            : 'bg-primary hover:bg-primary/90'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Plus className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}
