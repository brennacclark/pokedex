import React, { Component } from 'react';
import '../../App.css';
import Nav from 'react-bootstrap/Nav';
import Searchbar from './Searchbar';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav as="ul">
          <Nav.Item>
            <Nav.Link href="/" className="title">POKéDEX</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" className="">about</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" className="">contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <button onClick={this.props.toggleTheme}>Toggle theme</button>
          </Nav.Item>
          <Nav.Item> 
            <Searchbar />
          </Nav.Item>
        </Nav>
      </div>
    )
  }
}
