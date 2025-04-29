import CategoryList from "../../components/CategoryList/CategoryList.tsx";
import episodesData from '../../assets/api/json/episode.json'

export default function Episodes() {
    return <>
        <CategoryList
            title={'Список эпизодов'}
            items={episodesData}
            routePrefix={'episodes'}
        />
    </>
}