
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Check } from "lucide-react";

/**
 * The pricing page for creating an event.
 *
 * This component allows users to configure their event's pricing by
 * selecting the number of guests, choosing whether to charge for tickets,
 * and selecting a pricing tier (Basic, Premium, or Elite). The total
 * price is dynamically calculated and displayed based on these selections.
 *
 * @returns {JSX.Element} The rendered Pricing page.
 */
const Pricing = () => {
  const [guestCount, setGuestCount] = useState<number>(30);
  const [ticketing, setTicketing] = useState<string>("no");
  const [tierSelected, setTierSelected] = useState<string>("premium");
  
  // Calculate price based on tier and guest count
  const calculatePrice = () => {
    switch (tierSelected) {
      case "basic":
        return guestCount * 4;
      case "premium":
        return 95 + (guestCount * 5);
      case "elite":
        return 95 + (guestCount * 8);
      default:
        return 0;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Pricing</h1>
            <p className="text-gray-600">
              Event pricing is flexible based on the size of your event, the features you need, and whether you'll charge your guests to attend.
            </p>
          </div>
          
          <div className="flex justify-between mb-10 border-b">
            <div className="flex space-x-4 md:space-x-8">
              <div className="pb-4 text-gray-400">
                PLAN
              </div>
              <div className="pb-4 text-gray-400">
                QUESTIONS
              </div>
              <div className="pb-4 text-gray-400">
                BRANDING
              </div>
              <div className="border-b-2 border-matchbox-purple pb-4 font-semibold text-matchbox-purple">
                PRICING
              </div>
              <div className="pb-4 text-gray-400">
                REVIEW
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            {/* Guest Count Section */}
            <div className="bg-white border rounded-lg p-8">
              <h2 className="text-xl font-semibold mb-6">How many guests?</h2>
              
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">0</span>
                  <span className="text-gray-500">500+</span>
                </div>
                
                <Slider
                  value={[guestCount]}
                  min={0}
                  max={500}
                  step={10}
                  onValueChange={(value) => setGuestCount(value[0])}
                  className="py-4"
                />
                
                <div className="text-center">
                  <span className="text-3xl font-bold">{guestCount}</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                Click to select the maximum number of guests that will be allowed to participate. You won't be allowed to add more later, so we recommend including a buffer.
              </p>
            </div>
            
            {/* Ticketing Section */}
            <div className="bg-white border rounded-lg p-8">
              <h2 className="text-xl font-semibold mb-6">Charge guests for tickets?</h2>
              
              <RadioGroup 
                value={ticketing} 
                onValueChange={setTicketing}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className={`
                  border rounded-lg p-6 
                  ${ticketing === "no" ? "border-matchbox-purple bg-purple-50" : "bg-white border-gray-200"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="no" id="no" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="no" className="text-lg font-medium">No</Label>
                      <p className="text-gray-600 mt-1">I'll cover the cost of Matchbox myself.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`
                  border rounded-lg p-6 
                  ${ticketing === "yes" ? "border-matchbox-purple bg-purple-50" : "bg-white border-gray-200"}
                `}>
                  <div className="flex items-start">
                    <RadioGroupItem value="yes" id="yes" className="mt-1" />
                    <div className="ml-3">
                      <Label htmlFor="yes" className="text-lg font-medium">Yes</Label>
                      <p className="text-gray-600 mt-1">I'll fold Matchbox into the ticket price.</p>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </div>
            
            {/* Pricing Tiers Section */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Choose a tier</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className={`border-2 ${tierSelected === 'basic' ? 'border-matchbox-purple' : 'border-gray-200'}`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Basic</CardTitle>
                    <p className="text-gray-600 text-sm">
                      Doesn't include the premium questions you selected.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Select from 200 research-backed questions</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Run our matching algorithm</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Text everyone the results with the press of a button</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <p className="text-3xl font-bold">${(guestCount * 4).toFixed(2)}</p>
                    </div>
                    
                    <Button 
                      variant={tierSelected === 'basic' ? 'default' : 'outline'}
                      className={`w-full ${tierSelected === 'basic' ? 'bg-matchbox-purple hover:bg-matchbox-purple/90' : ''}`}
                      onClick={() => setTierSelected('basic')}
                    >
                      {tierSelected === 'basic' ? 'Selected' : 'Select Basic'}
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className={`border-2 ${tierSelected === 'premium' ? 'border-matchbox-purple' : 'border-gray-200'} ${tierSelected === 'premium' ? 'bg-purple-50' : ''}`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Premium</CardTitle>
                    <p className="text-gray-600 text-sm">
                      Access Matchbox's full feature set, and get a license to charge your guests for tickets.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Include premium questions</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Release clues to help guests narrow in on their match</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Send an interactive countdown for the big reveal</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Insights explain why the algorithm made each match</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Commercial license to charge guests for tickets</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <p className="text-3xl font-bold">${(95 + (guestCount * 5)).toFixed(2)}</p>
                    </div>
                    
                    <Button 
                      variant={tierSelected === 'premium' ? 'default' : 'outline'}
                      className={`w-full ${tierSelected === 'premium' ? 'bg-matchbox-purple hover:bg-matchbox-purple/90' : ''}`}
                      onClick={() => setTierSelected('premium')}
                    >
                      {tierSelected === 'premium' ? 'Selected' : 'Select Premium'}
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className={`border-2 ${tierSelected === 'elite' ? 'border-matchbox-purple' : 'border-gray-200'}`}>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">Elite</CardTitle>
                    <p className="text-gray-600 text-sm">
                      Everything in Premium, plus multiple matches for each guest.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Get multiple matches for each guest, up to three rounds of matching</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Add and remove guests between rounds</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Receive dedicated support from the Matchbox team</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <p className="text-3xl font-bold">${(95 + (guestCount * 8)).toFixed(2)}</p>
                    </div>
                    
                    <Button 
                      variant={tierSelected === 'elite' ? 'default' : 'outline'}
                      className={`w-full ${tierSelected === 'elite' ? 'bg-matchbox-purple hover:bg-matchbox-purple/90' : ''}`}
                      onClick={() => setTierSelected('elite')}
                    >
                      {tierSelected === 'elite' ? 'Selected' : 'Select Elite'}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="flex justify-between pt-8">
              <Button 
                variant="outline"
                size="lg"
                asChild
              >
                <Link to="/branding">Back to Branding</Link>
              </Button>
              
              <Button 
                className="bg-matchbox-purple hover:bg-matchbox-purple/90"
                size="lg"
                asChild
              >
                <Link to="/review">Continue to Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
