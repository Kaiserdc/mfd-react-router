import CategoryList from "../../components/CategoryList/CategoryList.tsx";
import locationsData from '../../assets/api/json/location.json'

export default function Locations() {
    return <>
        <CategoryList
            title={'Список локаций'}
            items={locationsData}
            routePrefix={'locations'}
        />
    </>
}