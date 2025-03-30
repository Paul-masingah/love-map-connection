
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Brain, 
  UserCheck, 
  TrendingUp,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AIInsightsFeature = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-purple-100 opacity-50"></div>
      <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 rounded-full bg-indigo-100 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4 animate-fadeIn">
            AI-POWERED MATCHMAKING
          </span>
          <h2 className="text-4xl font-bold mb-4">Personalized Insights from Our AI</h2>
          <p className="text-xl text-gray-600">
            Our advanced algorithms analyze compatibility across multiple dimensions to create the most meaningful connections.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* AI Insight Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 ai-insight-card">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mb-6">
              <Sparkles size={24} />
            </div>
            <h3 className="text-lg font-bold mb-3">Compatibility Analysis</h3>
            <p className="text-gray-600 mb-4">
              Our AI analyzes 50+ personality traits to identify perfect matches based on both similarities and complementary differences.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-auto">
              <div className="flex items-start space-x-2">
                <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p className="text-sm text-gray-700">93% of users found their AI match to be highly compatible</p>
              </div>
            </div>
          </div>
          
          {/* AI Insight Card 2 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 ai-insight-card">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg mb-6">
              <Brain size={24} />
            </div>
            <h3 className="text-lg font-bold mb-3">Personality Mapping</h3>
            <p className="text-gray-600 mb-4">
              Our neural networks create detailed personality maps that reveal unique insights about compatibility potential.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mt-auto">
              <div className="flex items-center space-x-1">
                <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-shifting rounded-full" style={{ width: '82%' }}></div>
                </div>
                <span className="text-xs font-medium text-gray-700">82%</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Deeper insights than traditional matching methods
              </p>
            </div>
          </div>
          
          {/* AI Insight Card 3 */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 ai-insight-card">
            <div className="flex items-center justify-center w-12 h-12 bg-pink-100 text-pink-600 rounded-lg mb-6">
              <UserCheck size={24} />
            </div>
            <h3 className="text-lg font-bold mb-3">Conversation Starters</h3>
            <p className="text-gray-600 mb-4">
              Our AI generates personalized conversation starters based on shared interests and personality traits.
            </p>
            <div className="mt-auto space-y-2">
              <div className="text-sm p-2 bg-purple-50 rounded-lg text-purple-800 border border-purple-100">
                "You both value authenticity and shared a similar response to question #12"
              </div>
              <div className="text-sm p-2 bg-blue-50 rounded-lg text-blue-800 border border-blue-100">
                "Your match is highly creative - ask them about their latest project!"
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-matchbox-purple hover:bg-purple-700 text-white px-8 py-6 rounded-lg text-lg font-medium">
            <span>Experience AI Matchmaking</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIInsightsFeature;
