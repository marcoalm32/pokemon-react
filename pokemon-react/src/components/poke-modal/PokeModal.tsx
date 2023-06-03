import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { FunctionComponent } from 'react';
import { ImgModal } from './img-modal/ImgModal';
import usePokemonStore from '../../store/pokemonStore';
import { IconButton } from '@mui/material';

import './PokeModal.scss';

export const PokeModal: FunctionComponent<any> = (props) => {

    const updatePokemon = usePokemonStore(state => state.updatedPokemon);

    const verifyHasSelectedPokemon = () => {
      updatePokemon(null);
    }

    const pokeModal = 'poke-modal';
 
    return (
      <>
        <Dialog
          open={props.open}
          onClose={verifyHasSelectedPokemon}
          className={pokeModal}
          >
          <DialogContent className={`${pokeModal}__content`}>
            <div className={`${pokeModal}__content__closed`}>
              <IconButton onClick={verifyHasSelectedPokemon}>
                <CloseIcon />
              </IconButton>
            </div>
            <ImgModal
              name={props.pokemon?.name}
              img={props.pokemon?.sprites?.front_default}
             />
          </DialogContent>
          <DialogActions className={`${pokeModal}__actions`}>
            <Button 
              onClick={verifyHasSelectedPokemon}
              variant='contained'
              color='warning'>Closed</Button>
          </DialogActions>
        </Dialog>
      </>
    );
}