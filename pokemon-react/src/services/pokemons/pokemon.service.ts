import { createContext, useContext, useState } from 'react';
import api from '../api';

const getAll = async () => {
    const { } = await api.get("/pokemon")
}

const getByName = () => {

}

export const PokemonService = {
    getAll,
    getByName,
}
