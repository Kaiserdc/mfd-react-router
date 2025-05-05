import CategoryList from "../../components/CategoryList/CategoryList.tsx";
import episodesData from '../../assets/api/json/episode.json'
import {JSX} from "react";

export default function Episodes():JSX.Element {
    return <>
        <CategoryList
            title={'Список эпизодов'}
            items={episodesData}
            routePrefix={'episodes'}
        />
    </>
}