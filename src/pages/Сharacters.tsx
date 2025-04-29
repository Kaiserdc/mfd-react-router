import charactersData from "../assets/api/json/characters.json"
import CategoryList from "../components/CategoryList/CategoryList.tsx";
import {CharacterListCard} from "../components/Characters/CharacterListCard.tsx";

export default function CharactersList() {
    return <>
        <CategoryList
            title={'Список персонажей'}
            items={charactersData}
            routePrefix={'characters'}
            CardComponent={CharacterListCard}
        />
    </>
}