// script.js
import "nes.css/css/nes.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/layout/NavBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
      </div>
    </>
  )
}

export default App
