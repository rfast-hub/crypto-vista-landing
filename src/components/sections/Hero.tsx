import { Button } from "@/components/ui/button";
import { PriceTicker } from "@/components/PriceTicker";

export const Hero = () => {
  const handleGetStarted = () => {
    window.location.href = 'https://signup.cryptotrack.org';
  };

  return (
    <section className="relative hero-gradient pt-32 pb-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-up">
            AI-Powered Crypto Tracking
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Real-time alerts and AI predictions for crypto traders.
          </p>
          <Button 
            size="lg" 
            className="animate-fade-up" 
            style={{ animationDelay: "400ms" }}
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
        <div className="animate-fade-up" style={{ animationDelay: "600ms" }}>
          <PriceTicker />
        </div>
      </div>
    </section>
  );
};