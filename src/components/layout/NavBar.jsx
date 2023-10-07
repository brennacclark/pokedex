import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../../App.css';
import Searchbar from './Searchbar';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="title" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', textDecoration:'none' }}>
          <Link to="/" className="" style={{fontSize: '32px', padding: '1px'}}>POKéDEX</Link>
          <div className="" style={{display: 'flex', justifyContent: 'center', fontSize: '12px'}} >
            <Link className="" to="/about" style={{padding: '10px'}}><div>about</div></Link>
            <Link className="" to="/contact" style={{padding: '10px'}}><div>contact</div></Link>
          </div>
          <div className="search-container">
            <Searchbar />
          </div>
        </nav>
      </div>
    )
  }
}
