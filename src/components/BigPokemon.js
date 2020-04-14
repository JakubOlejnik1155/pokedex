import React from 'react';
import '../styles/BigPokemon.scss';
import StatBar from './StatBar';
const BigPokemon = ({pokemon, setBigPokemon}) => {


    const typesArray = (array) => {
        return array.map((element) => (
        <div key={element.type.name} className={element.type.name}>
            {element.type.name}
        </div>
        ));
    };

    const backHandler = () => {
        setBigPokemon(null);
    };




    const skils = () => {
      return pokemon.abilities.map((element) => (
        <p className="ability" key={element.ability.name}>
          {element.ability.name}
        </p>
      ));
    };
    const stats = () => {
      return pokemon.stats.map((stat) => (
        <StatBar key={stat.stat.name} stat={stat}/>
      ));
    };






    return (
      <div className="bigPokemonContainer">
        <div className="pokemon">
          <div className="pokemonContainer__id">
            <button className="backBtn" onClick={backHandler}>
              Back
            </button>
            <span>ID: </span>#{pokemon.id}
          </div>
          <div className="pokemonContainer__types">
            {typesArray(pokemon.types)}
          </div>

          <div className="photoAndName">
            <img
              src={pokemon.sprites.front_default}
              alt="pokemon_photo"
            />
            <h1 className="pokemonName">
              {pokemon.name}
            </h1>
          </div>


        <div className="abilities">
            <h3>
                {pokemon.name}'s
                abilities :
            </h3>
            {skils()}
        </div>

        <div className="stats">
            <h3> Stats:</h3>
            {stats()}
        </div>



        </div>
      </div>
    );
}

export default BigPokemon;