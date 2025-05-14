import {useCallback, useMemo, useRef} from "react";
import {DefaultCard} from '../Cards/DefaultCard.tsx';
import {useSort} from "../../hooks/useSort.ts";
import {Button, Grid, Group, SimpleGrid} from "@mantine/core";
import {Item, CategoryListProps} from "../../interfaces";
import {IconSortDescendingLetters, IconSortAscendingLetters} from '@tabler/icons-react'

export function List<T extends Item>(
    {
        title,
        items,
        routePrefix,
        ComponentCard,
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
            const cmp = a.created.localeCompare(b.created, undefined, {sensitivity: 'base'});
            return sort === 'asc' ? cmp : -cmp;
        });
    }, [items, sort]);

    return <>
        <h1>{title}</h1>
        <Group mb={16}>
            <Button leftSection={sort === 'asc' ? <IconSortAscendingLetters/> : <IconSortDescendingLetters/>}
                    onClick={toggleSort}>
                Сортировать по {sort === 'asc' ? 'возрастанию' : 'убыванию'}
            </Button>
        </Group>
        <SimpleGrid cols={4} >
            {sortedData.map((item, index) => {
                if (index === sortedData.length - 1) {
                    return (
                        <div ref={lastItemRef} key={item.id}>
                            {ComponentCard ? (
                                <ComponentCard item={item} routePrefix={routePrefix}/>
                            ) : (
                                <DefaultCard item={item} routePrefix={routePrefix}/>
                            )}
                        </div>
                    );
                }
                return (
                    <div key={item.id}>
                        {ComponentCard ? (
                            <ComponentCard item={item} routePrefix={routePrefix}/>
                        ) : (
                            <DefaultCard item={item} routePrefix={routePrefix}/>
                        )}
                    </div>
                );
            })}
        </SimpleGrid>
        {loading && <p>Загрузка...</p>}
    </>
}