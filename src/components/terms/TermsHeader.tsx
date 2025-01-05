export const TermsHeader = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};