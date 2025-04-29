import {Link, useLocation} from "react-router-dom";

import {formatDate} from "../../lib/utilites.ts";

import {Item} from "../../interfaces";

export const CharacterListCard ({item}: { item: Item & { image: string } }) => {

    const {pathname} = useLocation()

    return <div className="card" key={item.id}>
        {item.image &&
            <div className="card-img-top">
                <img className={'img-fluid'} src={item.image} alt={item.name}/>
            </div>
        }
        <div className="card-body">
            <h6 className={'mb-2'}>{item.name}</h6>
            <div className="fs-6 text-muted mb-3 text-xs">Создан:<br/> {formatDate(item.created)}</div>
            <Link className={'btn btn-outline-secondary'}
                  to={`${pathname}/${item.id}`}>Подробнее</Link>
        </div>
    </div>
}
