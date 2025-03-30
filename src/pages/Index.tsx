
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Brain, Wand, Lightbulb } from "lucide-react";

const Index = () => {
  const [showAiDemo, setShowAiDemo] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="text-center max-w-3xl px-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Welcome to Matchbox
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          The AI-powered matchmaking platform for your next great event
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
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
        
        <Button
          variant="ghost"
          className="text-purple-600 hover:bg-purple-50 group"
          onClick={() => setShowAiDemo(!showAiDemo)}
        >
          <Brain className="mr-2 h-5 w-5 group-hover:animate-pulse" />
          {showAiDemo ? "Hide AI Demo" : "See AI in Action"}
        </Button>
      </div>
      
      {showAiDemo && (
        <div className="w-full max-w-5xl px-4 mb-16 animate-fadeIn">
          <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">Our AI Matchmaking Technology</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <AIFeatureCard 
              icon={<Brain className="h-8 w-8 text-purple-500" />}
              title="Smart Analysis"
              description="Our algorithms analyze 30+ dimensions of compatibility based on psychology research."
            />
            
            <AIFeatureCard 
              icon={<Wand className="h-8 w-8 text-purple-500" />}
              title="Perfect Pairing"
              description="We consider all possible combinations to find ideal matches for your event."
            />
            
            <AIFeatureCard 
              icon={<Lightbulb className="h-8 w-8 text-purple-500" />}
              title="AI Insights"
              description="Discover why each match works with our explainable AI technology."
            />
          </div>
          
          <Separator className="my-10" />
          
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Compatibility Simulator</h3>
            <p className="text-center text-gray-600 mb-6">
              This is how our AI determines compatibility between participants
            </p>
            
            <div className="bg-purple-50 rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Alex</p>
                  <p className="text-sm text-gray-500">Answers: 25 questions</p>
                </div>
                
                <div className="text-center">
                  <div className="relative h-20 w-20 mx-auto">
                    <div className="absolute inset-0 bg-purple-200 rounded-full animate-ping opacity-25"></div>
                    <div className="relative flex items-center justify-center h-20 w-20 bg-purple-600 rounded-full text-white font-bold text-xl">
                      87%
                    </div>
                  </div>
                  <p className="text-sm mt-2 text-gray-600">Compatibility</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-medium">Jordan</p>
                  <p className="text-sm text-gray-500">Answers: 25 questions</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <p className="font-medium mb-2">AI-Generated Insights:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
                    <span>You and Jordan are both creative thinkers (top 5% match)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
                    <span>Jordan can help you grow in ambition (complementary trait)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
                    <span>You share similar communication styles (high compatibility)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                asChild
              >
                <Link to="/create">Try It Yourself</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <p className="text-gray-500 text-sm mt-auto pb-4">
        Powered by the technology behind the Marriage Pact.
        <span className="block">750,000 people matched to date.</span>
      </p>
    </div>
  );
};

// Component for AI feature cards
const AIFeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Index;
