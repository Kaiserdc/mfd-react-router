import {ReactNode, RefObject} from "react";

export interface Item {
    id: number;
    name: string;
    created: string;
}

export interface Character extends Item {
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
}

export interface Location extends Item {
    type: string;
    dimension: string;
}

export interface Episode extends Item {
    air_date: string;
    episode: string;
}


export interface ListProps<T extends Item> {
    items: T[];
    loading: boolean;
    error: unknown;
    lastItemRef: RefObject<HTMLElement | null>;
    renderItem: (item: T) => ReactNode;
}

