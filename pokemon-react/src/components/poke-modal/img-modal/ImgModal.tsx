import { FunctionComponent } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const ImgModal: FunctionComponent<any> = (item: any) => {

    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={item.sprites.front_default}
          title="green iguana"
        />
        <CardContent>
          <p>{item.name}</p>
        </CardContent>
      </Card>
    );
}