import React from 'react';
import Pokemon from './Pokemon';
import '../styles/PokeList.scss';
const PokeList = ({ pokeArray, currentPage, setBigPokemon}) => {
  const pokemons = (array) => {
    return array.map((element) => (
      <Pokemon
        key={element.id}
        pokemon={element}
        setBigPokemon={setBigPokemon}
      />
    ));
  };
  //current poks
  const lastPokemon = currentPage * 20; //20 poks per page
  const firstPokemon = lastPokemon - 20;
  const currentPokemon = pokeArray.slice(firstPokemon, lastPokemon);

  return (
    <div className="PokemonListContainer">
      {currentPokemon.length > 0 ? (
        pokemons(currentPokemon)
      ) : (
        <>
          <h3 style={{ fontFamily: "'Press Start 2P', sans-serif", textAlign:"center"}}>
            Dear trainer,<br/>
             there is no such pokemon in your pokedex
          </h3>
        </>
      )}
    </div>
  );
};

export default PokeList;