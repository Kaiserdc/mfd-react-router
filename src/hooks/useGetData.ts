import {useEffect, useState} from "react";
import axios, {AxiosResponse, CancelTokenSource} from "axios";

interface UseGetDataParams {
    url: string,
    pageNum: number,
}

interface UseGetDataResult<T> {
    data: T[] | null,
    loading: boolean,
    error: unknown,
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

export function useGetData<T extends {id:number}>(
    {
        url,
        pageNum
    }: UseGetDataParams): UseGetDataResult<T> {

    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState<boolean>(false);


    useEffect(() => {
        let cancel = false
        const source: CancelTokenSource = axios.CancelToken.source();
        setLoading(true)
        setError(false);

        axios.get<ApiResponse<T>>(url, {
            params: {
                page: pageNum,
            },
            cancelToken: source.token
        }).then((res: AxiosResponse<ApiResponse<T>>) => {
            if (cancel) return
            setData(prev =>
                Array.from(
                    new Map(
                        [...prev, ...res.data.results].map(item => [item.id, item])
                    ).values()
                )
            );
            setHasMore(res.data.results.length > 0);
            setLoading(false);
        }).catch(err => {
            if (axios.isCancel(err)) return
            setError(false)
            console.error(err)
        }).finally(() => {
            setLoading(false)
        });
        return () => source.cancel()
    }, [pageNum]);
    return {data, loading, error, hasMore}
}

