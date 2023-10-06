import React, { Component } from 'react'

export default class About extends Component {
  render() {
    const themeClass = this.props.theme === 'dark' ? 'dark' : 'light';
    return (
      <div className={themeClass}>
        about
      </div>
    )
  }
}
