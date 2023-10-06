import React, { Component } from 'react';
import PokemonList from '../pokemon/PokemonList';

export default class Dashboard extends Component {
  state = {
    limit: 24, // Number of Pokémon to display per page
    offset: 0, // Offset for paginating through results
  };

  handleNextClick = () => {
    this.setState(
      prevState => ({
        offset: prevState.offset + prevState.limit
      })
    );
  };

  handlePreviousClick = () => {
    this.setState(
      prevState => ({
        offset: Math.max(0, prevState.offset - prevState.limit)
      })
    );
  };

  handleFirstPageClick = () => {
    this.setState(
      prevState => ({
        offset: 0
      })
    );
  };

  render() {
    return (
      <div style={{ margin: '3vw', }}>
        <div >
        <PokemonList limit={this.state.limit} offset={this.state.offset} />
        </div>
        <div className="pagination" style={{ display: 'flex', justifyContent: 'center' }}>
          <button 
            className="btn"
            onClick={this.handlePreviousClick}
            disabled={this.state.offset === 0}
          >
            Previous
          </button>
          <button 
            className="btn"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
    </div>

    );
  }
}
