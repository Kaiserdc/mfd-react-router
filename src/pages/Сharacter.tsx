// import {getCharacter} from "../lib/utilites";
import {Navigate, useParams} from "react-router";

export function Character() {
    // const {id} = useParams();
    // const character = getCharacter(id)
    //
    // if (!character) {
    //     return <Navigate to={'*'}/>
    // }

    return <>
        {/*<h1>{character.name}</h1>*/}
        {/*<img className={'mb-4'} src={character.image} alt=''/>*/}
        <ul className="list-unstyled">
            {/*{Object.keys(character).map(key => {*/}
            {/*    if (key === 'image' || key === 'name' ) return*/}
            {/*    return <li>{key}: {character[key]}</li>*/}
            {/*})}*/}
        </ul>
    </>
}