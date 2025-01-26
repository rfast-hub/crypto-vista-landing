import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export const PricingCard = ({ title, price, features, isPopular }: PricingCardProps) => {
  const handleGetStarted = () => {
    window.location.href = 'https://signup.cryptotrack.org';
  };

  return (
    <div className={`p-6 rounded-xl ${isPopular ? "bg-primary/20" : "bg-secondary/50"} backdrop-blur-sm card-hover relative`}>
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-2">
        <span className="text-3xl font-bold">{price}</span>
        {price !== "Free" && <span className="text-muted-foreground">/month</span>}
      </div>
      <p className="text-sm text-muted-foreground mb-6">7-day free trial</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center space-x-3">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className="w-full" 
        variant={isPopular ? "default" : "outline"}
        onClick={handleGetStarted}
      >
        Get Started
      </Button>
    </div>
  );
};