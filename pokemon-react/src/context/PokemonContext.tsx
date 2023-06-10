import { createContext, useState } from 'react';
import { IPokemonDetail } from '../models/PokemonDetail.model';


export const PokemonContext = createContext<any>(null);

export const PokemonContextProvider = ({ children }: any) => {

    const [ pokemonInContext, setPokemonInContext ] = useState<IPokemonDetail | any>(null);

    return (
        <PokemonContext.Provider value={{pokemonInContext, setPokemonInContext}}>
          {children}
        </PokemonContext.Provider>
      );
}