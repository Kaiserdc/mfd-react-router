import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';


export const useSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sort = searchParams.get('sort') || 'asc';

    const toggleSort = useCallback(() => {
        setSearchParams({ sort: sort === 'asc' ? 'desc' : 'asc' });
    }, [sort, setSearchParams]);

    return { sort, toggleSort };
};
