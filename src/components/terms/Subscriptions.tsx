export const Subscriptions = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-8 mb-4">4. Subscription and Payments</h2>
      <p className="font-semibold mt-4">4.1. Subscription Tiers:</p>
      <ul className="list-disc pl-6 mt-4">
        <li><strong>Free Tier:</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>Basic cryptocurrency tracking features</li>
            <li>Limited portfolio management tools</li>
            <li>Standard market analysis</li>
            <li>Basic email support</li>
            <li>Ad-supported experience</li>
          </ul>
        </li>
        <li><strong>Premium Tier:</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>Advanced tracking and analysis features</li>
            <li>Real-time alerts and notifications</li>
            <li>API access with rate limits</li>
            <li>Priority customer support</li>
            <li>Ad-free experience</li>
            <li>Enhanced security features</li>
          </ul>
        </li>
        <li><strong>Enterprise Tier:</strong>
          <ul className="list-disc pl-6 mt-2">
            <li>Custom solutions for institutional clients</li>
            <li>Dedicated account manager</li>
            <li>Custom API integration</li>
            <li>Advanced security features</li>
            <li>Service level agreements</li>
            <li>24/7 premium support</li>
          </ul>
        </li>
      </ul>
      
      <p className="font-semibold mt-4">4.2. Payment Terms:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>All payments are processed securely through authorized payment providers</li>
        <li>Subscriptions are billed in advance on a recurring basis</li>
        <li>Supported payment methods include credit cards, wire transfers, and selected cryptocurrencies</li>
        <li>Prices are subject to change with 30 days notice</li>
        <li>Failed payments may result in service interruption</li>
        <li>Currency conversion fees may apply</li>
      </ul>

      <p className="font-semibold mt-4">4.3. Refund Policy:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>14-day money-back guarantee for new subscriptions</li>
        <li>Pro-rated refunds for service interruptions exceeding 24 hours</li>
        <li>No refunds for partial month usage</li>
        <li>Refund requests must be submitted in writing</li>
        <li>Processing time: 5-10 business days</li>
      </ul>

      <p className="font-semibold mt-4">4.4. Subscription Cancellation:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>Cancel anytime through account settings or by contacting support</li>
        <li>Access continues until end of billing period</li>
        <li>No partial refunds for early cancellation</li>
        <li>Data retention period: 30 days post-cancellation</li>
        <li>Reactivation may require new subscription</li>
      </ul>

      <p className="font-semibold mt-4">4.5. Cancellation Process:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>Log into your account and navigate to Subscription Settings</li>
        <li>Click on "Cancel Subscription" button</li>
        <li>Select reason for cancellation (optional)</li>
        <li>Confirm cancellation</li>
        <li>Receive email confirmation of cancellation</li>
      </ul>

      <p className="font-semibold mt-4">4.6. Post-Cancellation Terms:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>All premium features will be disabled at the end of billing period</li>
        <li>Downloaded data and reports remain accessible for 30 days</li>
        <li>Custom API keys will be deactivated</li>
        <li>Saved preferences and settings will be retained for 90 days</li>
        <li>Option to download account data before deletion</li>
        <li>Recurring payments will be automatically stopped</li>
      </ul>

      <p className="font-semibold mt-4">4.7. Account Reactivation:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>Reactivate within 90 days to restore previous settings</li>
        <li>May be subject to current pricing and terms</li>
        <li>Previous promotional rates may not apply</li>
        <li>Some historical data may not be recoverable</li>
        <li>New subscription agreement required</li>
      </ul>
    </div>
  );
};