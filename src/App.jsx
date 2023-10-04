// script.js
import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/layout/NavBar'
import Dashboard from "./components/layout/Dashboard";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App" >
        <NavBar />
        <div className="container">
          <Dashboard />
        </div>
        
      </div>
    </>
  )
}

export default App
