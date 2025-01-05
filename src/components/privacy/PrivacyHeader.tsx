export const PrivacyHeader = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <p className="mt-4">
        At CryptoTrack, we take your privacy seriously. This Privacy Policy explains how we collect, 
        use, disclose, and safeguard your information when you use our service.
      </p>
    </div>
  );
};