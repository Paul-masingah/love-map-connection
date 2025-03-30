
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const CreateEvent = () => {
  const [matchType, setMatchType] = useState<string>("platonic");
  const [audienceType, setAudienceType] = useState<string>("friends");
  const [ageConstraint, setAgeConstraint] = useState<string>("noConstraint");
  const [location, setLocation] = useState<string>("home");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Plan your event</h1>
            <p className="text-gray-600">
              A little planning goes a long way towards making sure everybody has a good experience and a great match.
            </p>
          </div>
          
          <div className="flex justify-between mb-10 border-b">
            <div className="flex space-x-4 md:space-x-8">
              <div className="border-b-2 border-matchbox-purple pb-4 font-semibold text-matchbox-purple">
                PLAN
              </div>
              <div className="pb-4 text-gray-400">
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
          
          <div className="space-y-10">
            {/* Matching Experience Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">What's the matching experience?</h2>
              
              <RadioGroup 
                value={matchType} 
                onValueChange={setMatchType}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className={`
                  border rounded-lg p-6 
                  ${matchType === "platonic" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start mb-4">
                    <RadioGroupItem value="platonic" id="platonic" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="platonic" className="text-lg font-medium">Platonic matching</Label>
                      <p className="text-gray-600 mt-1">Anyone can match with anyone.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  border rounded-lg p-6 
                  ${matchType === "romantic" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start mb-4">
                    <RadioGroupItem value="romantic" id="romantic" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="romantic" className="text-lg font-medium">Romantic matching</Label>
                      <p className="text-gray-600 mt-1">The questionnaire will ask everyone their gender and sexual orientation.</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            {/* Who's Coming Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Who's coming?</h2>
              
              <RadioGroup 
                value={audienceType} 
                onValueChange={setAudienceType}
                className="grid grid-cols-1 gap-4"
              >
                <div className={`
                  border rounded-lg p-6 
                  ${audienceType === "friends" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="friends" id="friends" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="friends" className="text-lg font-medium">I'm inviting my friends</Label>
                      <p className="text-gray-600 mt-1">I'll make sure the gender balance works out myself.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  border rounded-lg p-6 
                  ${audienceType === "friendsOfFriends" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="friendsOfFriends" id="friendsOfFriends" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="friendsOfFriends" className="text-lg font-medium">I'm inviting friends of friends</Label>
                      <p className="text-gray-600 mt-1">I'll ask each person to bring someone of their preferred gender, so the event ends up balanced.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  border rounded-lg p-6 
                  ${audienceType === "community" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="community" id="community" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="community" className="text-lg font-medium">I run an existing community</Label>
                      <p className="text-gray-600 mt-1">I'll invite people from a pre-existing pool of guests.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  border rounded-lg p-6 
                  ${audienceType === "strangers" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="strangers" id="strangers" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="strangers" className="text-lg font-medium">I'm advertising tickets to strangers</Label>
                      <p className="text-gray-600 mt-1">I'll make a set number of tickets available for guests based on their gender/preferences.</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
              
              <p className="text-gray-500 text-sm mt-3">
                This won't affect the matching, but it's important for you to plan.
              </p>
            </div>
            
            {/* Age Constraints Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Should we consider their age?</h2>
              
              <RadioGroup 
                value={ageConstraint} 
                onValueChange={setAgeConstraint}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className={`
                  border rounded-lg p-6 
                  ${ageConstraint === "noConstraint" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="noConstraint" id="noConstraint" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="noConstraint" className="text-lg font-medium">Don't consider age</Label>
                      <p className="text-gray-600 mt-1">My guests are of all a similar age, such that they would feel comfortable matching with anyone.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  border rounded-lg p-6 
                  ${ageConstraint === "constraint" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="constraint" id="constraint" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="constraint" className="text-lg font-medium">Use age-constrained matching</Label>
                      <p className="text-gray-600 mt-1">The questionnaire will ask guests their age, and matches will be made between guests close in age.</p>
                      <div className="mt-2 bg-yellow-50 p-2 rounded text-xs">
                        PREMIUM
                      </div>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            {/* Location Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Where will it happen?</h2>
              
              <RadioGroup 
                value={location} 
                onValueChange={setLocation}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className={`
                  border rounded-lg p-6 
                  ${location === "home" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="home" id="home" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="home" className="text-lg font-medium">I'm hosting at my place</Label>
                      <p className="text-gray-600 mt-1">My home can accommodate the event I'm planning.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  border rounded-lg p-6 
                  ${location === "public" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="public" id="public" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="public" className="text-lg font-medium">I'm hosting in a public space</Label>
                      <p className="text-gray-600 mt-1">We'll all meet up at the park / etc.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  border rounded-lg p-6 
                  ${location === "venue" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="venue" id="venue" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="venue" className="text-lg font-medium">I know a restaurant / bar / club</Label>
                      <p className="text-gray-600 mt-1">We'll get our matches over food and drinks.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  border rounded-lg p-6 
                  ${location === "eventSpace" ? "border-matchbox-purple bg-purple-50" : "bg-white"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="eventSpace" id="eventSpace" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="eventSpace" className="text-lg font-medium">I'm getting an event space</Label>
                      <p className="text-gray-600 mt-1">I'm working with a venue that accommodates social events / gatherings.</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
              
              <p className="text-gray-500 text-sm mt-3">
                This won't affect the matching, but it's important for you to plan.
              </p>
            </div>
            
            {/* Date Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">When will it happen?</h2>
              
              <div className="border rounded-lg p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="month" className="block mb-2">Month</Label>
                    <select 
                      id="month" 
                      className="w-full p-2 border rounded-md"
                      defaultValue=""
                    >
                      <option value="" disabled>Select month</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="day" className="block mb-2">Day</Label>
                    <select 
                      id="day" 
                      className="w-full p-2 border rounded-md"
                      defaultValue=""
                    >
                      <option value="" disabled>Select day</option>
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                        <option key={day} value={day.toString().padStart(2, '0')}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="year" className="block mb-2">Year</Label>
                    <select 
                      id="year" 
                      className="w-full p-2 border rounded-md"
                      defaultValue={new Date().getFullYear().toString()}
                    >
                      {Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i).map(year => (
                        <option key={year} value={year.toString()}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button 
                className="bg-matchbox-purple hover:bg-matchbox-purple/90"
                size="lg"
                asChild
              >
                <Link to="/questions">Continue to Questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateEvent;
