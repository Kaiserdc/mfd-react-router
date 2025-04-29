// import {getCharacter} from "../lib/utilities";
import {Navigate, useParams} from "react-router-dom";

export function Character() {
    // const {id} = useParams();
    // const character = getCharacter(id)
    //
    // if (!character) {
    //     return <Navigate to={'*'}/>
    // }

    return <>
        <h1>Детальная информация</h1>
        {/*<img className={'mb-4'} src={character.image} alt=''/>*/}
        <ul className="list-unstyled">
            {/*{Object.keys(character).map(key => {*/}
            {/*    if (key === 'image' || key === 'name' ) return*/}
            {/*    return <li>{key}: {character[key]}</li>*/}
            {/*})}*/}
        </ul>
    </>
}