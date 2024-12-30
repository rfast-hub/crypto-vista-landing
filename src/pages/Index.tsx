import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Bell, Brain, ChartLine, LineChart, Mail, MessagesSquare } from "lucide-react";
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
      <Navigation />
      <Hero />
      
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
            Simple, Affordable Pricing
          </h2>
          <div className="max-w-md mx-auto">
            <div className="animate-fade-up">
              <PricingCard
                title="All Access"
                price="$8"
                features={[
                  "Real-time market data",
                  "Advanced price alerts",
                  "Full market analysis",
                  "AI-powered insights",
                  "Priority notifications",
                  "Custom alert rules",
                  "API access",
                  "Dedicated support",
                ]}
                isPopular
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
