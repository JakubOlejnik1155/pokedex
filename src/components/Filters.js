import React from 'react';
import '../styles/Filters.scss';
const filters = ({currentPage, pokeArray, setCurrentPage, typeFilter, setTypeFilter}) => {

     const typeArray = [
       "all",
       "bug",
       "dark",
       "dragon",
       "electric",
       "fairy",
       "fighting",
       "fire",
       "flying",
       "grass",
       "ghost",
       "ground",
       "ice",
       "normal",
       "poison",
       "psychic",
       "rock",
       "shadow",
       "steel",
       "water",
     ];

    const selectTypeHandler = (event) => {
        setTypeFilter(event.target.value);
    };
    const pageBack = () => {
          if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };
    const pageForward = () => {
         if (currentPage !== Math.floor(pokeArray.length / 20) + 1)
           setCurrentPage(currentPage + 1);
    };

    return (
      <div className="filtersContainer">
        <div className="filtersContainer__filters">
          <div className="filtersContainer__types types">
            <p className="types__txt">Choose a type of pokemon: </p>
            <div className="select">

              <select
                className="typeSelect"
                id="type"
                value={typeFilter}
                onChange={selectTypeHandler}
              >
                {typeArray.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="filtersContainer__buttonGroup">
          {currentPage === 1 ? (
            <button className="filtersContainer__previousBtn--none">
              Go to {currentPage - 1}
            </button>
          ) : (
            <button className="filtersContainer__previousBtn" onClick={() => {pageBack()}}>
              Go to {currentPage - 1}
            </button>
          )}
          <button className="filtersContainer__currentPage">
            {currentPage}
          </button>
          {pokeArray && currentPage !== Math.floor(pokeArray.length / 20) + 1 ? (
              <button className="filtersContainer__nextBtn" onClick={() => {pageForward()}}>
                Go to {currentPage + 1}
              </button>
          ) : (
            <button className="filtersContainer__nextBtn--none" onClick={() => {pageForward()}}>
              Go to {currentPage + 1}
            </button>
          )}
        </div>
      </div>
    );
}

export default filters;