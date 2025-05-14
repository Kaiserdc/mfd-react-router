import {useGetData} from "../../hooks/useGetData.ts";
import { Episode} from "../../interfaces";
import {useCallback, useRef, useState} from "react";
import {List} from "../../components/List/List.tsx";

import {useIntersection} from "../../hooks/useIntersection.ts";
import {DefaultCard} from "../../components/Cards/DefaultCard.tsx";


export function Episodes() {
    const [page, setPage] = useState<number>(1);
    const lastItemRef  = useRef<HTMLDivElement | null>(null)
    const {
        data: episodes,
        loading,
        error,
        hasMore,
    } = useGetData<Episode>({
        url: 'https://rickandmortyapi.com/api/episode',
        pageNum: page,
    });

    const handleIntersect = useCallback(() => {
        if (!loading && hasMore) {
            setPage(p => p + 1)
        }
    },[loading,hasMore])
    useIntersection(lastItemRef, handleIntersect)

    return <>
        <h1>Список эпизодов</h1>
        <List
            items={episodes}
            renderItem={(item: Episode) => (<DefaultCard item={item} routePrefix={'episodes'}/>)}
            loading={loading}
            error={error}
            lastItemRef={lastItemRef}
        />

    </>
}