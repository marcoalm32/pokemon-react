import {api} from '../api';
import { IPokemon } from '../../models/Pokemon.model';
import { ApiException } from '../ErrorException';
import { IPokemonDetail } from '../../models/PokemonDetail.model';

const getAll = async (): Promise< IPokemon[] | ApiException | undefined> => {
    try {
        const { data } = await api().get("/pokemon");
        return data;
    }
    catch(err: any) {
        return new ApiException(err.message || "Error in Api!");
    }
    
}

const getByName = async (pokeName: string): Promise<IPokemonDetail | ApiException | undefined> => {
    try {
        const { data } = await api().get(`/pokemon/${pokeName}`);
        return data;
    }
    catch(err: any) {
        return new ApiException(err.message || "Error in Api!");
    }
}

export const PokemonService = {
    getAll,
    getByName,
}
