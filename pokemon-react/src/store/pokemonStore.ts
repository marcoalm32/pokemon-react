import create from 'zustand';
import { IPokemonDetail } from '../models/PokemonDetail.model';

type IPokeStore = {
    pokemons: IPokemonDetail | any,
    updatedPokemon: (newPokemon: IPokemonDetail | any) => void
}

const usePokemonStore = create<IPokeStore>((set) => ({
     pokemons: null,
     updatedPokemon: (pokemon: IPokemonDetail) => {
        set(state => ({pokemons: {...state.pokemons, pokemon}}))
     }
}))

export default usePokemonStore;