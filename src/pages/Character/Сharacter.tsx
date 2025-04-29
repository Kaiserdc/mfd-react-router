import {Navigate, useParams} from "react-router-dom";
import {getCharacterById} from "../../lib/dataService.ts";
import {Character} from "../../interfaces";

export function Character() {
    const {id} = useParams<{ id: string }>();
    const character: Character | undefined = id ? getCharacterById(id) : undefined;
    //
    // if (!character) {
    //     return <Navigate to={'*'}/>
    // }
    if (!character) {
        return <Navigate to="*" replace/>
    }
    return <>
        <div className="container my-4">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="img-fluid rounded"
                        loading="lazy"
                    />
                </div>
                <div className="col-md-8">
                    <h1>{character.name}</h1>
                    <p><strong>Status:</strong> {character.status}</p>
                    <p><strong>Species:</strong> {character.species}</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    {character.origin && <p><strong>Origin:</strong> {character.origin.name}</p>}
                    {character.location && <p><strong>Location:</strong> {character.location.name}</p>}
                    {/* при желании можно добавить больше полей */}
                </div>
            </div>
        </div>
    </>
}