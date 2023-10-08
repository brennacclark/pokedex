import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const footerStyle = {
      background: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '1px',
      position: 'fixed', // Use 'fixed' position
      bottom: '0',
      width: '100%',
      fontSize: '10px'
    };

    return (
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} Brenna Clark. All rights reserved.</p>
      </footer>
    );
  }
}
