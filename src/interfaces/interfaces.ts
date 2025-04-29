import React from "react";

export interface Item {
    id: string;
    name: string;
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
    CardComponent?: React.ComponentType<{ item: T }>;
}

export interface ListProps<T extends Item> {
    data: T[];
    routePrefix: string;
    CardComponent?: React.ComponentType<{ item: T }>;
}


