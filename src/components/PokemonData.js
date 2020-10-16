import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function PokemonData(props){    
   

    const { weight,height,base_experience,types,abilities} = props.info      

    return(
        <section className="pokemonData">
            <div className="measure">
                <div>
                    <p>Peso</p>
                    <span>{weight}</span>
                </div>
                <div>
                    <p>Altura</p>
                    <span>{height}</span>
                </div>
                <div>
                    <p>Exp. Base</p>
                    <span>{base_experience}</span>
                </div>                
            </div>
            
            <div className="info">
                <p>Tipos</p>
                {types && types.map(({type},i) => {
                    return (<span key={i} >{type.name}</span>)
                })}                
            </div>

            <div className="info">
                <p>Habilidades</p>
                {abilities && abilities.map(({ability},i) => {
                        return (<span key={i} >{ability.name}</span>)
                    })}               
            </div>
        </section>
    );
}