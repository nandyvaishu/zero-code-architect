
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
      
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to the newsletter.",
      });
      
      // Reset the success state after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-customGreen-50">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join My Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive the latest updates, tips, and resources on AI tools, 
            no-code development, and visual programming.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={isSubmitting || isSubscribed}
            />
            <Button 
              type="submit"
              className={`bg-customGreen-500 hover:bg-customGreen-600 transition-all ${
                isSubmitting ? 'opacity-80' : ''
              } ${isSubscribed ? 'bg-customGreen-600' : ''}`}
              disabled={isSubmitting || isSubscribed}
            >
              {isSubmitting ? (
                <span className="animate-pulse">Subscribing...</span>
              ) : isSubscribed ? (
                <span className="flex items-center">
                  <Check className="mr-2 h-4 w-4 animate-scale-in" /> Subscribed
                </span>
              ) : (
                <span className="flex items-center">
                  Subscribe <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>

          <div className="mt-4 text-sm text-gray-500">
            No spam, unsubscribe anytime.
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
