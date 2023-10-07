import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import "nes.css/css/nes.min.css";
import Navbar from './components/layout/Navbar';
import About from './components/layout/About'
import Contact from './components/layout/Contact'
import Dashboard from "./components/layout/Dashboard";
import Pokemon from './components/pokemon/PokemonDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Dashboard/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/contact" element= {<Contact/>} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    
    </div>
  )
}

export default App