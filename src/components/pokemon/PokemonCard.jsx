import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const Sprite = styled.img`
  width: 3em;
  height: 5em;
  transform: scale(2); /* Enlarge the image by 10% (5% on each side) */
  z-index: 1; 

`;

const Card = styled.div`
  color: white;
  text-decoration: none;
  background-color: #222;
  width: 120px;
  max-height: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-weight: lighter; /* Set the font weight to a lighter value */
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -o-user-select: none;
`;


export default class PokemonCard extends Component {
  state = {
    name: '',
    id: '',
    imageUrl: '',
    imageLoading: true,
    tooManyRequests: false
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

  const nameParts = name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1));
  const formattedName = nameParts.join(' ');

  return (
    <div className="pokemon-card" style={{ margin: '10px' }}>
      <Link to={`/pokemon/${id}`}>
        <Card className="card">
          <h6 className="card-header" style={{ textAlign: 'right' }}>{id}</h6>
          <Sprite
            className=""
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ tooManyRequests: true })}
            src={imageUrl}
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          />
          {/* {tooManyRequests ? (<h6>
            <span className="badge badge-danger mt-2">Too Many Requests</span>
          </h6>) : null} */}
          <div className="" style={{ textAlign: 'center' }}>
            <h6 className="card-title" style={{ fontSize: '10px'}}>{formattedName}</h6>
          </div>
        </Card>
      </Link>
    </div>
  );
}

}