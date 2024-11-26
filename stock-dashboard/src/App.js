import React from "react";
import StockList from "./components/StockList.jsx"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Stock Dashboard</h1>
      <StockList />
    </div>
  );
};

export default App;
