import React, {useState, useEffect} from "react";
import axios from "axios"
import { useParams } from "react-router-dom";

import PokemonList from "./PokemonList";
import PokemonData from "./PokemonData";

export default function SelectedPokemon(){

    let idParam = useParams();
    const [pokemonInfo,setPokemonInfo] = useState();    
    
    useEffect(() => {
        const request = axios.get(`https://pokeapi.co/api/v2/pokemon/${idParam.id}`);
        request.then(response => {                        
            setPokemonInfo(response.data);
            
        })
      }, [idParam.id]);

    return(
        <>
            {pokemonInfo && <PokemonList idPokemon={idParam.id} name={pokemonInfo.name} />}
            {pokemonInfo && <PokemonData info={pokemonInfo}/>}
        </>
    );
}