import React, { Component } from 'react';
import PokemonList from '../pokemon/PokemonList';
import '../../App.css';

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

  render() {
    return (
      <div className="main" style={{ marginLeft: '1vw', marginRight: '1vw', maxWidth: '97w' }}>
        <div className="pokemon-grid-container" >
          <PokemonList limit={this.state.limit} offset={this.state.offset} />
        </div>
        <div className="pagination-container"
          style={{ display: 'flex', justifyContent: 'center',}}>    
          <button 
            className="nes-btn"
            onClick={this.handlePreviousClick}
            disabled={this.state.offset === 0}
          >
            Previous
          </button>
          <button 
            className="nes-btn"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
