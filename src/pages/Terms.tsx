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
          <p>CryptoTrack provides cryptocurrency tracking, analysis, and monitoring services. Our platform offers:</p>
          <ul>
            <li>Real-time cryptocurrency price tracking and alerts</li>
            <li>Portfolio management tools</li>
            <li>Market analysis and trading insights</li>
            <li>Customizable watchlists and notifications</li>
            <li>Historical price data and charts</li>
            <li>API access (for premium users)</li>
          </ul>
          <p>We reserve the right to modify, suspend, or discontinue any aspect of the service at any time.</p>
          
          <h2>3. User Accounts</h2>
          <p>To access certain features of the Service, you must create an account. When creating an account, you agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and update your account information</li>
            <li>Keep your password secure and confidential</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>
          
          <h2>4. Subscription and Payments</h2>
          <p>4.1. Subscription Tiers:</p>
          <ul>
            <li><strong>Free Tier:</strong> Basic tracking and analysis features</li>
            <li><strong>Premium Tier:</strong> Advanced features, real-time alerts, and API access</li>
            <li><strong>Enterprise Tier:</strong> Custom solutions for institutional clients</li>
          </ul>
          
          <p>4.2. Payment Terms:</p>
          <ul>
            <li>All payments are processed securely through our payment providers</li>
            <li>Subscriptions are billed in advance on a recurring basis</li>
            <li>Prices are subject to change with 30 days notice</li>
            <li>Refunds are processed according to our refund policy</li>
          </ul>
          
          <h2>5. Data Usage and Privacy</h2>
          <p>Your use of the Service is governed by our Privacy Policy. We collect and process data in accordance with applicable data protection laws and our privacy commitments.</p>
          
          <h2>6. User Obligations</h2>
          <p>When using our Service, you agree not to:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon intellectual property rights</li>
            <li>Attempt to gain unauthorized access to the Service</li>
            <li>Use the Service for any illegal activities</li>
            <li>Manipulate or disrupt the Service's functionality</li>
            <li>Share account credentials with others</li>
            <li>Upload malicious code or content</li>
            <li>Engage in market manipulation or fraudulent activities</li>
          </ul>
          
          <h2>7. Intellectual Property</h2>
          <p>7.1. Our Property:</p>
          <ul>
            <li>All content, features, and functionality are owned by CryptoTrack</li>
            <li>Our trademarks, logos, and service marks are protected</li>
            <li>The Service's software and code are proprietary</li>
          </ul>
          
          <p>7.2. User Content:</p>
          <ul>
            <li>You retain rights to content you submit</li>
            <li>You grant us a license to use and display your content</li>
            <li>We may remove content that violates our terms</li>
          </ul>
          
          <h2>8. Disclaimer of Warranties</h2>
          <p>8.1. Service Warranty:</p>
          <ul>
            <li>The Service is provided "as is" without warranties</li>
            <li>We do not guarantee continuous, uninterrupted service</li>
            <li>Market data accuracy is subject to third-party providers</li>
          </ul>
          
          <p>8.2. Investment Disclaimer:</p>
          <ul>
            <li>We do not provide financial advice</li>
            <li>All investment decisions are your responsibility</li>
            <li>Past performance does not guarantee future results</li>
          </ul>
          
          <h2>9. Limitation of Liability</h2>
          <p>9.1. Liability Caps:</p>
          <ul>
            <li>Our liability is limited to subscription fees paid</li>
            <li>We are not liable for indirect or consequential damages</li>
            <li>Market losses are not our responsibility</li>
          </ul>
          
          <h2>10. Service Modifications</h2>
          <p>We reserve the right to:</p>
          <ul>
            <li>Modify or discontinue features</li>
            <li>Update pricing and subscription terms</li>
            <li>Change service providers or technologies</li>
            <li>Implement new policies or requirements</li>
          </ul>
          
          <h2>11. Termination</h2>
          <p>11.1. Account Termination:</p>
          <ul>
            <li>You may terminate your account at any time</li>
            <li>We may terminate accounts for violations</li>
            <li>Termination may result in data deletion</li>
          </ul>
          
          <h2>12. Dispute Resolution</h2>
          <p>12.1. Resolution Process:</p>
          <ul>
            <li>Disputes will be resolved through arbitration</li>
            <li>The arbitration will be conducted in English</li>
            <li>The arbitration location will be determined by us</li>
          </ul>
          
          <h2>13. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which CryptoTrack is registered, without regard to its conflict of law provisions.</p>
          
          <h2>14. Changes to Terms</h2>
          <p>We may update these Terms at any time. Changes will be effective upon posting to the Service. Your continued use of the Service after changes constitutes acceptance of the updated Terms.</p>
          
          <h2>15. Contact Information</h2>
          <p>For questions about these Terms, please contact us at:</p>
          <ul>
            <li>Email: legal@cryptotrack.org</li>
            <li>Address: [Company Address]</li>
            <li>Phone: [Phone Number]</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;