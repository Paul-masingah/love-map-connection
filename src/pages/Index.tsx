
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Welcome to Matchbox
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          The AI-powered matchmaking platform for your next great event
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg"
            asChild
          >
            <Link to="/create">Get Started</Link>
          </Button>
          <Button 
            variant="outline" 
            className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg"
            asChild
          >
            <Link to="/checkout">View Plans</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
