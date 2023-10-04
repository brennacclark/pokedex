import React, { Component } from 'react';
import PokemonList from '../pokemon/PokemonList';

export default class Dashboard extends Component {
  state = {
    limit: 20, // Number of Pokémon to display per page
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

  render() {
    return (
      <div>
        <PokemonList limit={this.state.limit} offset={this.state.offset} />
        <div className="pagination">
          <button
            onClick={this.handlePreviousClick}
            disabled={this.state.offset === 0}
          >
            Previous
          </button>
          <button
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
