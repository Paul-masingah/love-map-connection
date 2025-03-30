
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Branding = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [hostName, setHostName] = useState("");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Event branding</h1>
            <p className="text-gray-600">
              Customize how your event will appear to your guests when they arrive at your event page.
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
              <div className="border-b-2 border-matchbox-purple pb-4 font-semibold text-matchbox-purple">
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
          
          <div className="bg-white border rounded-lg p-8 space-y-8">
            <div className="space-y-2">
              <Label htmlFor="eventTitle">Event title</Label>
              <Input 
                id="eventTitle" 
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                placeholder="Summer Mixer 2025"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="eventLink">Event link</Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  match.box/
                </span>
                <Input 
                  id="eventLink" 
                  value={eventLink}
                  onChange={(e) => setEventLink(e.target.value)}
                  placeholder="summer-mixer"
                  className="rounded-l-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hostName">Host's name</Label>
              <Input 
                id="hostName" 
                value={hostName}
                onChange={(e) => setHostName(e.target.value)}
                placeholder="Your name"
              />
              <p className="text-sm text-gray-500">Appears on your event page</p>
            </div>
          </div>
          
          <div className="flex justify-between pt-8">
            <Button 
              variant="outline"
              size="lg"
              asChild
            >
              <Link to="/questions">Back to Questions</Link>
            </Button>
            
            <Button 
              className="bg-matchbox-purple hover:bg-matchbox-purple/90"
              size="lg"
              asChild
            >
              <Link to="/pricing">Continue to Pricing</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Branding;
