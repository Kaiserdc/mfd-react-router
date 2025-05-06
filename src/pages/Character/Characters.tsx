import charactersData from "../../assets/api/json/characters.json"
import CategoryList from "../../components/CategoryList/CategoryList.tsx";
import {CharacterCard} from "../../components/Cards/CharacterCard.tsx";
import {useState} from "react";
import {Character} from "../../interfaces";


export function Characters() {
    // const [characters, setCharacters] = useState<Character[]>([]);

    return <>
        <CategoryList
            title={'Список персонажей'}
            items={charactersData}
            routePrefix={'characters'}
            CardComponent={CharacterCard}
        />
    </>
}