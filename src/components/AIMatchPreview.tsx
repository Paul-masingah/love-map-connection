
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Bot } from "lucide-react";
import { generateInsights, User } from '@/services/matchmakingService';

interface AIMatchPreviewProps {
  matchType: string;
}

const AIMatchPreview = ({ matchType }: AIMatchPreviewProps) => {
  const [loading, setLoading] = useState(false);
  const [insights, setInsights] = useState<string[]>([]);
  
  const generateSampleMatch = async () => {
    setLoading(true);
    
    // Generate some sample insights based on the match type
    const user1: User = {
      id: "user1",
      name: "You",
      gender: matchType === "romantic" ? "female" : undefined,
      orientation: matchType === "romantic" ? "heterosexual" : undefined,
      age: 28,
      answers: {
        "q1": 4, "q2": 2, "q3": 5, "q4": 3, "q5": 1,
        "q6": 3, "q7": 4, "q8": 5, "q9": 2, "q10": 4
      }
    };
    
    const user2: User = {
      id: "user2",
      name: "Sam",
      gender: matchType === "romantic" ? "male" : undefined,
      orientation: matchType === "romantic" ? "heterosexual" : undefined,
      age: 30,
      answers: {
        "q1": 5, "q2": 1, "q3": 4, "q4": 3, "q5": 2,
        "q6": 4, "q7": 3, "q8": 5, "q9": 2, "q10": 3
      }
    };
    
    try {
      // Artificial delay to simulate AI processing
      setTimeout(async () => {
        const generatedInsights = await generateInsights(user1, user2, 85);
        setInsights(generatedInsights);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error generating insights:", error);
      setLoading(false);
    }
  };

  return (
    <Card className="overflow-hidden border-purple-200">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Bot className="h-5 w-5 text-purple-600" />
          <h3 className="font-semibold">AI Match Preview</h3>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          See how our AI generates insights for {matchType === "romantic" ? "romantic" : "friendship"} matches
        </p>
        
        {insights.length > 0 ? (
          <div className="bg-purple-50 rounded-lg p-4 mb-4">
            <p className="font-medium mb-2">AI-Generated Compatibility Insights:</p>
            <ul className="space-y-2 text-sm">
              {insights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">{index + 1}</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : loading ? (
          <div className="space-y-2 mb-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ) : null}
        
        <Button 
          onClick={generateSampleMatch}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          {loading ? "Analyzing..." : insights.length > 0 ? "Regenerate Sample" : "Generate Sample Match"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIMatchPreview;
