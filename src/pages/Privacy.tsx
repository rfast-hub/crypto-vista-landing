import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PrivacyHeader } from "@/components/privacy/PrivacyHeader";
import { DataCollection } from "@/components/privacy/DataCollection";
import { DataUsage } from "@/components/privacy/DataUsage";
import { ContactSection } from "@/components/privacy/ContactSection";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-invert max-w-none">
          <PrivacyHeader />
          <DataCollection />
          <DataUsage />
          <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies</h2>
          <p>We use cookies to enhance your experience. You can choose to accept or decline cookies.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">8. Third-Party Services</h2>
          <p>We may employ third-party companies and services to facilitate our service.</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">9. Children's Privacy</h2>
          <p>Our service is not intended for use by children under the age of 13.</p>
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
