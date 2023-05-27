// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ResponseModel {
    count: number;
    next: string;
    previous: any | null;
    results: Pokemon[];
}

export interface Pokemon {
    name: string;
    url: string;
}