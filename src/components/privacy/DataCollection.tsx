export const DataCollection = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
      <p className="font-semibold">1.1. Personal Information:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>Name and email address</li>
        <li>Billing information</li>
        <li>Account preferences</li>
        <li>Communication preferences</li>
      </ul>

      <p className="font-semibold mt-4">1.2. Usage Information:</p>
      <ul className="list-disc pl-6 mt-4">
        <li>Device and browser information</li>
        <li>IP address and location data</li>
        <li>Usage patterns and preferences</li>
        <li>Trading and portfolio data</li>
      </ul>
    </div>
  );
};