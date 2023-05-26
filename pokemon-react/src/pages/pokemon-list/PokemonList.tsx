import { FunctionComponent } from "react";

import './PokemonList.scss';

const PokemonList: FunctionComponent<any> = () => {
    
    const pokemonList = 'pokemon-list';
    return (
        <div className={pokemonList}>
            <h1 className={`${pokemonList}__title poke-font`}>Pokemon List</h1>
            
        </div>
    )
}

export default PokemonList;