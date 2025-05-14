import {List} from "../../components/List/List";
import {CharacterCard} from "../../components/Cards/CharacterCard";
import {useCallback, useRef, useState} from "react";
import {Character} from "../../interfaces";
import {useGetData} from "../../hooks/useGetData.ts";
import {useIntersection} from "../../hooks/useIntersection.ts";


export function Characters() {
    const [page, setPage] = useState<number>(1);
    const lastItemRef  = useRef<HTMLDivElement | null>(null)
    const {
        data: characters,
        loading,
        error,
        hasMore,
    } = useGetData<Character>({
        url: 'https://rickandmortyapi.com/api/character',
        pageNum: page,
    });

    const handleIntersect = useCallback(() => {
        if (!loading && hasMore) {
            setPage(p => p + 1)
        }
    },[loading,hasMore])
    useIntersection(lastItemRef, handleIntersect)

    return <>
        <h1>Список персонажей</h1>
              <List
                items={characters}
                renderItem={(item:Character)=>(<CharacterCard item={item} routePrefix={'characters'}/>)}
                loading={loading}
                error={error}
                lastItemRef={lastItemRef}
              />

    </>
}