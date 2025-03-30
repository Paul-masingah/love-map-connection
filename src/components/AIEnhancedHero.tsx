
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AIEnhancedHero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-indigo-900/70 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-network-of-neurons-in-the-brain-49896-large.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-28 md:py-40 relative z-20">
        <div className="max-w-3xl">
          <div className="animate-fadeIn">
            <span className="inline-block py-1 px-3 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
              POWERED BY ADVANCED AI
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
              Intelligent Matching <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-pink-200">For Unforgettable Events</span>
            </h1>
            <p className="text-xl text-purple-50 mb-8 max-w-2xl">
              Our AI-driven algorithm creates perfect matches by analyzing personality, preferences, and compatibility factors for your events.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-purple-800 hover:bg-purple-50 font-medium px-8 py-6 text-lg"
                asChild
              >
                <Link to="/create">Start Matching</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-lg"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* AI Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 bg-white/10 backdrop-blur-md rounded-xl p-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">750K+</p>
              <p className="text-purple-200 text-sm">Matches Created</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-purple-200 text-sm">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">5M+</p>
              <p className="text-purple-200 text-sm">Data Points Analyzed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEnhancedHero;
