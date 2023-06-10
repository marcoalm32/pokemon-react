import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { PokemonContextProvider } from './context/PokemonContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PokemonContextProvider>
      <App />
    </PokemonContextProvider>
  </React.StrictMode>,
)
