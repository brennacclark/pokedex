import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};
function Pokemon() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState({
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    types: [],
    description: '',
    statTitleWidth: 3,
    statBarWidth: 9,
    stats: {
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      specialAttack: '',
      specialDefense: ''
    },
    height: '',
    weight: '',
    eggGroups: '',
    catchRate: '',
    abilities: '',
    genderRatioMale: '',
    genderRatioFemale: '',
    evs: '',
    hatchSteps: '',
    themeColor: '#EF5350'
  });

  // Function to fetch Pokemon data
  async function fetchData() {
    try {
      // Urls for pokemon information
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

      // Fetch data from the URLs
      const [pokemonResponse, speciesResponse] = await Promise.all([
        fetch(pokemonUrl),
        fetch(pokemonSpeciesUrl),
      ]);

      const pokemonData = await pokemonResponse.json();
      const speciesData = await speciesResponse.json();

      // Update the state with the fetched data
      setPokemonData({
        name: pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1).replace('-', ' '),
        imageUrl: pokemonData.sprites.front_default,
        types: pokemonData.types.map((type) => type.type.name),
        description: speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === 'en'
        ).flavor_text,
        statTitleWidth: 3,
        statBarWidth: 9,
        stats: {
          hp: pokemonData.stats[0].base_stat,
          attack: pokemonData.stats[1].base_stat,
          defense: pokemonData.stats[2].base_stat,
          speed: pokemonData.stats[5].base_stat,
          specialAttack: pokemonData.stats[3].base_stat,
          specialDefense: pokemonData.stats[4].base_stat,
        },
        height: pokemonData.height,
        weight: pokemonData.weight,
        eggGroups: speciesData.egg_groups.map((group) => group.name).join(', '),
        catchRate: speciesData.capture_rate,
        abilities: pokemonData.abilities
          .map((ability) => ability.ability.name)
          .join(', '),
        genderRatioMale: speciesData.gender_rate,
        genderRatioFemale: 100 - speciesData.gender_rate,
        evs: pokemonData.stats[0].effort,
        hatchSteps: speciesData.hatch_counter,
        themeColor: TYPE_COLORS[pokemonData.types[0].type.name],
      });

      // You can also do more data processing here if required
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  }

  // Call the fetchData function when the component mounts
  useEffect(() => {
    fetchData();
  }, [id]);

  // Function to render the Pokemon data
  function renderPokemonTitle() {
    return (
      <div>
        <h2>{pokemonData.name}</h2>
        <img src={pokemonData.imageUrl} alt={pokemonData.name} />
        <p>ID: {id}</p>
        {pokemonData.types.map((type) => (
          <span
            key={type}
            style={{
              backgroundColor: `#${TYPE_COLORS[type]}`,
              color: 'white',
              padding: '3px 6px',
              borderRadius: '3px',
              marginRight: '5px',
            }}
          >
            {type}
          </span>
        ))}
      </div>
    );
  }

   // Function to render the Pokemon data as a table
  function renderPokemonTable() {
    return (
      <table>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(pokemonData.stats).map(([statName, statValue]) => (
            <tr key={statName}>
              <td>{statName.charAt(0).toUpperCase() + statName.slice(1)}</td>
              <td>{statValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

    // Function to render the Pokemon data
  function renderPokemonData() {
    return (
      <div>
        <p>Description: {pokemonData.description}</p>
        <p>Height: {pokemonData.height}</p>
        <p>Weight: {pokemonData.weight}</p>
        <p>Egg Groups: {pokemonData.eggGroups}</p>
        <p>Catch Rate: {pokemonData.catchRate}</p>
        <p>Abilities: {pokemonData.abilities}</p>
        <div>
          Gender Ratio (Male/Female):
          <GenderRatioBarGraph
            maleRatio={pokemonData.genderRatioMale}
            femaleRatio={pokemonData.genderRatioFemale}
          />
        </div>
        <p>Effort Values (EVs): {pokemonData.evs}</p>
        <p>Hatch Steps: {pokemonData.hatchSteps}</p>
        {/* Add more elements to display other properties */}
      </div>
    );
  }

  return (
    <div>
      {renderPokemonTitle()}
      <h4>Pokemon Stats</h4>
      {renderPokemonTable()}
      {renderPokemonData()}
    </div>
  );
}

export default Pokemon;
