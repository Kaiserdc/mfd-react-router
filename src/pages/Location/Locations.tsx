import CategoryList from "../../components/CategoryList/CategoryList.tsx";
import {useState} from "react";
import {useGetData} from "../../hooks/useGetData.ts";
import {Episode} from "../../interfaces";

export function Locations(){
    const [queryData, setQueryData] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const {
        data: locations,
        loading,
        error,
        hasMore,
    } = useGetData<Episode>({
        url: 'https://rickandmortyapi.com/api/location',
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
            title={'Список локаций'}
            items={locations}
            routePrefix={'locations'}
        />
    </>
}