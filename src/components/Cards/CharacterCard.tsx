import {Link} from "react-router-dom";
import {formatDate} from "../../lib/utilities.ts";

import {Character} from "../../interfaces";

interface CharacterListCardProps {
    item: Character;
    routePrefix: string;
}

export function CharacterCard({ item, routePrefix }: CharacterListCardProps) {
    return (
        <div className="card" key={item.id}>
            {item.image &&
                <div className="card-img-top">
                    <img className={'img-fluid'} src={item.image} alt={item.name}/>
                </div>
            }
            <div className="card-body">
                <h6 className={'mb-2'}>{item.name}</h6>
                <div className="fs-6 text-muted mb-3 text-xs">Создан:<br/> {formatDate(item.created)}</div>
                <Link className={'btn btn-outline-secondary'}
                      to={`/${routePrefix}/${item.id}`}>Подробнее</Link>
            </div>
        </div>
    )
}
