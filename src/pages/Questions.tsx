
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

/**
 * A page for selecting questions for an event questionnaire.
 *
 * This component allows event organizers to build a questionnaire by
 * selecting from a list of available questions categorized into tabs
 * (Suggested, Popular, Important, Spicy, Professional). Selected questions
 * are displayed in a separate panel, and the user can add or remove
 * questions as needed.
 *
 * @returns {JSX.Element} The rendered Questions page.
 */
// Sample questions for the different categories
const sampleQuestions = {
  suggested: [
    "I would sacrifice stability to pursue a passion",
    "I pride myself on telling hard truths",
    "I do whatever it takes to get ahead",
    "I'm special",
    "I am going to change the world",
    "I am a competitive person",
    "I am unafraid to challenge authority",
    "I want children"
  ],
  popular: [
    "I enjoy PDA",
    "I like drama",
    "I break rules I don't agree with",
    "Conflict just isn't in my nature",
    "Would you rather be left at the altar or leave someone at the altar?",
    "I could live a happy life in solitude",
    "I want a simple life",
    "How single are you?"
  ],
  important: [
    "I would accept a bribe",
    "My partner can be friends with an ex",
    "I consider myself to be an adult",
    "I believe in an afterlife",
    "It's important my kids be raised religious",
    "It's important my kids play musical instruments growing up",
    "I'd rather never apologize than over-apologize"
  ],
  spicy: [
    "I would have a threesome",
    "Flirting is a form of cheating",
    "I prefer kinky sex",
    "I generally like to take control during sex",
    "I'd rule the world if I could",
    "I would help my partner cover up a murder",
    "I can't stand when people prioritize their relationship over their friends"
  ],
  professional: [
    "I am a workaholic",
    "I define my success by the amount of money I make",
    "Billionaires should not exist",
    "I take pride in my punctuality",
    "I would sacrifice my personal life for my career goals",
    "I need to be famous",
    "Parties are perfect networking opportunities"
  ]
};

