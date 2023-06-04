import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { FunctionComponent } from 'react';
import { ImgModal } from './img-modal/ImgModal';
import usePokemonStore from '../../store/pokemonStore';
import { IconButton } from '@mui/material';
import { TypeAndAbilities } from '../type-and-abilities/TypeAndAbilities';
import { IAbilities, IType } from '../../models/PokemonDetail.model';

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
            <div className={`${pokeModal}__content__type_and_ability`}>
              <div className={`${pokeModal}__content__type_and_ability__types`}>
                <h3>Types</h3>
                {props?.pokemon?.types.map((type: IType) => (
                  <TypeAndAbilities
                    key={type.slot}
                    slot={type.slot}
                    type={type.type}
                  />
                ))}
              </div>
              <div className={`${pokeModal}__content__type_and_ability__abilities`}>
                <h3>Abilities</h3>
                {props?.pokemon?.abilities.map((ability: IAbilities) => (
                  <TypeAndAbilities
                    key={ability.slot}
                    ability={ability.ability}
                    width={500}
                  />
                ))}
              </div>
            </div>
          </DialogContent>
          <DialogActions className={`${pokeModal}__actions`}>
            <Button
              onClick={verifyHasSelectedPokemon}
              variant="contained"
              color="warning"
            >
              Closed
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
}