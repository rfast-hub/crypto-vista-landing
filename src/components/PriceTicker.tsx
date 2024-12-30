import { useEffect, useState } from "react";

const mockPrices = [
  { symbol: "BTC", price: "52,150.75", change: "+1.2%" },
  { symbol: "ETH", price: "2,890.45", change: "+2.1%" },
  { symbol: "BNB", price: "380.78", change: "-0.5%" },
  { symbol: "SOL", price: "98.34", change: "+3.2%" },
  { symbol: "XRP", price: "0.52", change: "+0.7%" },
];

export const PriceTicker = () => {
  const [prices, setPrices] = useState(mockPrices);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((current) =>
        current.map((price) => ({
          ...price,
          price: (parseFloat(price.price.replace(",", "")) * (1 + (Math.random() - 0.5) * 0.001))
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
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