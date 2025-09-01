"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add email service integration here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-white dark:text-gray-900 mb-4 hover:scale-105 transition-transform duration-300">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-600 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities and
            exciting projects. Let&apos;s discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <Card className="bg-slate-800/80 dark:bg-gray-50 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-slate-700 dark:border-gray-200 hover:border-blue-400 dark:hover:border-blue-600">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white dark:text-gray-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-200">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-200">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div>
                    <p className="font-semibold text-white dark:text-gray-900">
                      Email
                    </p>
                    <p className="text-gray-300 dark:text-gray-600">
                      dansu.john@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-200">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors duration-200">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div>
                    <p className="font-semibold text-white dark:text-gray-900">
                      Phone
                    </p>
                    <p className="text-gray-300 dark:text-gray-600">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-200">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors duration-200">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div>
                    <p className="font-semibold text-white dark:text-gray-900">
                      Location
                    </p>
                    <p className="text-gray-300 dark:text-gray-600">
                      Remote / Worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-slate-800/80 dark:bg-gray-50 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-slate-700 dark:border-gray-200 hover:border-blue-400 dark:hover:border-blue-600">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white dark:text-gray-900">
                  Follow Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group"
                  >
                    <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group"
                  >
                    <Linkedin className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 hover:scale-105 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group"
                  >
                    <Twitter className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Skills Badges */}
            <Card className="bg-slate-800/80 dark:bg-gray-50 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-slate-700 dark:border-gray-200 hover:border-blue-400 dark:hover:border-blue-600">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white dark:text-gray-900">
                  Available For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full-Stack Development",
                    "Cybersecurity",
                    "Penetration Testing",
                    "Network Security",
                    "Team Leadership",
                    "Mentoring",
                  ].map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-200 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <Card className="bg-slate-800/80 dark:bg-gray-50 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-slate-700 dark:border-gray-200 hover:border-blue-400 dark:hover:border-blue-600">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white dark:text-gray-900">
                  Send Message
                </CardTitle>
                <p className="text-gray-300 dark:text-gray-600">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <Label
                        htmlFor="name"
                        className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                      >
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700 dark:bg-white border-slate-600 dark:border-gray-300 focus:border-blue-400 focus:ring-blue-400 transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-600 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500"
                      />
                    </div>
                    <div className="space-y-2 group">
                      <Label
                        htmlFor="email"
                        className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-700 dark:bg-white border-slate-600 dark:border-gray-300 focus:border-blue-400 focus:ring-blue-400 transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-600 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <Label
                      htmlFor="subject"
                      className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-slate-700 dark:bg-white border-slate-600 dark:border-gray-300 focus:border-blue-400 focus:ring-blue-400 transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-600 text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>

                  <div className="space-y-2 group">
                    <Label
                      htmlFor="message"
                      className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-700 dark:bg-white border-slate-600 dark:border-gray-300 focus:border-blue-400 focus:ring-blue-400 transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-600 resize-none text-white dark:text-gray-900 placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full hover:scale-105 hover:shadow-lg transition-all duration-200 group"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
