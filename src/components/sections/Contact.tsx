import { Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 gradient-text">
          Contact Us
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <Mail className="h-6 w-6 text-primary" />
            <a href="mailto:support@cryptovista.com" className="text-lg hover:text-primary transition-colors">
              support@cryptovista.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Phone className="h-6 w-6 text-primary" />
            <a href="tel:+15551234567" className="text-lg hover:text-primary transition-colors">
              +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};