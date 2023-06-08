import TextField from "@mui/material/TextField";
import { FunctionComponent, useState } from "react";

import './SearchPokemon.scss';
import { styled } from "@mui/material";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#777',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
      },
      '&:hover fieldset': {
        borderColor: '#B2BAC2',
        boxShadow: '2px 1px 1px #00CED1'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6F7E8C',
      },
    },
  });
  

export const SearchPokemon: FunctionComponent<any> = ({pokemonFilter}: any) => {


    const searchPokemon = "search-pokemon";
    return (
        <div className={searchPokemon}>
            <CssTextField
                label="Search"
                placeholder="search pokemon"
                autoComplete="off"
                className={`${searchPokemon}__input`}
                onKeyUp={pokemonFilter}
            />
        </div>
    )
}