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


export type SortOrder = 'asc' | 'desc';


export interface CategoryListProps<T extends Item> {
    title: string;
    items: T[];
    routePrefix: string;
    CardComponent?: React.ComponentType<{ item: T }>;
}

export interface ListProps<T extends Item> {
    data: T[];
    routePrefix: string;
    CardComponent?: React.ComponentType<{ item: T }>;
}


