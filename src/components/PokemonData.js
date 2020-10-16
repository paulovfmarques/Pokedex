import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function PokemonData(){
    return(
        <section className="pokemonData">
            <div className="measure">
                <div>
                    <p>Peso</p>
                    <span>130</span>
                </div>
                <div>
                    <p>Altura</p>
                    <span>10</span>
                </div>
                <div>
                    <p>Exp. Base</p>
                    <span>142</span>
                </div>                
            </div>
            
            <div className="info">
                <p>Tipos</p>
                <span>Grass</span>
                <span>Poison</span>
            </div>
            <div className="info">
                <p>Habilidades</p>
                <span>Overgrow</span>
                <span>Chlorophyll</span>
            </div>
        </section>
    );
}