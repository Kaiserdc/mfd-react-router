import charactersData from "../../assets/api/json/characters.json"
import CategoryList from "../../components/CategoryList/CategoryList.tsx";
import {CharacterCard} from "../../components/Cards/CharacterCard.tsx";
import {JSX} from "react";

export default function Characters(): JSX.Element {
    return <>
        <CategoryList
            title={'Список персонажей'}
            items={charactersData}
            routePrefix={'characters'}
            CardComponent={CharacterCard}
        />
    </>
}