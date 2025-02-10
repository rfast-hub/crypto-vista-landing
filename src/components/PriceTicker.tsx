
import { useEffect, useState } from "react";

type CryptoPrice = {
  symbol: string;
  price: string;
  change: string;
  id: string;
};

const initialPrices: CryptoPrice[] = [
  { symbol: "BTC", price: "0", change: "0%", id: "bitcoin" },
  { symbol: "ETH", price: "0", change: "0%", id: "ethereum" },
  { symbol: "BNB", price: "0", change: "0%", id: "binancecoin" },
  { symbol: "SOL", price: "0", change: "0%", id: "solana" },
  { symbol: "XRP", price: "0", change: "0%", id: "ripple" },
];

export const PriceTicker = () => {
  const [prices, setPrices] = useState(initialPrices);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setError(null);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${initialPrices.map(p => p.id).join(',')}&vs_currencies=usd&include_24hr_change=true`,
          {
            headers: {
              'Accept': 'application/json',
              'Cache-Control': 'no-cache'
            },
          }
        );
        
        if (!response.ok) {
          if (response.status === 429) {
            throw new Error("Rate limit exceeded. Please try again in a minute.");
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        setPrices(initialPrices.map(coin => ({
          ...coin,
          price: data[coin.id]?.usd.toLocaleString('en-US', { 
            minimumFractionDigits: 2,
            maximumFractionDigits: 2 
          }) || "0",
          change: `${data[coin.id]?.usd_24h_change >= 0 ? "+" : ""}${data[coin.id]?.usd_24h_change.toFixed(1)}%` || "0%"
        })));
      } catch (error) {
        console.error("Error fetching crypto prices:", error);
        setError(error instanceof Error ? error.message : "Failed to fetch prices");
        // On error, retry after 5 seconds instead of the regular interval
        setTimeout(fetchPrices, 5000);
      }
    };

    // Fetch immediately
    fetchPrices();

    // Then fetch every 30 seconds (CoinGecko's rate limit is 10-30 calls/minute)
    const interval = setInterval(fetchPrices, 30000);

    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <div className="w-full overflow-hidden bg-secondary/50 backdrop-blur-sm rounded-lg py-3 px-4 text-center text-red-400">
        {error}
      </div>
    );
  }

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
