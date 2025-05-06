import CategoryList from "../../components/CategoryList/CategoryList";
import {CharacterCard} from "../../components/Cards/CharacterCard";
import {useState} from "react";
import {Character} from "../../interfaces";
import {useGetData} from "../../hooks/useGetData.ts";



export function Characters() {
    const [queryData, setQueryData] = useState<string>('');
    const [page, setPage] = useState<number>(1);

    const {
        data: characters,
        loading,
        error,
        hasMore,
    } = useGetData<Character>({
        url: 'https://rickandmortyapi.com/api/character',
        query: queryData,
        pageNum: page,
    });
    if (loading) {
        return <div>Загрузка...</div>;
    }
    if (error) {
        return <div>Ошибка при загрузке: {String(error)}</div>;
    }
    return <>

        <CategoryList
            title={'Список персонажей'}
            items={characters}
            routePrefix={'characters'}
            CardComponent={CharacterCard}
        />

    </>
}