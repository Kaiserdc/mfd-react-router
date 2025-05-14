import {List} from "../../components/List";
import {CharacterCard} from "../../components/Cards/CharacterCard";
import {useState} from "react";
import {Character} from "../../interfaces";
import {useGetData} from "../../hooks/useGetData.ts";


export function Characters() {
    const [page, setPage] = useState<number>(1);

    const {
        data: characters,
        loading,
        error,
        hasMore,
    } = useGetData<Character>({
        url: 'https://rickandmortyapi.com/api/character',

        pageNum: page,
    });
    if (loading) {
        return <div>Загрузка...</div>;
    }
    if (error) {
        return <div>Ошибка при загрузке: {String(error)}</div>;
    }
    return <>
        {characters &&
            <List
                title={'Список персонажей'}
                items={characters}
                routePrefix={'characters'}
                ComponentCard={CharacterCard}
                onLoadMore={() => setPage(p => p + 1)}
                hasMore={hasMore}
                loading={loading}
            />
        }
    </>
}