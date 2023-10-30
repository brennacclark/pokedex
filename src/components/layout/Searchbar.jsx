import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePokemon } from '../pokemon/PokemonContext'

function Searchbar() {
  const [search, setSearch] = useState("");
  const [invalidSearch, setInvalidSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state to track loading status
  const navigate = useNavigate();
  const location = useLocation();

  const { setPokemonData } = usePokemon(); // use the context

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
    setIsLoading(true); // Set loading status to true when search starts

    // Convert search to lowercase
    const searchLowercase = search.toLowerCase();

    try {
      // Make a GET request to the API
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchLowercase}/`
      );

      // Check if the response is ok
      if (!response.ok) {
        // If the response is not ok, throw an error
        if (response.status === 404) {
          setInvalidSearch(true);
          console.log("Pokemon not found"); // Print to console if status is 404
        }
        throw new Error("Pokemon not found. Please try again.");
      }

      // If the response is ok, navigate to the new route
        const data = await response.json();
        setPokemonData(data); // set the data
        navigate(`/pokemon/${searchLowercase}`);
    } catch (error) {
      // If an error is thrown, log it to the console and show an alert with the error message
      console.error(error);
      setInvalidSearch(true);
      setSearch(""); // Clear the input field
    } finally {
      setIsLoading(false); // Set loading status to false when search ends
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="nes-textarea"
        type="text"
        placeholder={invalidSearch ? "Invalid Pokémon" : "Search Pokémon"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setInvalidSearch(false)} // Reset invalidSearch when input box gets focus
        style={
          invalidSearch
            ? { borderColor: "red", color: "red" }
            : { width: "160px", height: "30px", fontSize: ".85vh" }
        }
      />
      <button
        className="nes-btn"
        type="submit"
        disabled={isLoading}
        style={{ height: "30px", width: "40px", fontSize: ".85vh" }}
      >
        {" "}
        {/* Disable button when isLoading is true */}
        {isLoading ? "Searching..." : "Go!"}{" "}
        {/* Change button text based on loading status */}
      </button>
    </form>
  );
}

export default Searchbar;
