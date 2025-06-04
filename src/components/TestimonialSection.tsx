import React from "react";
import { cn } from "@/lib/utils";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 relative bg-gray-100 dark:bg-gray-800 overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 z-0 transform transition-transform duration-1000 hover:scale-105">
        <img
          src="https://media.istockphoto.com/id/470885155/photo/stack-of-multiple-people-expression.jpg?s=612x612&w=0&k=20&c=IIu-Yj61XVfwOzeWM7FWNl5LqMynMhLrBkiaV3dAvqQ="
          alt="Abstract Background"
          className="w-full h-full object-cover object-center opacity-10 dark:opacity-15"
        />
      </div>

      {/* Floating animated decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-200 dark:bg-blue-800/20 rounded-full opacity-20 dark:opacity-10 blur-3xl animate-float-slow"></div> {/* Changed color to match theme */}
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-customBlue-200 dark:bg-customBlue-800/20 rounded-full opacity-20 dark:opacity-10 blur-3xl animate-pulse-light"></div> {/* Changed color to match theme */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 relative animate-slide-in-bottom">
          <div className="inline-block mb-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full animate-pulse">Hear From Others</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10 dark:text-white animate-fade-in" style={{ animationDelay: "0.3s" }}>
            What Users Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
            Authentic feedback from users of my projects.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 relative border border-gray-200 dark:border-gray-700 animate-scale-up">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl text-green-500 opacity-20 dark:opacity-10">
            &ldquo; {/* Main testimonial content based on the Cricket Fantasy App project description */}
          </div>
          <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6 relative z-10">
            "As a huge cricket fan, I'm seriously impressed with your fantasy app! The sign-in and Google login make it super easy to get started, and pulling in live match data via CricAPI is a game-changer. Creating leagues with friends and managing the wallet are seamless. Plus, that AI chatbot you added is a cool touch works more like dream 11 chatbot for interactive help. You've built a solid, full-featured platform!"
          </p>
          <div className="text-right text-gray-800 dark:text-gray-200 font-semibold mt-4"> {/* Added margin-top */}
            - Shiva Kumar
          </div>
          <div className="text-right text-sm text-gray-500 dark:text-gray-400">
            Founder of SIANA Vision &Cricket Fan
          </div>
          {/* Small cricket ball graphic */}
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg animate-spin-slow">
            🏏
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;