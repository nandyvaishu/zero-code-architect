
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset the success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "nandygavas@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "8610382303",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Worldwide",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background image with overlay - more visible */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://media.istockphoto.com/id/1221854851/photo/jigsaw-puzzle.jpg?s=612x612&w=0&k=20&c=pszN1nU-qtzaHmTsKKaX1cOGQap1uC6hCtPg-39UkW0="
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-10 dark:opacity-15"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about my services? 
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="hover-lift">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </div>
                <div className="hover-lift">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </div>
              </div>

              <div className="hover-lift">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="dark:bg-gray-800 dark:text-white dark:border-gray-600"
                />
              </div>

              <div className="hover-lift">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="dark:bg-gray-800 dark:text-white dark:border-gray-600"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-customGreen-500 hover:bg-customGreen-600 dark:bg-customGreen-600 dark:hover:bg-customGreen-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : isSubmitted ? (
                  <span>Message Sent</span>
                ) : (
                  <span className="flex items-center justify-center">
                    Send Message <Send className="ml-2 h-4 w-4 animate-bounce" />
                  </span>
                )}
              </Button>
            </form>

            {isSubmitted && (
              <div className="mt-6 p-4 bg-customGreen-50 dark:bg-customGreen-900/30 rounded-lg text-center animate-fade-in">
                <p className="text-customGreen-700 dark:text-customGreen-300">
                  Thank you for your message! I'll get back to you as soon as possible.
                </p>
              </div>
            )}
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full transform hover:scale-[1.02] transition-all duration-300 animate-scale-in">
              <h3 className="text-xl font-semibold mb-6 dark:text-white">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start hover-lift group transition-all duration-300">
                    <div className="bg-customGreen-50 dark:bg-customGreen-900/30 p-2 rounded mr-4 text-customGreen-500 dark:text-customGreen-300 group-hover:bg-customGreen-100 dark:group-hover:bg-customGreen-800/50 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">{item.title}</h4>
                      <p className="font-medium dark:text-gray-200">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Office Hours</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between dark:text-gray-300">
                    <span className="text-gray-600 dark:text-gray-400">Monday - Saturday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  
                  <li className="flex justify-between dark:text-gray-300">
                    <span className="text-gray-600 dark:text-gray-400">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
