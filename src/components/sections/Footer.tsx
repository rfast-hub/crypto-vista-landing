import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
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
        </div>
        <div className="mt-12 pt-8 border-t border-muted text-center text-muted-foreground">
          <p>&copy; 2024 CryptoTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};