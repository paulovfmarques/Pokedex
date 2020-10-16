import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Pokemon(props){

    const {name,url} = props.pkm
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    const urlSplit = url.split("/");
    const id = urlSplit[urlSplit.length - 2];

    const source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return(        
            <Link to="/selected">
                <div className="pokemon">
                    <img src={source} />
                    <h1 className="title">{nameCapitalized}</h1>
                    <p className="id">#{id}</p>
                </div>
            </Link>        
    );
}