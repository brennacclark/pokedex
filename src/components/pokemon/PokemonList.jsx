import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';

export default class PokemonList extends Component {
  state = {
    url: `https://pokeapi.co/api/v2/pokemon/?limit=${this.props.limit}&offset=${this.props.offset}`,
    pokemon: null
  };

  async componentDidMount() {
    this.fetchPokemonList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.limit !== this.props.limit || prevProps.offset !== this.props.offset) {
      this.setState({ url: `https://pokeapi.co/api/v2/pokemon/?limit=${this.props.limit}&offset=${this.props.offset}` }, () => {
        this.fetchPokemonList();
      });
    }
  }

  fetchPokemonList = async () => {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
  };

   render() {
  return (
    <React.Fragment>
      {this.state.pokemon ? (
        <div className="row" style={{ 
          display: 'grid', 
          justifyContent: 'center', 
          minWidth: '300px', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))', 
          gap: '1rem',
          overflowX: 'hidden'
        }}>
          {this.state.pokemon.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      ) : (
        <h6>Loading...</h6>
      )}
    </React.Fragment>
  );
}

}