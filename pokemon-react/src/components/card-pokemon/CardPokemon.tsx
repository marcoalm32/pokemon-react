import { FunctionComponent, useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './CardPokemon.scss';
import { IPokemonDetail } from "../../models/PokemonDetail.model";
import { IPokemon } from "../../models/Pokemon.model";
import { PokemonService } from "../../services/pokemons/pokemon.service";

export const CardPokemon: FunctionComponent<IPokemon> = ({name, url}: IPokemon) => {

    const [ pokemon, setPokemon ] = useState<IPokemonDetail>();

    useEffect(() => {
      PokemonService.getById(url)
        .then((response: IPokemonDetail | any) => {
          setPokemon(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])

    const cardStyle = 'card';
    return (
      <Card sx={{ maxWidth: 300 }} className={cardStyle}>
        <div className={`${cardStyle}__img`}>
          <img src={pokemon?.sprites.front_default} alt="" />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon?.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Detail</Button>
        </CardActions>
      </Card>
    );
}