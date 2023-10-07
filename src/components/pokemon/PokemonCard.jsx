import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

const Name = styled.h6`
  z-index: 4;
  position: relative;
`;

const ID = styled.h6`
  z-index: 3;
  position: relative; 
`;

const Sprite = styled.img`
  width: 3em;
  height: 5em;
  transform: scale(2);
  z-index: 2;
  position: relative;
`;

const Card = styled.div`
  position: relative;
  color: white;
  text-decoration: none;
  background-color: #222;
  width: 120px;
  max-height: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  font-weight: lighter;
  z-index: 1;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 
                0 10px 10px rgba(0,0,0,.22);
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
      <div className="pokemon-card-frame" style={{ margin: '10px' }}>
        <Link to={`/pokemon/${id}`}>
          <Card className="card">
            {/* ID */}
            <ID className="card-header" style={{ textAlign: 'right' }}>{id}</ID>

            <div className="sprite-frame">
              {/* IMAGE */}
              <Sprite
                className=""
                onLoad={() => this.setState({ imageLoading: false })}
                onError={() => this.setState({ tooManyRequests: true })}
                src={imageUrl}
                style={{
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              />
            </div>

            {/*  NAME */}
            <Name className="card-title" style={{ textAlign: 'center', fontSize: '10px' }}>{formattedName}</Name>
          </Card>
        </Link>
      </div>
    );
  }
}