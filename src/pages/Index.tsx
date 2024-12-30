import { Bell, Brain, ChartLine, LineChart, Mail, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PriceTicker } from "@/components/PriceTicker";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingCard } from "@/components/PricingCard";

const features = [
  {
    icon: Bell,
    title: "Price Alerts",
    description: "Set custom alerts for price movements and never miss an opportunity.",
  },
  {
    icon: ChartLine,
    title: "Real-time Data",
    description: "Access live market data and advanced charting tools.",
  },
  {
    icon: Brain,
    title: "AI Insights",
    description: "Get AI-powered predictions and market analysis.",
  },
  {
    icon: MessagesSquare,
    title: "Sentiment Analysis",
    description: "Track market sentiment across social media and news.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Crypto Trader",
    content: "The AI insights have completely transformed my trading strategy. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Michael Chen",
    role: "Portfolio Manager",
    content: "The real-time alerts have helped me catch multiple profitable opportunities.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Emma Davis",
    role: "Investment Advisor",
    content: "A game-changer for tracking and analyzing cryptocurrency markets.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text animate-fade-up">
              Track Crypto Markets with AI-Powered Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
              Get real-time alerts, advanced analytics, and AI predictions to stay ahead in the crypto market.
            </p>
            <Button size="lg" className="animate-fade-up" style={{ animationDelay: "400ms" }}>
              Get Started Free
            </Button>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "600ms" }}>
            <PriceTicker />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 features-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text">
            Powerful Features for Smart Trading
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 200}ms` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: LineChart, title: "Track Markets", description: "Monitor real-time prices and market movements" },
              { icon: Bell, title: "Set Alerts", description: "Create custom price and movement alerts" },
              { icon: Brain, title: "Get Insights", description: "Receive AI-powered market analysis" },
              { icon: Mail, title: "Stay Updated", description: "Get notifications via email or mobile" },
            ].map((step, i) => (
              <div key={i} className="text-center animate-fade-up" style={{ animationDelay: `${i * 200}ms` }}>
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 features-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 200}ms` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
              <PricingCard
                title="Basic"
                price="Free"
                features={[
                  "Real-time market data",
                  "Basic price alerts",
                  "Limited market analysis",
                  "Email notifications",
                ]}
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <PricingCard
                title="Pro"
                price="$29"
                features={[
                  "Advanced price alerts",
                  "Full market analysis",
                  "AI-powered insights",
                  "Priority notifications",
                ]}
                isPopular
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "400ms" }}>
              <PricingCard
                title="Enterprise"
                price="$99"
                features={[
                  "Custom alert rules",
                  "Advanced AI features",
                  "API access",
                  "Dedicated support",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">CryptoTrack</h3>
              <p className="text-muted-foreground">Advanced cryptocurrency tracking with AI-powered insights.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Price Alerts</li>
                <li>Real-time Data</li>
                <li>AI Insights</li>
                <li>Market Analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4">Subscribe for market updates and news.</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-secondary/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-muted text-center text-muted-foreground">
            <p>&copy; 2024 CryptoTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;