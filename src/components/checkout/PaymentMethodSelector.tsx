
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, CreditCardIcon } from "lucide-react";
import { useState } from "react";

interface PaymentMethodSelectorProps {
  selectedMethod: string;
  onSelectMethod: (method: string) => void;
}

/**
 * A component for selecting a payment method.
 *
 * This component provides a set of options for users to select their
 * preferred payment method, such as credit/debit card or PayPal. It
 * manages the selection state through props.
 *
 * @param {PaymentMethodSelectorProps} props - The component props.
 * @param {string} props.selectedMethod - The currently selected method.
 * @param {(method: string) => void} props.onSelectMethod - The callback
 *   to be called when a new method is selected.
 * @returns {JSX.Element} The rendered payment method selector component.
 */
const PaymentMethodSelector = ({ 
  selectedMethod, 
  onSelectMethod 
}: PaymentMethodSelectorProps) => {
  return (
    <RadioGroup 
      value={selectedMethod} 
      onValueChange={onSelectMethod}
      className="space-y-3"
    >
      <div className={`
        flex items-center space-x-2 rounded-lg border p-4 transition-all
        ${selectedMethod === 'card' ? 'border-matchbox-purple bg-matchbox-purple/5' : 'hover:bg-gray-50'}
      `}>
        <RadioGroupItem value="card" id="card" className="border-matchbox-purple text-matchbox-purple" />
        <label htmlFor="card" className="flex flex-1 items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-gray-500" />
            <div>
              <span className="font-medium">Credit / Debit Card</span>
              <p className="text-sm text-gray-500">Pay securely with your card</p>
            </div>
          </div>
          <div className="flex gap-1">
            <img src="https://cdn.gpteng.co/assets/cards/visa.svg" alt="Visa" className="h-6" />
            <img src="https://cdn.gpteng.co/assets/cards/mastercard.svg" alt="Mastercard" className="h-6" />
            <img src="https://cdn.gpteng.co/assets/cards/amex.svg" alt="Amex" className="h-6" />
          </div>
        </label>
      </div>
      
      <div className={`
        flex items-center space-x-2 rounded-lg border p-4 transition-all
        ${selectedMethod === 'paypal' ? 'border-matchbox-purple bg-matchbox-purple/5' : 'hover:bg-gray-50'}
      `}>
        <RadioGroupItem value="paypal" id="paypal" className="border-matchbox-purple text-matchbox-purple" />
        <label htmlFor="paypal" className="flex flex-1 items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 flex items-center">
              <img src="https://cdn.gpteng.co/assets/checkout/paypal.svg" alt="PayPal" className="h-5" />
            </div>
            <div>
              <span className="font-medium">PayPal</span>
              <p className="text-sm text-gray-500">Fast and secure payment</p>
            </div>
          </div>
        </label>
      </div>
    </RadioGroup>
  );
};

export default PaymentMethodSelector;
