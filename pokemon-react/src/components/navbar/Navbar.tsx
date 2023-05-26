import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import './Navbar.scss';

export const Navbar = () => {

    const navbar = 'navbar';
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='primary'>
          <Toolbar className={navbar}>
            <div className={`${navbar}__logo-and-title`}>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <CatchingPokemonIcon />
                </IconButton>
                <p className='poke-font'>Pokemon React App</p>
            </div>
            <div>
                <Button color="inherit">Home</Button>
                <Button color='inherit'>List Pokemons</Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    );
}