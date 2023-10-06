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

function PokemonDetails({id: propId}) {
  const { id: paramId } = useParams();
  const id = propId || paramId;
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
    capture_rate: '',
    abilities: '',
    femaleRate: '',
    genderRatioMale: '',
    genderRatioFemale: '',
    evs: '',
    hatchSteps: '',
    themeColor: '#EF5350'
  });

  function formatName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' ');
  }

  function formatDescription(string) {
  // Use replace method with a regular expression to replace characters
  const cleanedData = string.replace(/[\f\n\r\t'"\\"\\]/g, ' ');

  return cleanedData;
  }
  
  function formatAbilities(abilities) {
    return abilities
      .map((ability) =>
        ability.ability.name
          .replace(/-/g, ' ') // Replace hyphens with spaces
          .toLowerCase() // Convert to lowercase
          .replace(/(^|\s)\S/g, (match) => match.toUpperCase()) // Capitalize each word
      )
      .join(', ');
  }

  // Function to format egg groups
  function formatEggGroups(eggGroups) {
    return eggGroups
      .map((group) =>
        group
          .name
          .replace(/-/g, ' ') // Replace hyphens with spaces
          .toLowerCase() // Convert to lowercase
          .replace(/(^|\s)\S/g, (match) => match.toUpperCase()) // Capitalize each word
      )
      .join(', ');
  }

  // Function to fetch Pokemon data
  async function componentDidMount() {
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
        name: formatName(pokemonData.name),
        pokemonIndex: pokemonData.id,
        imageUrl: pokemonData.sprites.front_default,
        types: pokemonData.types.map((type) => type.type.name),
        description: formatDescription(speciesData.flavor_text_entries.find(
            (entry) => entry.language.name === 'en'
          ).flavor_text),
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

        height: Math.round((pokemonData.height * 0.328084 + 0.00001) * 100) / 100,    //convert to feet
        weight: Math.round((pokemonData.weight * 0.220462 + 0.00001) * 100) / 100,    //convert to pounds

        capture_rate: Math.round((100 / 255) * speciesData.capture_rate),             //make percentage max 255

        eggGroups: formatEggGroups(speciesData.egg_groups),

        abilities: formatAbilities(pokemonData.abilities),
        
        femaleRate: speciesData.gender_rate, // chance of 1 in 8 pokemon being female 
        genderRatioFemale: 12.5 * (speciesData.gender_rate),
        genderRatioMale: 12.5 * (8 - speciesData.gender_rate),

        evs: pokemonData.stats.filter(stat => {
          if (stat.effort > 0) {
            return true;
          }
          return false;
        })
        .map(stat => {
          return `${stat.effort} ${stat.stat.name
            .toLowerCase()
            .split('-')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')}`;
        })
        .join(', '),
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
    componentDidMount();
  }, [id]);

  // Function to render the Pokemon data
  function renderPokemonTitle() {
    return (
      <div>
        <h2>{pokemonData.name}</h2>
        <img src={pokemonData.imageUrl} alt={pokemonData.name} />
        <p>ID: {pokemonData.pokemonIndex}</p>
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
    <div className="">
      <table className="">
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
      </div>
    );
  }

    // Function to render the Pokemon data
  function renderPokemonDesc() {

    const cleanedDescription = pokemonData.description.replace(/[^ -~]+/g, '');

    return (
       <div>
          <div className="">
            <p className="">Description</p>
            <p>{pokemonData.description}</p>
          </div>
      </div>
    );
  }

      // Function to render the Pokemon data
  function renderPokemonData() {
    return (
       <div >
        <p>Height: {pokemonData.height} ft</p>
        <p>Weight: {pokemonData.weight} lbs</p>
        <p>Egg Groups: {pokemonData.eggGroups}</p>
        <p>Capture Rate: {pokemonData.capture_rate}%</p>
        <p>Abilities: {pokemonData.abilities}</p>
        <p>Effort Values (EVs): {pokemonData.evs}</p>
        <p>Gender Rate (Female): {pokemonData.femaleRate} / 8 pokemon</p>
        <p>Gender Ratio (Male/Female): {pokemonData.genderRatioMale}% / {pokemonData.genderRatioFemale}%</p>
        <p>Hatch Steps: {pokemonData.hatchSteps}</p>

        {/* Add more elements to display other properties */}
      </div>
    );
  }

  return (
    <div>
      {renderPokemonTitle()}
      {renderPokemonDesc()}
      {renderPokemonTable()}
      {renderPokemonData()}
    </div>
  );
}

export default PokemonDetails;
