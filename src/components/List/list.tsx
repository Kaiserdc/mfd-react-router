import {ListItem} from "../Characters/characterListItem.tsx";


export function List({data}) {

    return <>
        <div className="d-flex gap-3 flex-wrap">
            {data.map((item, index) => (
                <ListItem key={index} item={item}/>
            ))}
        </div>
    </>
}