import React, { Component } from 'react'
import { Route, Routes, Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
              <Link to="/" className="navbar-brand col-sm3 col-md2 mr-0 align-items-center">POKéDEX</Link>
            </nav>
            
    
      </div>
    )
  }
}
