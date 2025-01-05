export const UserAccounts = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-8 mb-4">3. User Accounts</h2>
      <p>3.1. Account Creation and Maintenance:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>You must be at least 18 years old to create an account</li>
        <li>You must provide accurate, current, and complete information during registration</li>
        <li>You are responsible for maintaining the confidentiality of your account credentials</li>
        <li>You must promptly update your account information to maintain its accuracy</li>
        <li>You may not create multiple accounts without our express permission</li>
        <li>You may not share your account credentials with any third party</li>
        <li>You must comply with all applicable laws and regulations in your jurisdiction</li>
      </ul>

      <p className="mt-4">3.2. Account Security:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>You must use strong, unique passwords and enable two-factor authentication when available</li>
        <li>You must notify us immediately of any unauthorized access or security breaches</li>
        <li>We may suspend or terminate accounts showing suspicious activity</li>
        <li>You are responsible for all activities occurring under your account</li>
        <li>We may require additional verification for security purposes</li>
      </ul>

      <p className="mt-4">3.3. Account Restrictions:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>We reserve the right to refuse service to anyone for any reason</li>
        <li>Accounts may be suspended for Terms violations</li>
        <li>Suspended accounts may be subject to investigation</li>
        <li>Account restoration may require additional verification</li>
        <li>Terminated accounts may not be recreated without permission</li>
      </ul>

      <p className="mt-4">3.4. Account Deletion:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>You may request account deletion at any time</li>
        <li>Deletion requests will be processed within 30 days</li>
        <li>Some information may be retained for legal compliance</li>
        <li>Subscription refunds are subject to our refund policy</li>
        <li>Data export options are available before deletion</li>
      </ul>
    </div>
  );
};