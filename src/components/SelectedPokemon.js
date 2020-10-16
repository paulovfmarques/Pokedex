import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PokemonList from "./PokemonList";
import PokemonData from "./PokemonData";

export default function SelectedPokemon(props){
    return(
        <>
            <PokemonList />
            <PokemonData />
        </>
    );
}