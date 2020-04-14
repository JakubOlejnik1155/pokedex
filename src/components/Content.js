import React from 'react';
import Filters from './Filters';
import Loading from './Loading'
import '../styles/Content.scss';
import PokeList from './PokeList';
const Content = (props) => {
    return (
      <div className="Content">
        <Filters
          pokeArray={props.pokeArray}
          currentPage={props.currentPage}
          setCurrentPage={props.setCurrentPage}
          typeFilter={props.typeFilter}
          setTypeFilter={props.setTypeFilter}
        />
        {props.isLoading ? (
          <Loading />
        ) : (
          <PokeList
            setBigPokemon={props.setBigPokemon}
            pokeArray={props.pokeArray}
            currentPage={props.currentPage}
          />
        )}
      </div>
    );
}

export default Content;