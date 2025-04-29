import {Navigate, useParams} from "react-router-dom";
import {getEpisodeById} from "../../lib/dataService.ts";
import {Episode as EpisodeType} from "../../interfaces";

export default function Episode() {
    const {id} = useParams<{ id: string }>();
    const episode: EpisodeType | undefined = id ? getEpisodeById(id) : undefined;

    if (!episode) {
        return <Navigate to="*" replace/>
    }
    return <>
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8">
                    <h1>{episode.name}</h1>
                    <p><strong>Серия:</strong> {episode.episode}</p>
                    <p><strong>Дата релиза:</strong> {episode.air_date}</p>
                </div>
            </div>
        </div>
    </>
}