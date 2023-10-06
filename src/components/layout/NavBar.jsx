import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../../App.css';
import Searchbar from './Searchbar';

export default class Navbar extends Component {

  render() {
    return (
      <div >
            <nav className="" >
              <Link to="/" className="">POKéDEX</Link>
              <div className="navbar-nav me-auto mb-2 mb-lg-0" >
                  <Link className="nav-link " to="/about"><div>about</div></Link>
                  <Link className="nav-link" to="/contact"><div>contact</div></Link>
          </div>
          
          <Searchbar />
        </nav>
      </div>
    )
  }
}
