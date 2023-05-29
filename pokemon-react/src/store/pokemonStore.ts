import create from 'zustand';
import { IPokemonDetail } from '../models/PokemonDetail.model';

type IPokeStore = {
    pokemons: IPokemonDetail[],
    updatedPokemon: (newPokemon: IPokemonDetail) => void
}

const usePokemonStore = create<IPokeStore>((set) => ({
     pokemons: [],

     updatedPokemon: (pokemon: IPokemonDetail) => {
        set(state => ({pokemons: [...state.pokemons, pokemon]}))
     }
}))

export default usePokemonStore;