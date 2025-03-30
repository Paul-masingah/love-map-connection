
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Shield } from "lucide-react";

interface OrderItem {
  name: string;
  price: number;
  details?: string;
}

interface OrderSummaryProps {
  items: OrderItem[];
  total: number;
}

const OrderSummary = ({ items, total }: OrderSummaryProps) => {
  return (
    <Card className="sticky top-6 shadow-md border-matchbox-purple/20">
      <CardHeader className="bg-gradient-to-r from-matchbox-purple/10 to-matchbox-coral/10">
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between">
              <div>
                <p className="font-medium">{item.name}</p>
                {item.details && (
                  <p className="text-sm text-gray-500">{item.details}</p>
                )}
              </div>
              <p className="font-medium">${item.price.toFixed(2)}</p>
            </div>
          ))}
          
          <Separator />
          
          <div className="flex justify-between font-semibold text-lg">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          
          <div className="bg-gray-50 -mx-6 px-6 py-4 mt-6">
            <h4 className="font-medium mb-3">What's included:</h4>
            <ul className="space-y-2">
              <li className="flex gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Full access to Matchbox premium features</span>
              </li>
              <li className="flex gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>AI-powered matching algorithm</span>
              </li>
              <li className="flex gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Admin dashboard to monitor signups</span>
              </li>
              <li className="flex gap-2 text-sm">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Commercial license to charge for tickets</span>
              </li>
            </ul>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-center text-gray-500 mt-4">
            <Shield className="h-4 w-4" /> 
            <span>100% satisfaction guarantee</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
