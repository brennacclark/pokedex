import React, { Component } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../../App.css'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '', // Initialize the input text state
      isValidNumber: true, // Flag to track whether the input is a valid number
    };
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Check if the input is a valid number
    const isValidNumber = /^\d+$/.test(inputValue);
    this.setState({ inputText: inputValue, isValidNumber });
  };

  render() {
    return (
      <div >
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
              <Link to="/" className="navbar-brand col-sm3 col-md2 mr-0 align-items-center">POKéDEX</Link>
              <div className="navbar-nav me-auto mb-2 mb-lg-0" >
                  <Link className="nav-link " to="/about"><div>about</div></Link>
                  <Link className="nav-link" to="/contact"><div>contact</div></Link>
          </div>
              <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </nav>
            
    
      </div>
    )
  }
}
