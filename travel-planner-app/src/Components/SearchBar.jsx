import React from "react";

function SearchBar({ searchTerm, setSearchTerm, placeholder = "Search..." }) {
  return (
    <div className="flex items-center justify-center w-full my-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="w-1/2 px-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}

export default SearchBar;
