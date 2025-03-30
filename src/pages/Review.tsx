
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Check } from "lucide-react";

const Review = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  
  const handleContinue = () => {
    if (!firstName || !lastName || !email || !phoneNumber) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate sending a verification code
    setIsVerifying(true);
    toast({
      title: "Verification code sent",
      description: "Check your phone for the verification code"
    });
  };
  
  const handleVerify = () => {
    if (!verificationCode) {
      toast({
        title: "Verification code required",
        description: "Please enter the verification code sent to your phone",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate successful verification
    toast({
      title: "Success!",
      description: "Your event has been created! You'll receive an email with further instructions.",
    });
    
    // Redirect to home or a success page
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Review</h1>
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
              <div className="pb-4 text-gray-400">
                PRICING
              </div>
              <div className="border-b-2 border-matchbox-purple pb-4 font-semibold text-matchbox-purple">
                REVIEW
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white border rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">YOUR EVENT</h2>
                <div className="space-y-2">
                  <p className="font-semibold">match.box/playing</p>
                </div>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">SUMMARY</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-matchbox-purple" />
                    <p className="text-gray-600">17 questions</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-matchbox-purple" />
                    <p className="text-gray-600">Up to 80 participants</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-matchbox-purple" />
                    <p className="text-gray-600">Matching platonically</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-matchbox-purple" />
                    <p className="text-gray-600">Unlocked Matchbox's full feature set</p>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-4">
                  <h3 className="font-semibold mb-2">WHAT'S NEXT?</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Your event link will be active right away.</p>
                    <p>You'll get an admin link, where you can monitor signups and run the algorithm.</p>
                    <p>You'll get all of this in an email.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              {!isVerifying ? (
                <div className="bg-white border rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input 
                          id="firstName" 
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input 
                          id="lastName" 
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email address</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone number</Label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          US +1
                        </span>
                        <Input 
                          id="phoneNumber" 
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="rounded-l-none"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleContinue}
                      className="w-full bg-matchbox-purple hover:bg-matchbox-purple/90"
                    >
                      CONTINUE
                    </Button>
                  </div>
                  
                  <div className="mt-8 border-t pt-6">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr>
                          <td className="py-1">Premium event</td>
                          <td className="py-1 text-right">$95.00</td>
                        </tr>
                        <tr>
                          <td className="py-1">80 participants @ $5.00</td>
                          <td className="py-1 text-right">$400.00</td>
                        </tr>
                        <tr className="border-t font-semibold">
                          <td className="py-2">Total</td>
                          <td className="py-2 text-right">$495.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="bg-white border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-6">Verify code</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="verificationCode">Enter the code sent to your phone</Label>
                      <Input 
                        id="verificationCode" 
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        className="text-center text-xl tracking-widest font-mono"
                        maxLength={6}
                        required
                      />
                    </div>
                    
                    <div className="text-center">
                      <button 
                        className="text-matchbox-purple text-sm"
                        onClick={() => toast({
                          title: "Code resent",
                          description: "A new verification code has been sent to your phone"
                        })}
                      >
                        Didn't get a code?
                      </button>
                    </div>
                    
                    <Button 
                      onClick={handleVerify}
                      className="w-full bg-matchbox-purple hover:bg-matchbox-purple/90"
                    >
                      VERIFY CODE
                    </Button>
                  </div>
                  
                  <div className="mt-8 border-t pt-6">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr>
                          <td className="py-1">Premium event</td>
                          <td className="py-1 text-right">$95.00</td>
                        </tr>
                        <tr>
                          <td className="py-1">80 participants @ $5.00</td>
                          <td className="py-1 text-right">$400.00</td>
                        </tr>
                        <tr className="border-t font-semibold">
                          <td className="py-2">Total</td>
                          <td className="py-2 text-right">$495.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Review;
