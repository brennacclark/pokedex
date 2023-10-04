import React from 'react';
import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import './App.css'
import NavBar from './components/layout/NavBar';
import Dashboard from "./components/layout/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes

// Import your Pokemon component here (replace with the actual import path)
import Pokemon from './components/pokemon/Pokemon';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <NavBar />
        <div className="container">
          {/* Wrap your routes with BrowserRouter */}
          <Router>
            {/* Define your routes using the Routes component */}
            <Routes>
              {/* Define a route for the Pokemon component */}
              <Route path="/pokemon/:id" element={<Pokemon />} />
              {/* Define a default route for the Dashboard */}
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
