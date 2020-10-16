import React from "react";
import { Link } from "react-router-dom";

export default function PokemonList(props){
    
    let idPokemon = props.idPokemon;
    let name = props.name;
    // console.log('name:', name)
    // let nameCapital = (props.name).charAt(0).toUpperCase() + (props.name).slice(1);
    
    return(
        <section className="pokemonList">
            {idPokemon > 1
                ? (<Link to={`/pokemon/${parseInt(idPokemon) - 1}`}>
                    <span className="back"><ion-icon name="chevron-back-outline"></ion-icon></span>
                </Link>)
                : <span className="back white"><ion-icon name="chevron-back-outline"></ion-icon></span>
            }
            <div className="pokemonSolo">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`} alt={name} />
                <h1 className="title">{name}</h1>
                <p className="id">#{idPokemon}</p>
            </div> 
            
            {idPokemon < 893
                ? (<Link to={`/pokemon/${parseInt(idPokemon) + 1}`}>
                    <span className="next"><ion-icon name="chevron-forward-outline"></ion-icon></span>
                </Link>)
                : <span className="next white"><ion-icon name="chevron-back-outline"></ion-icon></span>
            }
        </section>
    );
}