import React, {useState, useEffect} from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "../../public/styles/reset.css"
import "../../public/styles/style.css"
import RenderPokemon from "./RenderPokemon"
import SelectedPokemon from "./SelectedPokemon"

export default function App(){

    const [arrayPokemon,setArrayPokemon] = useState([]);

    useEffect(() => {
        const request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893 ");
        request.then(response => {
            setArrayPokemon(response.data.results);          
        })
      }, []);

    return(
        <Router>
            <header><img src="./images/Pokédex_logo.png" alt=""/></header>
            <Switch>

                <Route path="/selected">
                    <SelectedPokemon />
                </Route>

                <Route path="/">
                    <RenderPokemon list={arrayPokemon} />
                </Route>

            </Switch>
        </Router>
    );
}