import {useSearchParams} from "react-router";
import {SortType} from "../interfaces";


export const useSort = (sortState: SortType = "asc") => {

    const [searchParams, setSearchParams] = useSearchParams({sort: sortState})

    const sortSwitch = () => {
        setSearchParams({ sort: searchParams.get("sort") === "asc" ? "desc" : "asc" });

    };

    return { sortBy: searchParams.get("sort") as SortType, sortSwitch };

}
