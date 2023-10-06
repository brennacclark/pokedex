import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import "nes.css/css/nes.min.css";

import Navbar from './components/layout/Navbar';
import About from './components/layout/About'
import Contact from './components/layout/Contact'
import Dashboard from "./components/layout/Dashboard";
import Pokemon from './components/pokemon/PokemonDetails';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    }
  };

  useEffect(() => {
    document.body.classList.add(localStorage.getItem('theme'));
  }, []);

  return (
    <div className="App">
      <Navbar toggleTheme={toggleTheme}/>
      <Routes>
        <Route path="/" element= {<Dashboard theme={theme} />} />
        <Route path="/about" element= {<About theme={theme} />} />
        <Route path="/contact" element= {<Contact theme={theme} />} />
        <Route path="/pokemon" element={<Pokemon theme={theme} />} />
        <Route path="/pokemon/:id" element={<Pokemon theme={theme} />} />
        <Route path="/pokemon/:name" element={<Pokemon theme={theme} />} />
      </Routes>
    </div>
  )
}

export default App;