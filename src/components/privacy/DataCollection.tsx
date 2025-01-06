export const DataCollection = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
      <p className="font-semibold">1.1. Personal Information:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>Full name, email address, and contact information</li>
        <li>Government-issued identification documents when required for verification</li>
        <li>Billing and payment information, including credit card details and banking information</li>
        <li>Cryptocurrency wallet addresses and transaction history</li>
        <li>Account preferences and settings</li>
        <li>Communication preferences and history</li>
        <li>Profile pictures and other uploaded content</li>
        <li>Social media handles and related information when linked</li>
      </ul>

      <p className="font-semibold mt-4">1.2. Usage Information:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>Device information including hardware model, operating system, unique device identifiers</li>
        <li>Browser type and version, plugins, and language preferences</li>
        <li>IP address, location data, and timezone settings</li>
        <li>Usage patterns, including pages visited, features used, and time spent</li>
        <li>Trading and portfolio data, including transaction history and asset holdings</li>
        <li>Search queries and filtering preferences</li>
        <li>Performance data and error logs</li>
        <li>Interaction with advertisements and promotional content</li>
      </ul>

      <p className="font-semibold mt-4">1.3. Technical Data:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>API usage patterns and request logs</li>
        <li>Network performance data and connection type</li>
        <li>Session duration and authentication tokens</li>
        <li>Cookies and similar tracking technologies</li>
        <li>Mobile device information including app version and push notification tokens</li>
        <li>Screen resolution and display settings</li>
        <li>System crash reports and performance metrics</li>
      </ul>

      <p className="font-semibold mt-4">1.4. Third-Party Information:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>Information from identity verification services</li>
        <li>Credit reporting agencies and financial institutions</li>
        <li>Public blockchain data and network information</li>
        <li>Social media platforms when integration is enabled</li>
        <li>Marketing and analytics partners</li>
        <li>Data enrichment services</li>
      </ul>
    </div>
  );
};