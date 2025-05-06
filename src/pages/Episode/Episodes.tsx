import CategoryList from "../../components/CategoryList/CategoryList.tsx";

import {useGetData} from "../../hooks/useGetData.ts";
import {Episode} from "../../interfaces";
import {useState} from "react";


export function Episodes(){
    const [queryData, setQueryData] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const {
        data: episodes,
        loading,
        error,
        hasMore,
    } = useGetData<Episode>({
        url: 'https://rickandmortyapi.com/api/episode',
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
            title={'Список эпизодов'}
            items={episodes}
            routePrefix={'episodes'}
        />
    </>
}