import React from 'react';
import Pokemon from './Pokemon';
import '../styles/PokeList.scss';
const PokeList = ({ pokeArray, currentPage}) => {
  const pokemons = (array) => {
    return array.map((element) => (
      <Pokemon key={element.id} pokemon={element} />
    ));
  };
  //current poks
  const lastPokemon = currentPage * 20; //20 poks per page
  const firstPokemon = lastPokemon - 20;
  const currentPokemon = pokeArray.slice(firstPokemon, lastPokemon);

  return <div className="PokemonListContainer">{pokemons(currentPokemon)}</div>;
};

export default PokeList;