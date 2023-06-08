import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import  { useNavigate } from 'react-router-dom';

import './Navbar.scss';
import { SearchPokemon } from '../search-pokemon/SearchPokemon';
import useSearchPokemonStore from '../../store/searchStore';

export const Navbar = () => {

    const navigate = useNavigate();
    const sendQuery = useSearchPokemonStore(state => state.sendQuery);

    const pokemonFilter = (e: any) => {
      const query = e.target.value;
      sendQuery(query);
    }

    const navbar = 'navbar';
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: '#e3f2fd'}}>
          <Toolbar className={navbar}>
            <div className={`${navbar}__logo-and-title`}>
                <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
                >
                <CatchingPokemonIcon />
                </IconButton>
                <span>Pokemon React App</span>
            </div>
            <SearchPokemon
              pokemonFilter={(e: any) => pokemonFilter(e)}
            />
            <div className={`${navbar}__action`}>
                <Button color="inherit" onClick={() => navigate("/")} >Home</Button>
                <Button color='inherit' onClick={() => navigate("/pokemons")}>List Pokemons</Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    );
}