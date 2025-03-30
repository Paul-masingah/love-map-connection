
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Calendar, Users, Clock, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIEnhancedHero from "@/components/AIEnhancedHero";
import AIInsightsFeature from "@/components/AIInsightsFeature";
import AIVideoShowcase from "@/components/AIVideoShowcase";
import AIMatchExamples from "@/components/AIMatchExamples";
import AIMatchPreview from "@/components/AIMatchPreview";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* AI Enhanced Hero Section */}
        <AIEnhancedHero />
        
        {/* AI Insights Feature Section */}
        <AIInsightsFeature />
        
        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Starting is easy.</h2>
              <p className="text-xl text-gray-600">Here's what your job will look like, start to finish.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-matchbox-purple">
                  To host an unforgettable event...
                </h3>
                <p className="text-gray-600">
                  Start with some of the same ingredients you'd use to throw any ordinary event.
                </p>
                
                <div className="space-y-8 mt-12">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-matchbox-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Friends or lovers?</h4>
                      <p className="text-gray-600">
                        Choose a romantic or platonic event
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-matchbox-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Sketch out the foundation</h4>
                      <p className="text-gray-600">
                        Choose a time and place, and who to invite
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Users className="h-6 w-6 text-matchbox-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Choose your questions</h4>
                      <p className="text-gray-600">
                        Build the perfect questionnaire
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-matchbox-purple" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Purchase Matchbox</h4>
                      <p className="text-gray-600">
                        Make things between us official
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-matchbox-purple">
                  Then, host your event.
                </h3>
                
                <div className="space-y-8 mt-12">
                  <div className="p-6 rounded-lg bg-gray-50 border">
                    <h4 className="text-lg font-semibold mb-2">Guests fill out your questionnaire</h4>
                    <p className="text-gray-600">
                      As each guest submits their answers, their name will appear on your admin view.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-lg bg-gray-50 border">
                    <h4 className="text-lg font-semibold mb-2">Use the algorithm to calculate their matches</h4>
                    <p className="text-gray-600">
                      The algorithm considers every possible configuration, applying cutting-edge relationship science.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-lg bg-gray-50 border">
                    <h4 className="text-lg font-semibold mb-2">Release the match results</h4>
                    <p className="text-gray-600">
                      Everyone at your event gets their match at the exact same time.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center pt-6">
                  <Button 
                    className="bg-matchbox-purple hover:bg-matchbox-purple/90"
                    asChild
                  >
                    <Link to="/create">Host an Event <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Match Examples Section */}
        <AIMatchExamples />
        
        {/* AI Video Showcase Section */}
        <AIVideoShowcase />
        
        {/* Premium Features */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Get more with Premium</h2>
              <p className="text-xl text-gray-600">
                Matchbox Premium includes the features you need to exceed your guests' high expectations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Include premium questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Design a spicier questionnaire to spark conversation and make the best matches possible.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg text-sm italic text-gray-600 space-y-1">
                    <p>Flirting is a form of cheating</p>
                    <p>I would have a threesome</p>
                    <p>I don't do hookups</p>
                    <p>My partner can be friends with an ex</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Drop a countdown for maximum suspense</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    In perfect sync for all your guests—reveal matches after 60 seconds of increasing anticipation.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg flex items-center justify-center">
                    <div className="text-4xl font-mono font-bold text-matchbox-purple">
                      00:42
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Insights reveal why each match works</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Let your guests see under the hood and understand why the algorithm made their match.
                  </p>
                  <div className="space-y-2">
                    <div className="bg-purple-50 p-3 rounded text-sm">
                      <p className="font-medium">You and Alex are rebellious</p>
                      <p className="text-xs text-gray-500">Only 1.3% of people can say the same</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded text-sm">
                      <p className="font-medium">Jordan can help you grow in ambition</p>
                      <p className="text-xs text-gray-500">Only 0.7% of people have this trait</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-16">
              <h3 className="text-xl font-semibold text-center mb-8">
                Plus, peace of mind that things can run smoothly:
              </h3>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-medium mb-2">Avoid age gaps</h4>
                  <p className="text-sm text-gray-600">
                    Built-in age constraints prevent awkward situations at events with a wider age range.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-medium mb-2">Add and remove people</h4>
                  <p className="text-sm text-gray-600">
                    If someone has to leave early, make sure nobody ends up with a missing match.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-medium mb-2">Carry over unused seats</h4>
                  <p className="text-sm text-gray-600">
                    If you pay for more capacity than you use, save the extra seats for your next event.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-medium mb-2">Commercial license</h4>
                  <p className="text-sm text-gray-600">
                    The right to charge your guests for tickets to your Matchbox events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Match Preview Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Experience Our AI Matching</h2>
                  <p className="text-gray-600 mb-6">
                    Try a preview of our AI matching technology to see how it generates personalized insights for each match.
                  </p>
                  <p className="text-sm text-gray-500">
                    Our AI analyzes responses to generate compatibility scores and personalized insights that help people connect more meaningfully.
                  </p>
                </div>
                
                <div>
                  <AIMatchPreview matchType="romantic" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Introductory Pricing</h2>
              <p className="text-lg text-gray-600">
                Choose the plan that fits your event needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl">Basic</CardTitle>
                  <p className="text-gray-600 text-sm">
                    Well-suited for casual events among friends and family
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
                    <p className="text-3xl font-bold">$4<span className="text-base font-normal text-gray-500">/guest</span></p>
                  </div>
                  
                  <Button 
                    className="w-full bg-matchbox-purple hover:bg-matchbox-purple/90"
                    asChild
                  >
                    <Link to="/create">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-matchbox-purple bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-xl">Premium</CardTitle>
                  <p className="text-gray-600 text-sm">
                    For larger events, ticketed events, and events with high expectations
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
                    <p className="text-3xl font-bold">$95<span className="text-base font-normal text-gray-500">+$5/guest</span></p>
                  </div>
                  
                  <Button 
                    className="w-full bg-matchbox-purple hover:bg-matchbox-purple/90"
                    asChild
                  >
                    <Link to="/create">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl">Elite</CardTitle>
                  <p className="text-gray-600 text-sm">
                    For the uncompromising host
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
                    <p className="text-3xl font-bold">$95<span className="text-base font-normal text-gray-500">+$8/guest</span></p>
                  </div>
                  
                  <Button 
                    className="w-full bg-matchbox-purple hover:bg-matchbox-purple/90"
                    asChild
                  >
                    <Link to="/create">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                How hosts pay for Premium: Most hosts fold the cost of the software into their ticket prices.
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Guide to hosting</h2>
                
                <Tabs defaultValue="control" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="control">Control</TabsTrigger>
                    <TabsTrigger value="gender">Gender</TabsTrigger>
                    <TabsTrigger value="guests">Guests</TabsTrigger>
                  </TabsList>
                  <TabsContent value="control" className="p-4 bg-white rounded-lg mt-2">
                    <h3 className="text-lg font-semibold mb-2">How much control do I have as a host?</h3>
                    <p className="text-gray-600">
                      As a host, you have full control over the event format, questionnaire selection, and timing of match reveals. Premium and Elite plans offer even more granular control over the matching experience.
                    </p>
                  </TabsContent>
                  <TabsContent value="gender" className="p-4 bg-white rounded-lg mt-2">
                    <h3 className="text-lg font-semibold mb-2">How do I make sure the gender balance works out ok?</h3>
                    <p className="text-gray-600">
                      For romantic events, you can monitor the gender balance in your admin dashboard and adjust invitations accordingly. For friendship events, gender balance isn't a concern as anyone can match with anyone.
                    </p>
                  </TabsContent>
                  <TabsContent value="guests" className="p-4 bg-white rounded-lg mt-2">
                    <h3 className="text-lg font-semibold mb-2">How do I curate my guest list?</h3>
                    <p className="text-gray-600">
                      You can invite guests directly or create an event page that allows people to sign up. For premium events, you can approve each guest or set up capacity limits by gender/orientation.
                    </p>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to make your event great in our comprehensive Guide to Hosting.
                  </p>
                  <Button variant="outline">Check it out</Button>
                </div>
              </div>
              
              <div className="bg-matchbox-purple text-white rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6">Get this party started.</h2>
                <p className="mb-8">
                  Ready to create unforgettable connections at your next event? Start your Matchbox journey today.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="w-full"
                  asChild
                >
                  <Link to="/create">Host an Event</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;
