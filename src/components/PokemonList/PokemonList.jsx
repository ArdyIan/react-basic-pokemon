import { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";

import "./PokemonList.css";

function PokemonList() {
    const [pokemons] = useState(pokemonJSON);

    return (
        <div>
            <div className="list-pokemon">
            {pokemon.map((item) => (
                    <h1>{ClipboardItem.name}</h1>
                ))}
            </div>
        </div>
    );

}

export default PokemonList;