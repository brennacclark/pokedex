import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import "nes.css/css/nes.min.css";
import Navbar from './components/layout/NavBar';
import Pokedex from './components/layout/Pokedex';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="main-content">
        <Pokedex />
      </div>
      <Footer/>
    </div>
  );
}

export default App