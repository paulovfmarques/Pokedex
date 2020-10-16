import React, {useState, useEffect} from "react";

import Pokemon from "./Pokemon"


export default function RenderPokemon(props){
    let list = props.list
    console.log(list)
    return(
        <main>
            {list.map((pkm,id) => <Pokemon key={id} pkm={pkm} />)}
        </main>
    );
}