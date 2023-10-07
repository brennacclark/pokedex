import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div style={{
        padding: '50px'
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

      </div>


    )
  }
}
