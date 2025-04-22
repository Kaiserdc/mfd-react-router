import {List} from "../components/List/list.tsx";
import characters from "../assets/api/json/characters.json"
import {useEffect, useState} from "react";
import {useSort} from "../hooks/useSort.ts";
import {SortOrder} from "../interfaces";



type Data = typeof characters

export default function CharactersList() {
    const [charactersList, setCharactersList] = useState<Data>(characters)
    const {sortBy, sortSwitch} = useSort()

    const sortData = (data: Data, sortKey: SortOrder) => {
        return sortKey === 'asc'
            ? data.sort((a, b) => new Date(a.created).getTime() - new Date(b.created).getTime())
            : data.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
    }

    useEffect(() => {
        console.log('refresh', sortBy,'------','refresh data', charactersList)

        const sorted =sortData(charactersList, sortBy)
        setCharactersList(sorted)
    }, [sortBy, charactersList]);

    return <>
        <h1>Список персонажей</h1>
        <div className="my-3">
            <button className={'btn-outline-secondary'} onClick={sortSwitch}>{sortBy}</button>
        </div>
        <List data={charactersList}/>
    </>
}