const Questions = () => {
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [questionCategory, setQuestionCategory] = useState<string>("suggested");
  
  const addQuestion = (question: string) => {
    if (!selectedQuestions.includes(question)) {
      setSelectedQuestions([...selectedQuestions, question]);
    }
  };
  
  const removeQuestion = (question: string) => {
    setSelectedQuestions(selectedQuestions.filter(q => q !== question));
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Questions</h1>
            <p className="text-gray-600">
              Select 20-30 questions. Or, start with a pre-made set.
            </p>
          </div>
          
          <div className="flex justify-between mb-10 border-b">
            <div className="flex space-x-4 md:space-x-8">
              <div className="pb-4 text-gray-400">
                PLAN
              </div>
              <div className="border-b-2 border-matchbox-purple pb-4 font-semibold text-matchbox-purple">
                QUESTIONS
              </div>
              <div className="pb-4 text-gray-400">
                BRANDING
              </div>
              <div className="pb-4 text-gray-400">
                PRICING
              </div>
              <div className="pb-4 text-gray-400">
                REVIEW
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Selected Questions */}
            <div>
              <h2 className="text-xl font-semibold mb-4">YOUR EVENT</h2>
              
              <div className="bg-white border rounded-lg p-4 min-h-96">
                {selectedQuestions.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                    <p>Drag questions here to start building your questionnaire.</p>
                    <p className="mt-2">or</p>
                    <Button 
                      variant="outline" 
                      className="mt-2"
                      onClick={() => setSelectedQuestions([...sampleQuestions.suggested])}
                    >
                      start with SUGGESTED
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {selectedQuestions.map((question, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-50 p-3 rounded-md flex justify-between items-center"
                      >
                        <span>{question}</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => removeQuestion(question)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mt-4 text-gray-500 text-sm">
                {selectedQuestions.length} / 30 questions selected
              </div>
            </div>
            
            {/* Available Questions */}
            <div>
              <h2 className="text-xl font-semibold mb-4">AVAILABLE QUESTIONS</h2>
              
              <Tabs 
                defaultValue="suggested" 
                value={questionCategory}
                onValueChange={setQuestionCategory}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="suggested">SUGGESTED</TabsTrigger>
                  <TabsTrigger value="popular">POPULAR</TabsTrigger>
                  <TabsTrigger value="important">IMPORTANT</TabsTrigger>
                  <TabsTrigger value="spicy">SPICY</TabsTrigger>
                  <TabsTrigger value="professional">PROFESSIONAL</TabsTrigger>
                </TabsList>
                
                <TabsContent value="suggested" className="p-0 mt-4">
                  <div className="bg-white border rounded-lg p-4 space-y-2">
                    {sampleQuestions.suggested.map((question, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-md flex justify-between items-center cursor-pointer hover:bg-purple-50 ${
                          selectedQuestions.includes(question) ? "bg-purple-50" : "bg-gray-50"
                        }`}
                        onClick={() => addQuestion(question)}
                      >
                        <span>{question}</span>
                        {!selectedQuestions.includes(question) && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={(e) => {
                              e.stopPropagation();
                              addQuestion(question);
                            }}
                            className="text-matchbox-purple hover:text-matchbox-purple/90 hover:bg-purple-50"
                          >
                            Add
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="popular" className="p-0 mt-4">
                  <div className="bg-white border rounded-lg p-4 space-y-2">
                    {sampleQuestions.popular.map((question, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-md flex justify-between items-center cursor-pointer hover:bg-purple-50 ${
                          selectedQuestions.includes(question) ? "bg-purple-50" : "bg-gray-50"
                        }`}
                        onClick={() => addQuestion(question)}
                      >
                        <span>{question}</span>
                        {!selectedQuestions.includes(question) && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={(e) => {
                              e.stopPropagation();
                              addQuestion(question);
                            }}
                            className="text-matchbox-purple hover:text-matchbox-purple/90 hover:bg-purple-50"
                          >
                            Add
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="important" className="p-0 mt-4">
                  <div className="bg-white border rounded-lg p-4 space-y-2">
                    {sampleQuestions.important.map((question, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-md flex justify-between items-center cursor-pointer hover:bg-purple-50 ${
                          selectedQuestions.includes(question) ? "bg-purple-50" : "bg-gray-50"
                        }`}
                        onClick={() => addQuestion(question)}
                      >
                        <span>{question}</span>
                        {!selectedQuestions.includes(question) && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={(e) => {
                              e.stopPropagation();
                              addQuestion(question);
                            }}
                            className="text-matchbox-purple hover:text-matchbox-purple/90 hover:bg-purple-50"
                          >
                            Add
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="spicy" className="p-0 mt-4">
                  <div className="bg-white border rounded-lg p-4 space-y-2">
                    {sampleQuestions.spicy.map((question, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-md flex justify-between items-center cursor-pointer hover:bg-purple-50 ${
                          selectedQuestions.includes(question) ? "bg-purple-50" : "bg-gray-50"
                        }`}
                        onClick={() => addQuestion(question)}
                      >
                        <span>{question}</span>
                        {!selectedQuestions.includes(question) && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={(e) => {
                              e.stopPropagation();
                              addQuestion(question);
                            }}
                            className="text-matchbox-purple hover:text-matchbox-purple/90 hover:bg-purple-50"
                          >
                            Add
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="professional" className="p-0 mt-4">
                  <div className="bg-white border rounded-lg p-4 space-y-2">
                    {sampleQuestions.professional.map((question, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-md flex justify-between items-center cursor-pointer hover:bg-purple-50 ${
                          selectedQuestions.includes(question) ? "bg-purple-50" : "bg-gray-50"
                        }`}
                        onClick={() => addQuestion(question)}
                      >
                        <span>{question}</span>
                        {!selectedQuestions.includes(question) && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={(e) => {
                              e.stopPropagation();
                              addQuestion(question);
                            }}
                            className="text-matchbox-purple hover:text-matchbox-purple/90 hover:bg-purple-50"
                          >
                            Add
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="flex justify-between pt-8">
            <Button 
              variant="outline"
              size="lg"
              asChild
            >
              <Link to="/create">Back to Plan</Link>
            </Button>
            
            <Button 
              className="bg-matchbox-purple hover:bg-matchbox-purple/90"
              size="lg"
              disabled={selectedQuestions.length < 1}
              asChild
            >
              <Link to="/branding">Continue to Branding</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Questions;
