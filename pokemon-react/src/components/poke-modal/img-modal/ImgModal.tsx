import { FunctionComponent, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import './ImgModal.scss';
import { ISprites } from '../../../models/PokemonDetail.model';

type pokemonForImgModal = {
  img: ISprites;
  name: string;
}

export const ImgModal: FunctionComponent<any> = ({img, name}: pokemonForImgModal) => {

    const [ imgType, setImgType ] = useState<string>(img?.front_default);

    const imgModal = 'img-modal';
    return (
      <Card className={imgModal}>
        {img && <CardMedia
          className={`${imgModal}__img`}
          title="green iguana"
          image={imgType ? imgType : img?.front_default}
        />}
        <CardContent className={`${imgModal}__name`}>
          {name ? name[0].toUpperCase() + '' + name.substring(1) : ''}
        </CardContent>
        
      </Card>
    );
}