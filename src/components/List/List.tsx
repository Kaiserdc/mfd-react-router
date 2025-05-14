import {Item, ListProps} from "../../interfaces";
import {DefaultCard} from "../Cards/DefaultCard.tsx";

export function List<T extends Item>({data, routePrefix, CardComponent}: ListProps<T>) {

    return <>
        <div className="d-flex gap-3 flex-wrap">
            {data.map(item => CardComponent ? (
                <CardComponent key={item.id} item={item} routePrefix={routePrefix}/>
            ) : (
                <DefaultCard key={item.id} item={item} routePrefix={routePrefix}/>
            ))}
        </div>
    </>
}