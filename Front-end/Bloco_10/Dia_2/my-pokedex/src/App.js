import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
// import Pokemon from './components/Pokemon'
import pokemons from './data';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </div>
    )
  }
}

