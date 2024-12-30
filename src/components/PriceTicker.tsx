import { useEffect, useState } from "react";

const mockPrices = [
  { symbol: "BTC", price: "43,567.89", change: "+2.3%" },
  { symbol: "ETH", price: "2,890.12", change: "+1.7%" },
  { symbol: "BNB", price: "312.45", change: "-0.8%" },
  { symbol: "SOL", price: "98.76", change: "+4.2%" },
  { symbol: "ADA", price: "1.23", change: "+0.5%" },
];

export const PriceTicker = () => {
  const [prices, setPrices] = useState(mockPrices);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((current) =>
        current.map((price) => ({
          ...price,
          price: (parseFloat(price.price.replace(",", "")) * (1 + (Math.random() - 0.5) * 0.001)).toFixed(2),
          change: `${Math.random() > 0.5 ? "+" : "-"}${(Math.random() * 5).toFixed(1)}%`,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-secondary/50 backdrop-blur-sm rounded-lg py-3">
      <div className="animate-ticker flex">
        {[...prices, ...prices].map((price, i) => (
          <div key={i} className="flex items-center space-x-2 px-8">
            <span className="font-semibold">{price.symbol}</span>
            <span>${price.price}</span>
            <span className={price.change.startsWith("+") ? "text-green-400" : "text-red-400"}>
              {price.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};