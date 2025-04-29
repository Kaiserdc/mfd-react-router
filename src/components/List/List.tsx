import {ListProps} from "../../interfaces";

export function List<T extends { id: string }>({
               data,
               CardComponent
           }): ListProps<T> {

    return <>
        <div className="d-flex gap-3 flex-wrap">
            {data.map(item => (

                <CardComponent key={item.id} item={item}/>
            ))}
        </div>
    </>
}