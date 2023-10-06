import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const Sprite = styled.img`
  width: 3em;
  height: 5em;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  max-width: 30vh;
`;

export default class PokemonCard extends Component {
  state = {
    name: '',
    id: '',
    imageUrl: '',
    imageLoading: true
  };

  componentDidMount() {
    const { name, url } = this.props;

    // Check if data for this specific URL is already cached
    if (PokemonCard.cache[url]) {
      const { id, imageUrl } = PokemonCard.cache[url];
      this.setState({ id, imageUrl });
    } else {
      // Use regular expression to extract the number at the end of the URL
      const match = url.match(/\/(\d+)\/$/);
      const id = parseInt(match[1]);
      const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`;

      // Cache the data for this URL
      PokemonCard.cache[url] = { id, imageUrl };

      this.setState({ id, imageUrl });
    }
  }

  static cache = {}; // Static cache object for storing fetched data

  render() {
    const { name } = this.props;
    const { id, imageUrl } = this.state;

    // Use regular expression to split the name by hyphens and capitalize each part
    const nameParts = name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1));
    const formattedName = nameParts.join(' ');

  return (
    <Card>
      <Link to={`/pokemon/${id}`}>
        <h6>{id}</h6>
        <Sprite
          onLoad={() => this.setState({ imageLoading: false })}
          onError={() => this.setState({ tooManyRequests: true })}
          src={imageUrl}
        />
        <h6>{formattedName}</h6>
      </Link>
    </Card>
  );
  }
}
