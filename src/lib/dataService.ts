import charactersData from '../assets/api/json/characters.json';
import episodesData from '../assets/api/json/episode.json';
import locationsData from '../assets/api/json/location.json';
import {Character, Episode, Location} from '../interfaces';

export function getCharacterById(id: string): Character | undefined {
    return charactersData.find(c => String(c.id) === id);
}

export function getEpisodeById(id: string): Episode | undefined {
    return episodesData.find(c => String(c.id) === id);
}

export function getLocationById(id: string): Location | undefined {
    return locationsData.find(c => String(c.id) === id);
}