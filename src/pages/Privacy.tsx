import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us when using CryptoTrack.</p>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to operate and improve our services, and to provide you with the best possible user experience.</p>
          
          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the ways described in this privacy policy.</p>
          
          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to maintain the security of your personal information.</p>
          
          <h2>5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information at any time.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;