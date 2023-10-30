import React from "react";
import "../../App.css";
import { usePokemon } from '../pokemon/PokemonContext';  // import the context

function Pokedex() {
  const { pokemonData } = usePokemon(); // use the context
  return (
    <div className="pokedex-wrapper">
      <div className="pokedex-container">
        <div className="pokedex-left">
          <div className="pokedex-top">
            <div className="pokedex-blue-led"></div>
            <div className="pokedex-top-lights">
              <div className="light red-light"></div>
              <div className="light yellow-light"></div>
              <div className="light green-light"></div>
            </div>
          </div>
          <div className="pokedex-middle">
            <div className="pokedex-screen-frame">
              <div className="pokedex-screen">
                {pokemonData && (
                  <>
                    <img
                      src={pokemonData.sprites.front_default}
                      alt={pokemonData.name}
                    />
                    <p>Name: {pokemonData.name}</p>
                    <p>ID: {pokemonData.id}</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="pokedex-bottom">
            <div className="pokedex-controls">
              <div className="pokedex-small-gray-button"></div>
              <div className="pokedex-buttons">
                <div className="pokedex-green-button"></div>
              </div>
              <div className="pokedex-cross">
                <div className="cross-horizontal"></div>
                <div className="cross-vertical"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="pokedex-right">
          <div className="pokedex-upper-part">
            <div className="upper-screen"></div>
            <div className="pokedex-blue-buttons">
              <div className="blue-button"></div>
              <div className="blue-button"></div>
              <div className="blue-button"></div>
              <div className="blue-button"></div>
              <div className="blue-button"></div>
            </div>
            <div className="pokedex-blue-buttons">
              <div className="blue-button"></div>
              <div className="blue-button"></div>
              <div className="blue-button"></div>
              <div className="blue-button"></div>
              <div className="blue-button"></div>
            </div>
          </div>
          <div className="pokedex-right-buttons">
            <div className="white-button-container">
              <div className="white-button"></div>
              <div className="white-button"></div>
            </div>

            <div className="pokedex-yellow-button"></div>
          </div>
          <div className="pokedex-lower-part">
            <div className="pokedex-lower-screen-left"></div>
            <div className="pokedex-lower-screen-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
