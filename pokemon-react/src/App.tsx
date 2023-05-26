import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'

import { Navbar } from './components/navbar/Navbar'

import './App.css'
import PokemonList from './pages/pokemon-list/PokemonList'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemons' element={<PokemonList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
