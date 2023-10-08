import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Brenna Clark. All rights reserved.</p>
      </footer>
    );
  }
}

const footerStyle = {
  background: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  position: 'absolute',
  bottom: '0',
  width: '100%',
  fontSize: '8px', // Apply tiny font size
};