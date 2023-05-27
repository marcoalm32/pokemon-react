// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IResponseModel {
    count: number;
    next: string;
    previous: any | null;
    results: IPokemon[];
}

export interface IPokemon {
    name: string;
    url: string;
}