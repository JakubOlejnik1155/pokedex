import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Header';
import Content from './Content';
import BigPokemon from "./BigPokemon";
import '../styles/WrapperContent.scss';

const WrapperContent = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [pokeArray, setPokeArray] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [typeFilter, setTypeFilter] = useState('all');
    const [filteredArray, setFilteredArray] = useState(null);
    const [bigPokemon, setBigPokemon] = useState(null);

    useEffect(() => {
        getData()
    }, []);

    useEffect(() => {
        if(typeFilter !== 'all'){
            let tmp = [];
            pokeArray.forEach(pokemon => {
                pokemon.types.forEach(type =>{
                    if(type.type.name === typeFilter)
                        tmp.push(pokemon)
                });
            });
            setCurrentPage(1);
            setSearchValue('')
            setFilteredArray(tmp);
        }else{
            setFilteredArray(pokeArray);
        }
    }, [pokeArray, typeFilter]);

    useEffect(() => {
        if (searchValue !== "") {
            let tmp = [];
            pokeArray.forEach(pokemon =>{
                if(pokemon.name.startsWith(searchValue.toLowerCase()))
                tmp.push(pokemon);
            });
            setCurrentPage(1);
            setTypeFilter('all');
            setFilteredArray(tmp);
        } else {
          setFilteredArray(pokeArray);
        }
    }, [pokeArray, searchValue]);

    const getData = async ()=>{
        let tmp =[];
        try{
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=999`);
            let dataPromises = res.data.results.map(async result =>{
                let response = await axios(result.url);
                tmp.push(response.data);
            })
            await Promise.all(dataPromises);
            tmp.sort((a, b) => {
                if(a.id > b.id) return 1;
                if (a.id < b.id) return -1;
                return 0;
            })
            setPokeArray(tmp);
            setIsLoading(false);
         }catch(e){console.log('error', e)}


    };
    return (
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        {bigPokemon === null ? (
             <Content
                isLoading={isLoading}
                pokeArray={filteredArray}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                typeFilter={typeFilter}
                setTypeFilter={setTypeFilter}
                setBigPokemon={setBigPokemon}
            />
        ) : (
            <BigPokemon
                pokemon={bigPokemon}
                setBigPokemon={setBigPokemon}
            />
        )}

      </div>
    );
};

export default WrapperContent;
