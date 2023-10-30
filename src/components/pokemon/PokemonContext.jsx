// PokemonContext.js
import React, { createContext, useState, useContext } from "react";

const PokemonContext = createContext();

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};

export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState(null);

  return (
    <PokemonContext.Provider value={{ pokemonData, setPokemonData }}>
      {children}
    </PokemonContext.Provider>
  );
};
