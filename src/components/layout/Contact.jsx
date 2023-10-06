import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    const themeClass = this.props.theme === 'dark' ? 'dark' : 'light';
    return (
      <div className={themeClass}>
        contact
      </div>
    )
  }
}
