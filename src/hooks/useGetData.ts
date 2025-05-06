import {useEffect, useState} from "react";
import axios, {AxiosResponse, CancelTokenSource} from "axios";

interface UseGetDataParams {
    url: string,
    query?: string,
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

export function useGetData<T = any>({
                                        url,
                                        query,
                                        pageNum
                                    }: UseGetDataParams): UseGetDataResult<T> {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState<boolean>(false);


    useEffect(() => {
        const source: CancelTokenSource = axios.CancelToken.source();
        setLoading(true)
        setError(false);

        axios.get<ApiResponse<T>>(url, {
            params: {
                page: pageNum,
                query: query
            },
            cancelToken: source.token
        }).then((res: AxiosResponse<ApiResponse<T>>) => {
            setData((prevState) => [...prevState, ...res.data.results])
            setHasMore(res.data.results.length > 0);
        }).catch(err => {
            if (axios.isCancel(err)) return
            setError(false)
            console.error(err)
        }).finally(() => {
            setLoading(false)
        });
        return () => source.cancel()
    }, [query, pageNum]);
    console.log(data)
    return {data, loading, error, hasMore}
}

