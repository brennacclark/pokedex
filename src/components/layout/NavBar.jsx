import React, { Component } from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar"; // Make sure to import your Searchbar component

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ '--pokeball-red': '#FB1B1B' }}>
        <nav
          className="title"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Link
            to="/"
            className=""
            style={{ fontSize: "2vh", padding: "1px", color: "var(--pokeball-red)" }}
          >
            POKéDEX
          </Link>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1vh",
            }}
          >
            <Link
              className=""
              to="/about"
              style={{ padding: "10px", color: "var(--pokeball-red)" }}
            >
              <div>about</div>
            </Link>
            <Link
              className=""
              to="/contact"
              style={{ padding: "10px", color: "var(--pokeball-red)" }}
            >
              <div>contact</div>
            </Link>
          </div>
          <div className="search-container">
            <Searchbar />
          </div>
        </nav>
      </div>
    );
  }
}
