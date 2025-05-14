import {useEffect, useState} from "react";
import axios, {AxiosResponse, CancelTokenSource} from "axios";

interface UseGetDataParams {
    url: string,
    pageNum: number,
}

interface UseGetDataResult<T> {
    data: T[] | null,
    loading: boolean,
    error: Error|null,
    hasMore: boolean;
}

interface ApiResponse<T> {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: T[];
}

export function useGetData<T extends { id: number }>(
    {
        url,
        pageNum
    }: UseGetDataParams): UseGetDataResult<T> {

    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error|null>(null);
    const [hasMore, setHasMore] = useState<boolean>(false);


    useEffect(() => {
        const source: CancelTokenSource = axios.CancelToken.source();
        setLoading(true)
        setError(null);

        axios.get<ApiResponse<T>>(url, {
            params: {
                page: pageNum,
            },
            cancelToken: source.token
        }).then((res: AxiosResponse<ApiResponse<T>>) => {
            setData(prev =>
                Array.from(
                    new Map(
                        [...prev, ...res.data.results].map(item => [item.id, item])
                    ).values()
                )
            );
            setHasMore(Boolean(res.data.info.next));
        }).catch(err => {
            if (axios.isCancel(err)) {
                setError(err instanceof Error ? err: new Error('Неизвестная ошибка'))
                console.error(err)
            }
        }).finally(() => {
            setLoading(false)
        });
        return () => source.cancel()
    }, [pageNum, url]);

    return {data, loading, error, hasMore}
}

