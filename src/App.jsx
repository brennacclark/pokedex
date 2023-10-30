import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "nes.css/css/nes.min.css";
import Navbar from "./components/layout/NavBar";
import { PokemonProvider } from "./components/pokemon/PokemonContext"
import Pokedex from "./components/layout/Pokedex";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <Navbar />
        <div id="main-content">
          <Pokedex />
        </div>
        <Footer />
      </PokemonProvider>
    </div>
  );
}

export default App;
