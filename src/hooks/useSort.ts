import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSort = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortParam =  searchParams.get('sort');
    const sort = sortParam === 'desc' ? 'desc' : 'asc';

    const toggleSort = useCallback(() => {
        setSearchParams({ sort: sort === 'asc' ? 'desc' : 'asc' });
    }, [sort, setSearchParams]);

    return { sort, toggleSort };
};
