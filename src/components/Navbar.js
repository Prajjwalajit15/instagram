import React, { useState } from 'react';

function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Check if the query is not empty
    if (query.trim() !== '') {
      // If the query is not empty, call onSearch
      onSearch(query);
    } else {
      // If the query is empty, handle it accordingly (show a message or clear the results)
      // For example, you can set an empty array as the search results
      onSearch([]);
    }
  };

  return (
    <div className='nav'>
      <input
        type="text"
        placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Navbar;
