import {Link} from "react-router-dom";
import {formatDate} from "../../lib/utilities.ts";

import {Item} from "../../interfaces";

interface DefaultListCardProps {
    item: Item;
    routePrefix: string;
}
export function DefaultCard ({ item, routePrefix }: DefaultListCardProps)  {
    return (
        <div className="card" key={item.id}>
            <div className="card-body">
                <h6 className={'mb-2'}>{item.name}</h6>
                <div className="fs-6 text-muted mb-3 text-xs">Создан:<br/> {formatDate(item.created)}</div>
                <Link className={'btn btn-outline-secondary'}
                      to={`/${routePrefix}/${item.id}`}>Подробнее</Link>
            </div>
        </div>
    );
}