import locations from "../assets/api/json/location.json"
import episodes from "../assets/api/json/episode.json"
import characters from "../assets/api/json/characters.json"
import moment from "moment";
import {DateType} from "../interfaces";



export const formatDate = (date: DateType) => moment(date).format("YYYY-MM-DD HH:mm:ss")

export const getCharacter = (id: string | number | undefined) => {
    if (!id) return null;
    return characters.find((character) => +character.id === +id);
}
