import {useMemo} from "react";
import {List} from "../List/List.tsx";
import {useSort} from "../../hooks/useSort.ts";

import {Item, CategoryListProps} from "../../interfaces";


export default function CategoryList<T extends Item>({title, items, routePrefix, CardComponent}: CategoryListProps<T>) {
    const {sort, toggleSort} = useSort()

    const sortedData = useMemo(() => {
        return [...items].sort((a, b) => {
            // Сравниваем по имени (или по нужному полю)
            const cmp = a.created.localeCompare(b.created, undefined, {sensitivity: 'base'});
            return sort === 'asc' ? cmp : -cmp;
        });
    }, [items, sort]);

    return <>
        <h1>{title}</h1>
        <div className="my-3">
            <button className={'btn-outline-secondary'} onClick={toggleSort}>
                Сортировать по {sort === 'asc' ? 'возрастанию' : 'убыванию'}
            </button>
        </div>
        <List data={sortedData} routePrefix={routePrefix} CardComponent={CardComponent}/>
    </>
}