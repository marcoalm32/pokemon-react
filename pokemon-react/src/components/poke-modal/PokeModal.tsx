import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FunctionComponent, useEffect } from 'react';
import { ImgModal } from './img-modal/ImgModal';

export const PokeModal: FunctionComponent<any> = () => {

    const pokemon = "";
    return (
      <>
        <Dialog
          open={pokemon.length > 0}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <ImgModal item={pokemon}/>
          </DialogContent>
          <DialogActions>
            <Button >Disagree</Button>
            <Button >Agree</Button>
          </DialogActions>
        </Dialog>
      </>
    );
}