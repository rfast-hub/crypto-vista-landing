import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { TermsHeader } from "@/components/terms/TermsHeader";
import { ServiceDescription } from "@/components/terms/ServiceDescription";
import { UserAccounts } from "@/components/terms/UserAccounts";
import { Subscriptions } from "@/components/terms/Subscriptions";
import { LegalSection } from "@/components/terms/LegalSection";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none">
          <TermsHeader />
          <ServiceDescription />
          <UserAccounts />
          <Subscriptions />
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Usage and Privacy</h2>
          <p>Your use of the Service is governed by our Privacy Policy. We collect and process data in accordance with applicable data protection laws and our privacy commitments.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">6. User Obligations</h2>
          <p>When using our Service, you agree not to:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon intellectual property rights</li>
            <li>Attempt to gain unauthorized access to the Service</li>
            <li>Use the Service for any illegal activities</li>
            <li>Manipulate or disrupt the Service's functionality</li>
            <li>Share account credentials with others</li>
            <li>Upload malicious code or content</li>
            <li>Engage in market manipulation or fraudulent activities</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Intellectual Property</h2>
          <p>7.1. Our Property:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>All content, features, and functionality are owned by CryptoTrack</li>
            <li>Our trademarks, logos, and service marks are protected</li>
            <li>The Service's software and code are proprietary</li>
          </ul>
          
          <p>7.2. User Content:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>You retain rights to content you submit</li>
            <li>You grant us a license to use and display your content</li>
            <li>We may remove content that violates our terms</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Disclaimer of Warranties</h2>
          <p>8.1. Service Warranty:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>The Service is provided "as is" without warranties</li>
            <li>We do not guarantee continuous, uninterrupted service</li>
            <li>Market data accuracy is subject to third-party providers</li>
          </ul>
          
          <p>8.2. Investment Disclaimer:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>We do not provide financial advice</li>
            <li>All investment decisions are your responsibility</li>
            <li>Past performance does not guarantee future results</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">9. Limitation of Liability</h2>
          <p>9.1. Liability Caps:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Our liability is limited to subscription fees paid</li>
            <li>We are not liable for indirect or consequential damages</li>
            <li>Market losses are not our responsibility</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">10. Service Modifications</h2>
          <p>We reserve the right to:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>Modify or discontinue features</li>
            <li>Update pricing and subscription terms</li>
            <li>Change service providers or technologies</li>
            <li>Implement new policies or requirements</li>
          </ul>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">11. Termination</h2>
          <p>11.1. Account Termination:</p>
          <ul className="list-disc pl-6 mt-4">
            <li>You may terminate your account at any time</li>
            <li>We may terminate accounts for violations</li>
            <li>Termination may result in data deletion</li>
          </ul>
          
          <LegalSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;