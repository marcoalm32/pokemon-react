import {api} from '../api';
import { IResponseModel } from '../../models/Pokemon.model';
import { ApiException } from '../ErrorException';
import { IPokemonDetail } from '../../models/PokemonDetail.model';

const getAll = async (query: number): Promise< IResponseModel | ApiException | undefined> => {
    try {
        const { data } = await api().get(query ? `/pokemon?limit=${query}` : '/pokemon');
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

const getById = async (url: string): Promise<IPokemonDetail | ApiException | undefined> => {
    try {
        const { data } = await api().get(url);
        return data;
    }
    catch (err: any) {
        return new ApiException(err.message || "Error in Api!");
    }
}

export const PokemonService = {
    getAll,
    getByName,
    getById,
}
