import React, {useState, useEffect} from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

import "../../public/styles/reset.css"
import "../../public/styles/style.css"
import RenderPokemon from "./RenderPokemon"
import SelectedPokemon from "./SelectedPokemon"
import Loading from "./Loading"

export default function App(){

    const [arrayPokemon,setArrayPokemon] = useState();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893 ");
        request.then(response => {
            setArrayPokemon(response.data.results);
            setIsLoading(false)
        })
      }, []);

    return(
        <Router>
            <header><img src="./images/Pokédex_logo.png" alt=""/></header>
            <Switch>

                <Route path="/pokemon/:id">
                    <SelectedPokemon />
                </Route>

                {isLoading 
                    ? <Loading />
                    : <Route path="/"> {arrayPokemon && <RenderPokemon list={arrayPokemon} />} </Route>
                }
                

            </Switch>
        </Router>
    );
}