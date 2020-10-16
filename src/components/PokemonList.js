import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function PokemonList(props){
    return(
        <section className="pokemonList">
            <ion-icon className="back" name="chevron-back-outline"></ion-icon>
            <div className="pokemonSolo">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Bulbasaur" />
                <h1 className="title">Bulbasaur</h1>
                <p className="id">#1</p>
            </div> 
            <ion-icon className="next" name="chevron-forward-outline"></ion-icon>
        </section>
    );
}