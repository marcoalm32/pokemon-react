import { createContext, useState } from "react";

export const SearchPokemonContext = createContext<any>(null);

export const SearchPokemonProvider = ({children}: any) => {

    const [ queryInContext, setQueryInContext ] = useState<string>("");

    return(
        <SearchPokemonContext.Provider value={{queryInContext, setQueryInContext}}>
            {children}
        </SearchPokemonContext.Provider>
    )
}