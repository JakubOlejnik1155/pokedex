import React from 'react';
import '../styles/Pokemon.scss';
import noPhoto from '../images/npPhoto.png';

const Pokemon = ({pokemon, setBigPokemon}) => {

    const typesArray = (array) =>{
         return array.map((element) => (
           <div key={element.type.name} className={element.type.name}>
             {element.type.name}
           </div>
         ));
    };
    const BigPoke = () => {
      setBigPokemon(pokemon);
    };

    return (
      <div className="pokemonContainer" onClick={BigPoke}>
        <div className="pokemonContainer__id">
          <span>ID: </span>#{pokemon.id}
        </div>
        <div className="pokemonContainer__types">
          {typesArray(pokemon.types)}
        </div>
        <img
          className="pokemonContainer__img"
          src={pokemon.sprites.front_default !== null ? pokemon.sprites.front_default : noPhoto }
          alt="poke-img"
        />
        <p className="pokemonContainer__name">
          {pokemon.name}
        </p>
      </div>
    );
}

export default Pokemon;