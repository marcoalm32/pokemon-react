export interface PokemonDetail {
    abilities: Abilities[];
    base_experience: number;
    forms: Generic[];
    game_indices: GameIndices[];
    height: number;
    held_items: HeldItems[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: any;
    species: Generic;
    sprites: Sprites;
    stats: Stats[];
    types: Type;
    weight: number;
}

export interface Abilities {
    ability: Generic;
    is_hidden: boolean;
    slot: number;
}

export interface Generic {
    name: string;
    url: string
}

export interface GameIndices {
    game_index: number;
    version: Generic;
}

export interface HeldItems {
    item: Generic;
}

export interface Move {
    move: Generic;
    version_group_details: VersionGroupDetails[];
}

export interface VersionGroupDetails {
    level_learned_at: number;
    move_learn_method: Generic;
    version_group: Generic;
}

export interface Sprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    other: Other;
    versions: any;
}

export interface Other {
    dream_world: DreamWorld;
    home: Home;
    official_artwork: OfficialArtwork;
}

export interface DreamWorld {
    front_default: string;
    front_female: string;
}

export interface Home {
    front_default: string | null;
    front_female:string | null;
    front_shiny: string | null;
    front_shiny_female:string | null;
}

export interface OfficialArtwork {
    front_default: string | null;
    front_shiny: string | null;
}

export interface Stats {
    base_stat: number;
    effort: number;
    stat: Generic;
}

export interface Type {
    slot: number;
    type: Generic;
}