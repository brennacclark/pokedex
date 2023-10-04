import React, { Component } from 'react';

const Sprite = styled.img`
  width: 3em;
  height: 5em;
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

    // Use regular expression to split the name by hyphens and capitalize each part
    const nameParts = name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1));
    const formattedName = nameParts.join(' ');

    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <h6 className="card-header">{id}</h6>
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ tooManyRequests: true })}
            src={imageUrl}
          />
          {/* {tooManyRequests ? (<h6>
            <span className="badge badge-danger mt-2">Too Many Requests</span>
          </h6>) : null} */}
          <div className="card-body mx-auto">
            <h6 className="card-title" style={{ fontSize: '10px' }}>{formattedName}</h6>
          </div>
        </div>
      </div>
    );
  }
}
