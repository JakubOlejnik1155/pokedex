import React from 'react';
import '../styles/Loading.scss'
import Logo from '../images/pokeball.svg';
const Loading = () => {
    return (
      <div className="loadingContainer">
        <div>
          <img src={Logo} alt="loadingImg" />
          <p>Loading Poks...</p>
        </div>
      </div>
    );
}

export default Loading;