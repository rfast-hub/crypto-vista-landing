export const Subscriptions = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-8 mb-4">4. Subscription and Payments</h2>
      <p className="font-semibold mt-4">4.1. Subscription Tiers:</p>
      <ul className="list-disc pl-6 mt-4">
        <li><strong>Free Tier:</strong> Basic tracking and analysis features</li>
        <li><strong>Premium Tier:</strong> Advanced features, real-time alerts, and API access</li>
        <li><strong>Enterprise Tier:</strong> Custom solutions for institutional clients</li>
      </ul>
      
      <p className="font-semibold mt-4">4.2. Payment Terms:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>All payments are processed securely through our payment providers</li>
        <li>Subscriptions are billed in advance on a recurring basis</li>
        <li>Prices are subject to change with 30 days notice</li>
        <li>Refunds are processed according to our refund policy</li>
      </ul>
    </div>
  );
};