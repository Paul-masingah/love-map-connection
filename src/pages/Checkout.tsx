
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CreditCard, Lock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import PaymentMethodSelector from "@/components/checkout/PaymentMethodSelector";
import OrderSummary from "@/components/checkout/OrderSummary";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      toast({
        title: "Payment successful!",
        description: "Your Matchbox event has been created.",
      });
      
      // Redirect after successful payment
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    }, 2000);
  };
  
  if (isComplete) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1 checkout-bg py-16">
          <div className="container max-w-4xl">
            <div className="flex flex-col items-center justify-center text-center space-y-6 py-12">
              <div className="rounded-full bg-green-100 p-3 animate-fade-in-up">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
              
              <h1 className="text-3xl font-bold">Payment Successful!</h1>
              <p className="text-gray-600 max-w-md">
                Your Matchbox event has been created. You'll receive an email shortly with all the details.
              </p>
              
              <div className="mt-8 animate-pulse-slow">
                <Button 
                  className="bg-matchbox-purple hover:bg-matchbox-purple/90"
                  size="lg"
                  asChild
                >
                  <Link to="/">Return to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 checkout-bg py-12">
        <div className="container max-w-6xl">
          <div className="mb-8 fade-in">
            <h1 className="text-3xl font-bold mb-2">Secure Checkout</h1>
            <p className="text-gray-600">
              Complete your payment to create your Matchbox event.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6 slide-in-up">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-matchbox-purple" />
                    Payment Method
                  </CardTitle>
                  <CardDescription>
                    All transactions are secure and encrypted
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <PaymentMethodSelector 
                    selectedMethod={paymentMethod}
                    onSelectMethod={(method) => setPaymentMethod(method as "card" | "paypal")}
                  />
                  
                  {paymentMethod === "card" && (
                    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2 col-span-2">
                            <Label htmlFor="cardName">Cardholder Name</Label>
                            <Input id="cardName" placeholder="John Smith" required />
                          </div>
                          
                          <div className="space-y-2 col-span-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <div className="relative">
                              <Input 
                                id="cardNumber" 
                                placeholder="1234 5678 9012 3456" 
                                required 
                                className="pl-11"
                              />
                              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" required />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" required />
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-matchbox-purple hover:bg-matchbox-purple/90 transition-colors"
                        disabled={isProcessing}
                      >
                        {isProcessing ? "Processing..." : "Complete Payment"}
                      </Button>
                    </form>
                  )}
                  
                  {paymentMethod === "paypal" && (
                    <div className="space-y-6 mt-6">
                      <p className="text-center text-gray-600">
                        You'll be redirected to PayPal to complete your payment.
                      </p>
                      
                      <Button 
                        onClick={handleSubmit}
                        className="w-full bg-[#0070ba] hover:bg-[#005ea6] transition-colors"
                        disabled={isProcessing}
                      >
                        {isProcessing ? "Processing..." : "Continue with PayPal"}
                      </Button>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="border-t bg-gray-50 flex justify-center py-4">
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Lock className="h-3 w-3" /> 
                    Your data is secured with 256-bit SSL encryption
                  </p>
                </CardFooter>
              </Card>
              
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle>Billing Address</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" required />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2 col-span-1">
                        <Label htmlFor="zip">Zip Code</Label>
                        <Input id="zip" required />
                      </div>
                      
                      <div className="space-y-2 col-span-1">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      
                      <div className="space-y-2 col-span-1">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" required defaultValue="United States" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="slide-in-right">
              <OrderSummary 
                items={[
                  { name: "Premium Event", price: 95.00 },
                  { name: "80 participants", price: 400.00, details: "@ $5.00 each" },
                ]}
                total={495.00}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
