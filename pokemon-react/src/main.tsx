import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { PokemonContextProvider } from './context/PokemonContext.tsx'
import { SearchPokemonProvider } from './context/SearchContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <SearchPokemonProvider>
        <App />
      </SearchPokemonProvider>
    </PokemonContextProvider>
  </React.StrictMode>,
)
