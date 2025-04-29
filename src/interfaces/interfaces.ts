import React from "react";

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
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
}

export interface Location extends Item {
    type: string;
    dimension: string;
    residents: string[];
}

export interface Episode extends Item {
    air_date: string;
    episode: string;
    characters: string[];
}


export type SortOrder = 'asc' | 'desc';


export interface UseSortReturn {
    sort: SortOrder;
    toggleSort: () => void;
}


export interface CategoryListProps<T extends Item> {
    title: string;
    items: T[];
    routePrefix: string;
    CardComponent: React.ComponentType<{ item: T }>;
}

export interface ListProps<T extends Item> {
    data: T[];
    routePrefix: string;
    CardComponent: React.ComponentType<{ item: T }>;
}


