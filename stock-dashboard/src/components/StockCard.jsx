import React from "react";

const StockCard = ({ name, symbol, price, percentChange, volume }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-500">Symbol: {symbol}</p>
      <p className="text-gray-700">
        Price: {price.amount} {price.currency}
      </p>
      <p className={`text-gray-700 ${percentChange < 0 ? "text-red-500" : "text-green-500"}`}>
        Change: {percentChange.toFixed(2)}%
      </p>
      <p className="text-gray-700">Volume: {volume}</p>
    </div>
  );
};

export default StockCard;
