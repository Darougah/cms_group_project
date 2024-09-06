
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products..."
        className="border p-2 w-full rounded"
      />
      <button 
        type="submit"
        className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-700">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
