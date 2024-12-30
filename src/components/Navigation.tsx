import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-muted">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl gradient-text">CryptoTrack</div>
        <Button variant="secondary" size="sm" className="gap-2">
          <LogIn className="w-4 h-4" />
          Login
        </Button>
      </div>
    </nav>
  );
};