import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ padding: "50px", textAlign: "center" }}>Brenna Clark</h1>
        <div style={{ padding: "0px" }}>
          <h3>Where to catch me...</h3>
          <i class="nes-ash"></i>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="mailto:brennacclark@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="nes-icon gmail is-medium"
                alt="Gmail"
                style={{ padding: "20px" }}
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/brennacclark/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="nes-icon linkedin is-medium"
                alt="LinkedIn"
                style={{ padding: "20px" }}
              ></i>
            </a>
            <a
              href="https://github.com/brennacclark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                class="nes-icon github is-medium"
                alt="Github"
                style={{ padding: "20px" }}
              ></i>
            </a>
          </div>
        </div>

      </div>
    );
  }
}
