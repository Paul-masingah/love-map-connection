
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AIMatchExamples = () => {
  const matchExamples = [
    {
      id: 1,
      person1: {
        name: "Sophia",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        initial: "S"
      },
      person2: {
        name: "Michael",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        initial: "M"
      },
      score: 98,
      insights: [
        "Both share a passion for outdoor adventures",
        "Complementary communication styles",
        "Similar values on life goals and ambitions"
      ]
    },
    {
      id: 2,
      person1: {
        name: "Emma",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        initial: "E"
      },
      person2: {
        name: "Daniel",
        avatar: "https://randomuser.me/api/portraits/men/78.jpg",
        initial: "D"
      },
      score: 95,
      insights: [
        "Both are intellectually curious and love learning",
        "Shared interest in cultural experiences",
        "Compatible approaches to problem-solving"
      ]
    },
    {
      id: 3,
      person1: {
        name: "Alex",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
        initial: "A"
      },
      person2: {
        name: "Jordan",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
        initial: "J"
      },
      score: 92,
      insights: [
        "Complementary personality traits",
        "Shared appreciation for creativity and arts",
        "Similar humor styles that create natural connection"
      ]
    },
    {
      id: 4,
      person1: {
        name: "Taylor",
        avatar: "https://randomuser.me/api/portraits/women/91.jpg",
        initial: "T"
      },
      person2: {
        name: "Jamie",
        avatar: "https://randomuser.me/api/portraits/men/40.jpg",
        initial: "J"
      },
      score: 96,
      insights: [
        "Both have growth mindsets and ambition",
        "Complementary strengths and weaknesses",
        "Aligned on core values and relationship goals"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            REAL MATCH EXAMPLES
          </span>
          <h2 className="text-3xl font-bold mb-4">See Our AI Matchmaking in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our AI identifies compatibility factors that create meaningful connections
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {matchExamples.map((match) => (
                <CarouselItem key={match.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <Card className="bg-white border-purple-100 overflow-hidden shadow-lg h-full">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 text-white">
                        <div className="flex justify-between items-center">
                          <h3 className="font-bold">AI Match Example</h3>
                          <span className="bg-white text-purple-700 px-2 py-1 rounded-full text-xs font-bold">
                            {match.score}% Compatible
                          </span>
                        </div>
                      </div>
                      
                      {/* People Matched */}
                      <div className="p-6">
                        <div className="flex items-center justify-center space-x-4 mb-6">
                          <div className="text-center">
                            <Avatar className="w-20 h-20 border-2 border-purple-200 mb-2">
                              <AvatarImage src={match.person1.avatar} alt={match.person1.name} />
                              <AvatarFallback>{match.person1.initial}</AvatarFallback>
                            </Avatar>
                            <p className="font-medium">{match.person1.name}</p>
                          </div>
                          
                          <div className="w-16 h-0.5 bg-purple-200 relative">
                            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-purple-600 text-3xl">
                              ✨
                            </span>
                          </div>
                          
                          <div className="text-center">
                            <Avatar className="w-20 h-20 border-2 border-purple-200 mb-2">
                              <AvatarImage src={match.person2.avatar} alt={match.person2.name} />
                              <AvatarFallback>{match.person2.initial}</AvatarFallback>
                            </Avatar>
                            <p className="font-medium">{match.person2.name}</p>
                          </div>
                        </div>
                        
                        {/* AI Insights */}
                        <div className="bg-purple-50 rounded-xl p-4">
                          <h4 className="font-semibold text-purple-800 mb-3">AI-Generated Insights:</h4>
                          <ul className="space-y-2">
                            {match.insights.map((insight, index) => (
                              <li key={index} className="flex items-start">
                                <span className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                                  {index + 1}
                                </span>
                                <span className="text-sm text-gray-700">{insight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex justify-center">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AIMatchExamples;
