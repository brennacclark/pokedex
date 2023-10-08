import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div style={{
        padding: '50px',
        fontSize: '14x'
      }}>
        Hi there! 

        <p>Welcome to my Pokédex site!</p>
       
        <p>These days we have access to such a vast amount of data.</p>
        
        <p>There are many great reference and walkthrough websites where
          you can find what you're looking for quickly, but they don't 
          feel as magical. Yes, you can just instasearch a wiki -
          I still plan on it - but it just won't be as much fun.
        </p>

        <p>
          The goal was to create a believable Pokedex interface.
          Something an adoring fan can browse through and check out
          their favorite pokemon,or a tool a casual player would prefer
          to keep nearby when looking to reference some stats.
        </p>

        <p>Thanks for coming to vist!</p>

        <div>
          <i class="nes-bulbasaur"></i>
          <i class="nes-charmander"></i>
          <i class="nes-squirtle"></i>
        </div>

        <div style={{
            textAlign: 'justify',
            fontSize: '8px',
            fontWeight: '100', // Set font weight to the thinnest available
            border: '1px solid white',
            marginTop: '10vh',
            padding: '10px'
        }}>

        This website is a personal project and is not affiliated with, endorsed by, or in any way officially connected with The Pokémon Company, Nintendo, or any of their subsidiaries or affiliates. The official Pokémon website can be found at www.pokemon.com. Pokémon, the Pokémon logo, and all related images and assets are trademarks and/or copyrights of The Pokémon Company and Nintendo.

        The content on this website is for informational and educational purposes only under the "fair use" guidelines established by federal copyright laws. Any trademarks, service marks, product names, or named features are assumed to be the property of their respective owners and are used only for reference. 
        </div>

      </div>


    )
  }
}
