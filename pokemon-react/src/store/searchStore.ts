import create from 'zustand';

type ISearchPokemon = {
    query: string;
    sendQuery: (query: string | any) => void;
}

const useSearchPokemonStore = create<ISearchPokemon>((set) => ({
    query: '',
    sendQuery: (querys: string) => {
        set(state => ({query: querys}))
     }
}));

export default useSearchPokemonStore;