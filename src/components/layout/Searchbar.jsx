import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Searchbar() {
  const [search, setSearch] = useState('');
  const [invalidSearch, setInvalidSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // This function will be called whenever the location changes
    return () => {
      // Reset invalidSearch when navigating away from the page
      setInvalidSearch(false);
    };
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInvalidSearch(false);

    // Convert search to lowercase
    const searchLowercase = search.toLowerCase();

    try {
      // Make a GET request to the API
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchLowercase}/`);

      // Check if the response is ok
      if (!response.ok) {
        // If the response is not ok, throw an error
        throw new Error('Pokemon not found. Please try again.');
      }

      // If the response is ok, navigate to the new route
      navigate(`/pokemon/${searchLowercase}`);
    } catch (error) {
      // If an error is thrown, log it to the console and show an alert with the error message
      console.error(error);
      setInvalidSearch(true);
      setSearch(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={invalidSearch ? "INVALID POKEMON" : "Search Pokemon"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setInvalidSearch(false)} // Reset invalidSearch when input box gets focus
        style={invalidSearch ? { borderColor: 'red', color: 'red' } : {}}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Searchbar;
