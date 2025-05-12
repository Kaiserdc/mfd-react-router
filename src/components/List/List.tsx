import {Item, ListProps} from "../../interfaces";
import {DefaultCard} from "../Cards/DefaultCard.tsx";
import {Grid} from "@mantine/core";

export function List<T extends Item>({data, routePrefix, ComponentCard}: ListProps<T>) {

    return <>
        <Grid>

            {data.map(item => ComponentCard ? (
                <ComponentCard key={item.id} item={item} routePrefix={routePrefix}/>
            ) : (
                <DefaultCard key={item.id} item={item} routePrefix={routePrefix}/>
            ))}
        </Grid>
    </>
}