import {useCallback, useMemo, useRef} from "react";
import {DefaultCard} from '../Cards/DefaultCard.tsx';
import {useSort} from "../../hooks/useSort.ts";

import {Item, CategoryListProps} from "../../interfaces";


export default function CategoryList<T extends Item>(
    {
        title,
        items,
        routePrefix,
        CardComponent,
        onLoadMore,
        hasMore = false,
        loading = false
    }: CategoryListProps<T>) {
    const {sort, toggleSort} = useSort()

    const observer = useRef<IntersectionObserver | null>(null);
    const lastItemRef = useCallback(
        (node: HTMLDivElement) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && hasMore) {
                    onLoadMore?.();
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading, hasMore, onLoadMore]
    );


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
        {/*<List data={sortedData} routePrefix={routePrefix} CardComponent={Card}/>*/}
        <div className="d-flex gap-3 flex-wrap">
            {sortedData.map((item, index) => {
                const isLast = index === sortedData.length - 1

                return (
                    <div title={item.name} key={item.id} ref={isLast ? lastItemRef : undefined}>
                        {CardComponent ? (
                            <CardComponent item={item} routePrefix={routePrefix}/>
                        ) : (
                            <DefaultCard item={item} routePrefix={routePrefix}/>
                        )}
                    </div>
                )
            })}
        </div>
        {loading && <p>Загрузка...</p>}
    </>
}