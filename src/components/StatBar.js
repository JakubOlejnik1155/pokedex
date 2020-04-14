import React from 'react';
import { useEffect } from 'react';


const StatBar = ({stat}) => {

    useEffect(()=>{
        const bar = document.querySelector(`.${stat.stat.name}-value`);
            bar.style.transition = "all 2s ease-in-out";
            bar.style.width = `${stat.base_stat < 100 ? stat.base_stat : "100"}%`;
    },[stat.base_stat, stat.stat.name]);

    return (
      <div key={stat.stat.name} className="statContainer">
        <p>
          {stat.stat.name} : <span>{stat.base_stat}</span>
        </p>
        <div
          className="statBar"
          style={{
            width: "100%",
            backgroundColor: "gray",
            height: "1rem",
            borderRadius: "5px",
          }}
        >
          <div
            className={`statValue ${stat.stat.name}-value`}
            style={{
            width:"0px",
            backgroundColor: "#ed5564",
              height: "1rem",
              borderRadius: "5px",
            }}
          ></div>
        </div>
      </div>
    );
}

export default StatBar;