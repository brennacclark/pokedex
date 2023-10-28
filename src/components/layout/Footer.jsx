import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const footerStyle = {
      background: '#333',
      color: 'white',
      textAlign: 'center',
      width: '100%',
      fontSize: '10px',
      flexShrink: '0',
      height: '5vh',
    };

    return (
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Brenna Clark. All rights reserved.</p>
      </footer>
    );
  }
}
