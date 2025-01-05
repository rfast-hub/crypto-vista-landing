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
          <p>We collect several types of information from and about users of our Service:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, email address, and contact details provided during registration</li>
            <li><strong>Usage Data:</strong> Information about how you use our Service, including trading preferences and alert settings</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies</li>
            <li><strong>Financial Information:</strong> Cryptocurrency holdings and trading history (when provided)</li>
          </ul>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for various purposes:</p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To provide customer support</li>
            <li>To provide analysis or valuable information for improving the Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
          
          <h2>3. Data Storage and Security</h2>
          <p>We implement appropriate technical and organizational measures to maintain the security of your personal information, including:</p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Access controls and authentication measures</li>
            <li>Regular backups and disaster recovery procedures</li>
          </ul>
          
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
          <ul>
            <li>With service providers who assist in operating our Service</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>With your consent or at your direction</li>
          </ul>
          
          <h2>5. Your Data Protection Rights</h2>
          <p>Under data protection laws, you have rights including:</p>
          <ul>
            <li>The right to access your personal data</li>
            <li>The right to correct inaccurate personal data</li>
            <li>The right to request deletion of your personal data</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to data portability</li>
          </ul>
          
          <h2>6. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          
          <h2>7. Third-Party Services</h2>
          <p>Our Service may contain links to other sites that are not operated by us. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
          
          <h2>8. Children's Privacy</h2>
          <p>Our Service does not address anyone under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.</p>
          
          <h2>9. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.</p>
          
          <h2>10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>By email: privacy@cryptotrack.org</li>
            <li>By visiting our website: https://cryptotrack.org/contact</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;