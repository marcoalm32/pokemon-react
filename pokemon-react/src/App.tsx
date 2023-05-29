import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'

import { Navbar } from './components/navbar/Navbar'

import './App.css'
import PokemonList from './pages/pokemon-list/PokemonList'
import { PokeModal } from './components/poke-modal/PokeModal'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='app'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemons' element={<PokemonList />} />
          </Routes>
        </div>
        <PokeModal />
      </BrowserRouter>
    </div>
  )
}

export default App
