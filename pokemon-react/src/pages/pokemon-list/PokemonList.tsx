import { FunctionComponent, useEffect, useState } from "react";
import { PokemonService } from '../../services/pokemons/pokemon.service';
import Grid from '@mui/material/Grid';
import { IPokemon, IResponseModel } from "../../models/Pokemon.model";

import './PokemonList.scss';
import pokeLogo from '../../assets/logo/pokemon-logo-0.svg';
import { CardPokemon } from "../../components/card-pokemon/CardPokemon";

const PokemonList: FunctionComponent<any> = () => {
    
    const [ limit, setLimit ] = useState<number>(25);
    const [ pokemons, setPokemons] = useState<IPokemon[]>();

    useEffect(() => {
        PokemonService.getAll(limit)
            .then((response: IResponseModel | any) => {
                setPokemons(response.results);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    
    const pokemonList = 'pokemon-list';
    return (
        <div className={pokemonList}>
            <img src={pokeLogo}
                className={`${pokemonList}__logo`}/>
            <Grid container spacing={2}>
                {pokemons && pokemons.map((pokemon) => (
                    <Grid item xs={3} md={3} sm={6} >
                        <CardPokemon key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default PokemonList;