import {Navigate, useParams} from "react-router-dom";
import {getLocationById} from "../../lib/dataService.ts";
import {Location as LocationType} from "../../interfaces";
import {JSX} from "react";

export function Location():JSX.Element {
    const {id} = useParams<{ id: string }>();
    const location: LocationType | undefined = id ? getLocationById(id) : undefined;

    if (!location) {
        return <Navigate to="*" replace/>
    }
    return <>
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8">
                    <h1>{location.name}</h1>
                    <p><strong>Тип:</strong> {location.type}</p>
                    <p><strong>Размер:</strong> {location.dimension}</p>
                </div>
            </div>
        </div>
    </>
}