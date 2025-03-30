
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

const AIVideoShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our AI Technology in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our advanced AI algorithms create perfect matches for your events
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Video Showcase */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/qWVxMbg8j9o?autoplay=0&controls=1&rel=0" 
                title="AI Matchmaking Algorithm Visualization"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">AI Matchmaking Visualization</h3>
              <p className="text-gray-600">Watch how our algorithm analyzes personality traits to create optimal matches.</p>
            </div>
          </div>
          
          {/* AI Animation */}
          <Card className="overflow-hidden shadow-lg transform transition-all duration-500 hover:translate-y-[-5px]">
            <CardContent className="p-0">
              <div className="p-6 bg-purple-600 text-white">
                <h3 className="text-lg font-bold mb-2">The Power of AI Matchmaking</h3>
                <p>Our neural networks process thousands of data points to find the perfect matches.</p>
              </div>
              <div className="relative h-[300px] bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
                {/* Animated network nodes */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 600">
                  <g className="animate-pulse-slow">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <circle 
                        key={i}
                        cx={100 + (i % 5) * 150} 
                        cy={100 + Math.floor(i / 5) * 150} 
                        r={5 + Math.random() * 8}
                        fill="rgba(255, 255, 255, 0.6)"
                      />
                    ))}
                    {Array.from({ length: 30 }).map((_, i) => (
                      <line 
                        key={`line-${i}`}
                        x1={100 + (i % 5) * 150} 
                        y1={100 + Math.floor(i / 5) * 150}
                        x2={100 + ((i + 1) % 5) * 150}
                        y2={100 + Math.floor((i + 1) / 5) * 150}
                        stroke="rgba(255, 255, 255, 0.3)"
                        strokeWidth="1"
                      />
                    ))}
                  </g>
                </svg>
                {/* Foreground content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-flex rounded-full bg-purple-700 p-4 mb-4 animate-pulse-slow">
                      <svg 
                        className="w-16 h-16 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="1.5" 
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Neural Network Processing</h4>
                    <p className="text-purple-100">Analyzing compatibility with 99.4% accuracy</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIVideoShowcase;
