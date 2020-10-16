import React from "react";

import Pokemon from "./Pokemon"


export default function RenderPokemon(props){
    let list = props.list    
    return(
        <main>
            {list.map((pkm,id) => <Pokemon key={id} pkm={pkm} />)}
        </main>
    );
}