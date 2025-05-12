import {CategoryList} from '../../components/CategoryList'

import {useGetData} from "../../hooks/useGetData.ts";
import {Episode} from "../../interfaces";
import {useState} from "react";


export function Episodes() {
    const [page, setPage] = useState<number>(1);
    const {
        data: episodes,
        loading,
        error,
        hasMore,
    } = useGetData<Episode>({
        url: 'https://rickandmortyapi.com/api/episode',
        pageNum: page,
    });
    if (loading) {
        return <div>Загрузка...</div>;
    }
    if (error) {
        return <div>Ошибка при загрузке: {String(error)}</div>;
    }
    return <>
        {episodes &&
            <CategoryList
                title={'Список эпизодов'}
                items={episodes}
                routePrefix={'episodes'}
                onLoadMore={() => setPage(p => p + 1)}
                hasMore={hasMore}
                loading={loading}
            />
        }
    </>
}