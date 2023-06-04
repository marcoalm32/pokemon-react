export interface IPokemonDetail {
    abilities: IAbilities[];
    base_experience: number;
    forms: IGeneric[];
    game_indices: IGameIndices[];
    height: number;
    held_items: IHeldItems[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: IMove[];
    name: string;
    order: number;
    past_types: any;
    species: IGeneric;
    sprites: ISprites;
    stats: IStats[];
    types: IType[];
    weight: number;
}

export interface IAbilities {
    ability: IGeneric;
    is_hidden: boolean;
    slot: number;
}

export interface IGeneric {
    name: string;
    url: string
}

export interface IGameIndices {
    game_index: number;
    version: IGeneric;
}

export interface IHeldItems {
    item: IGeneric;
}

export interface IMove {
    move: IGeneric;
    version_group_details: IVersionGroupDetails[];
}

export interface IVersionGroupDetails {
    level_learned_at: number;
    move_learn_method: IGeneric;
    version_group: IGeneric;
}

export interface ISprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: IOther;
    versions: any;
}

export interface IOther {
    dream_world: IDreamWorld;
    home: IHome;
    official_artwork: IOfficialArtwork;
}

export interface IDreamWorld {
    front_default: string;
    front_female: string;
}

export interface IHome {
    front_default: string;
    front_female:string;
    front_shiny: string;
    front_shiny_female:string;
}

export interface IOfficialArtwork {
    front_default: string;
    front_shiny: string;
}

export interface IStats {
    base_stat: number;
    effort: number;
    stat: IGeneric;
}

export interface IType {
    slot: number;
    type: IGeneric;
}