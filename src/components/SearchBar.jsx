import React, { useState } from "react";
const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (city.trim()) {
        onSearch(city);
        setCity("");
      }
    };
    return (
        <form onSubmit={handleSearch} className="flex justify-center space-x-2">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      );
    };
    
    export default SearchBar;


