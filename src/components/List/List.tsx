import React from "react";
import {Item} from "../../interfaces";
import {DefaultCard} from "../Cards/DefaultCard.tsx";
export interface ListProps<T extends Item> {
    data: T[];
    routePrefix?: string;
    CardComponent?: React.ComponentType<{ item: T; routePrefix?: string }>;
}
export function List<T extends Item>({ data, routePrefix, CardComponent }: ListProps<T>) {

    return <>
        <div className="d-flex gap-3 flex-wrap">
            {data.map(item => CardComponent ? (
               <CardComponent key={item.id} item={item} routePrefix={routePrefix}/>
            ):(
                <DefaultCard key={item.id} item={item} routePrefix={routePrefix}/>
            ))}
        </div>
    </>
}