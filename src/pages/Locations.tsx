import locations from '../assets/api/json/location.json'
import {List} from "../components/List/List.tsx";
import {useState} from "react";


type Data = typeof locations

export default function LocationsList() {
    const [locationsList, setLocationsList] = useState<Data>(locations)
    return <>
        <h1>Список локаций</h1>

        <List data={locationsList}/>
    </>
}