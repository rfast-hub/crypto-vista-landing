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
          <p>By accessing and using CryptoTrack ("the Service"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our service.</p>
          
          <h2>2. Description of Service</h2>
          <p>CryptoTrack provides cryptocurrency tracking, analysis, and monitoring services. Our platform offers real-time data, price alerts, AI-powered insights, and market analysis tools. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.</p>
          
          <h2>3. User Accounts</h2>
          <p>To access certain features of the Service, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.</p>
          
          <h2>4. Subscription and Payments</h2>
          <p>Some features of CryptoTrack require a paid subscription. By subscribing to our premium services, you agree to pay all fees in accordance with the pricing and payment terms presented to you for the subscription. All payments are non-refundable unless otherwise specified.</p>
          
          <h2>5. Data Usage and Privacy</h2>
          <p>Your use of the Service is also governed by our Privacy Policy. By using CryptoTrack, you consent to the collection and use of information as detailed in our Privacy Policy.</p>
          
          <h2>6. User Obligations</h2>
          <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul>
            <li>Use the service for any illegal activities</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Share your account credentials with others</li>
          </ul>
          
          <h2>7. Intellectual Property</h2>
          <p>All content, features, and functionality of the Service, including but not limited to text, graphics, logos, and software, are the exclusive property of CryptoTrack and are protected by international copyright, trademark, and other intellectual property laws.</p>
          
          <h2>8. Disclaimer of Warranties</h2>
          <p>The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or usefulness of any information on the Service. Any reliance you place on such information is strictly at your own risk.</p>
          
          <h2>9. Limitation of Liability</h2>
          <p>In no event shall CryptoTrack be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
          
          <h2>10. Modifications to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. We will notify users of any material changes via email or through the Service. Your continued use of the Service after such modifications constitutes your acceptance of the updated Terms.</p>
          
          <h2>11. Termination</h2>
          <p>We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms.</p>
          
          <h2>12. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which CryptoTrack is registered, without regard to its conflict of law provisions.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;