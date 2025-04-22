import episodes from '../assets/api/json/episode.json'
import {List} from "../components/List/list.tsx";
import {useState} from "react";


type Data = typeof episodes

export default function LocationsList() {
    const [episodesList, setEpisodesList] = useState<Data>(episodes)
    return <>
        <h1>Список локаций</h1>

        <List data={episodesList} />
    </>
}