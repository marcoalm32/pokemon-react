import axios  from 'axios';

export const api = () => {
    return axios.create({
        baseURL: "https://pokeapi.co/api/v2/"
    })
}