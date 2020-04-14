import React from 'react';
import Logo from '../images/pokeball.svg';
import '../styles/Header.scss';

const Header = ({ setCurrentPage, setBigPokemon, setTypeFilter, searchValue, setSearchValue}) => {
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };
    const reset =() => {
      setSearchValue('');
      setCurrentPage(1);
      setTypeFilter('all');
      setBigPokemon(null);
    };
    return (
      <header className="header">
        <div className="header__logoContainer logoContainer">
          <a href="#/" onClick={reset} className="logoContainer__link">
            <img
              className="logoContainer__img"
              src={Logo}
              alt="pokeball_logo"
            />
          </a>
          <p className="logoContainer__text">Your Pokedex</p>
        </div>
        <div className="inputContainer">
          <input
            className="inputContainer__input"
            placeholder="serach pokemon"
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </header>
    );
}

export default Header;