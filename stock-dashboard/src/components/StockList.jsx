import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";

const StockList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch("https://phisix-api3.appspot.com/stocks.json")
      .then((response) => response.json())
      .then((json) => setData(json.stock))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredData = data.filter((stock) =>
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-4">
        <input
          type="text"
          placeholder="Search by symbol"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Stock Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((stock, index) => (
          <StockCard
            key={index}
            name={stock.name}
            symbol={stock.symbol}
            price={stock.price}
            percentChange={stock.percent_change}
            volume={stock.volume}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 mx-1 border rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          Previous
        </button>
        <p className="text-gray-700 mx-4">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 mx-1 border rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StockList;
