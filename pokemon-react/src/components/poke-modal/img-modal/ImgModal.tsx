import { FunctionComponent } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import './ImgModal.scss';

type pokemonForImgModal = {
  img: string;
  name: string;
}

export const ImgModal: FunctionComponent<any> = ({img, name}: pokemonForImgModal) => {

    const imgModal = 'img-modal';
    return (
      <Card className={imgModal}>
        {img && <CardMedia
          className={`${imgModal}__img`}
          title="green iguana"
          image={img}
        />}
        <CardContent className={`${imgModal}__name`}>
          {name ? name : ''}
        </CardContent>
      </Card>
    );
}