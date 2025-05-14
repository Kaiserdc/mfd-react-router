import {useCallback, useRef, useState} from "react";
import {useGetData} from "../../hooks/useGetData.ts";
import {Episode} from "../../interfaces";
import {useIntersection} from "../../hooks/useIntersection.ts";
import {List} from "../../components/List/List.tsx";
import {DefaultCard} from "../../components/Cards/DefaultCard.tsx";

export function Locations() {
    const [page, setPage] = useState<number>(1);
    const lastItemRef  = useRef<HTMLDivElement | null>(null)
    const {
        data: locations,
        loading,
        error,
        hasMore,
    } = useGetData<Episode>({
        url: 'https://rickandmortyapi.com/api/location',
        pageNum: page,
    });

    const handleIntersect = useCallback(() => {
        if (!loading && hasMore) {
            setPage(p => p + 1)
        }
    },[loading,hasMore])
    useIntersection(lastItemRef, handleIntersect)

    return <>
        <h1>Список локаций</h1>
        <List
            items={locations}
            renderItem={(item: Episode) => (<DefaultCard item={item} routePrefix={'locations'}/>)}
            loading={loading}
            error={error}
            lastItemRef={lastItemRef}
        />

    </>
}