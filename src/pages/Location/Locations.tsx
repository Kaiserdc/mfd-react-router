import CategoryList from "../../components/CategoryList/CategoryList.tsx";
import locationsData from '../../assets/api/json/location.json'
import {JSX} from "react";

export function Locations(): JSX.Element {
    return <>
        <CategoryList
            title={'Список локаций'}
            items={locationsData}
            routePrefix={'locations'}
        />
    </>
}