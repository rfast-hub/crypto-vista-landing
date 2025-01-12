import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const { toast } = useToast();

  const handleCancelSubscription = () => {
    toast({
      title: "Cancellation Request Received",
      description: "Please check your email for instructions to cancel your subscription.",
      duration: 5000,
    });
  };

  return (
    <footer className="py-8 border-t border-muted mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CryptoTrack. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm">
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <button
              onClick={handleCancelSubscription}
              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};