import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <div className="prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using CryptoTrack, you agree to be bound by these Terms and Conditions.</p>
          
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily access CryptoTrack for personal, non-commercial use only.</p>
          
          <h2>3. Disclaimer</h2>
          <p>The materials on CryptoTrack are provided on an 'as is' basis. CryptoTrack makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          
          <h2>4. Limitations</h2>
          <p>In no event shall CryptoTrack or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use CryptoTrack.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;