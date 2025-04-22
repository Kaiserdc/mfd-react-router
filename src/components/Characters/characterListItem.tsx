import {Link, useLocation} from "react-router";

import React from "react";

import {formatDate} from "../../lib/utilites.ts";


export const ListItem: React.FC<T> = ({item}) => {

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
