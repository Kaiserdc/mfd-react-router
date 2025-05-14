import {useMemo} from "react";
import {useSort} from "../../hooks/useSort.ts";
import {Item, ListProps} from "../../interfaces";
import { RefObject } from "react";


export function List<T extends Item>({
                            items,
                            loading,
                            error,
                            lastItemRef,
                            renderItem
                        }:ListProps<T>){

    const {sort, toggleSort} = useSort()
    const sortedData = useMemo(() => {
        return [...items?? []].sort((a, b) => {
            const cmp = a.created.localeCompare(b.created, undefined, {sensitivity: 'base'});
            return sort === 'asc' ? cmp : -cmp;
        });
    }, [items, sort]);

    return <>
        {error &&
            <div className="col-span-full text-red-500 text-center">Ошибка загрузки. {String(error)}</div>
        }

        <div className="my-3">
            <button className={'btn-outline-secondary'} onClick={toggleSort}>
                Сортировать по {sort === 'asc' ? 'возрастанию' : 'убыванию'}
            </button>
        </div>

        <div className="d-flex gap-3 flex-wrap">
            {sortedData.map((item, index) => {
                const isLast = index === sortedData.length - 1;
                return (
                    <div key={(item as any).id ?? index}
                         ref={isLast ? (lastItemRef as RefObject<HTMLDivElement>) : null}>
                        {renderItem(item)}
                    </div>
                );
            })}
            {loading && <p>Загрузка...</p>}
        </div>
    </>
}