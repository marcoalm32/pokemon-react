import { FunctionComponent, useEffect, useState, useContext } from "react";
import { PokemonService } from '../../services/pokemons/pokemon.service';
import Grid from '@mui/material/Grid';
import { IPokemon, IResponseModel } from "../../models/Pokemon.model";

import pokeLogo from '../../assets/logo/pokemon-logo-0.svg';
import { CardPokemon } from "../../components/card-pokemon/CardPokemon";
import Button from "@mui/material/Button";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { SearchPokemonContext } from "../../context/SearchContext";

import './PokemonList.scss';


const PokemonList: FunctionComponent<any> = () => {
    
    const [ limit, setLimit ] = useState<number>(25);
    const [ pokemons, setPokemons] = useState<IPokemon[]>();

    const { queryInContext } = useContext(SearchPokemonContext);

    useEffect(() => {
        if(queryInContext) {
            pokemonFilter();
        }else {
            getAllPokemons();
        }
    }, [limit, queryInContext]);

    const getAllPokemons = () => {
      PokemonService.getAll(limit)
        .then((response: IResponseModel | any) => {
          setPokemons(response.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const pokemonFilter = () => {
        const filteredPokemon: IPokemon[] | any = [];
        pokemons?.filter(pokemon => {
            if(pokemon.name.includes(queryInContext)) {
                filteredPokemon.push(pokemon);
                setPokemons(filteredPokemon);
            }
        })
    }
    
    const pokemonList = 'pokemon-list';
    return (
        <div className={pokemonList}>
            <img src={pokeLogo}
                className={`${pokemonList}__logo`}/>
            <Grid container spacing={2}>
                {pokemons && pokemons.map((pokemon) => (
                    <Grid item xs={3} md={3} sm={6} key={pokemon.name}>
                        <CardPokemon name={pokemon.name} url={pokemon.url} />
                    </Grid>
                ))}
            </Grid>
            <div className={`${pokemonList}__action`}>
                {!queryInContext && <Button variant="contained" onClick={() => setLimit(limit + 25)}>
                    Show More
                    <AddCircleIcon sx={{marginLeft: 1}}/>
                </Button>}
            </div>
        </div>
    )
}

export default PokemonList;