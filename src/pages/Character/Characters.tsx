import charactersData from "../../assets/api/json/characters.json"
import CategoryList from "../../components/CategoryList/CategoryList.tsx";
import {CharacterCard} from "../../components/Cards/CharacterCard.tsx";

export default function Characters() {
    return <>
        <CategoryList
            title={'Список персонажей'}
            items={charactersData}
            routePrefix={'characters'}
            CardComponent={CharacterCard}
        />
    </>
}