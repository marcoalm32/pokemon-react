import { FunctionComponent, useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './CardPokemon.scss';
import { IPokemonDetail } from "../../models/PokemonDetail.model";
import { IPokemon } from "../../models/Pokemon.model";
import { PokemonService } from "../../services/pokemons/pokemon.service";
import { PokeSnapp } from "../poke-snapp/PokeSnapp";

export const CardPokemon: FunctionComponent<IPokemon> = ({name, url}: IPokemon) => {

    const [ pokemon, setPokemon ] = useState<IPokemonDetail>();

    useEffect(() => {
      PokemonService.getById(url)
        .then((response: IPokemonDetail | any) => {
          setPokemon(response);
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])

    const cardStyle = 'card';
    return (
      <Card sx={{ maxWidth: 300 }} className={cardStyle}>
        <PokeSnapp 
          sprites={pokemon?.sprites}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon?.name}
          </Typography>
        </CardContent>
        <CardActions>
          <CatchingPokemonIcon />
          <Button size="small">More Detail</Button>
        </CardActions>
      </Card>
    );
}