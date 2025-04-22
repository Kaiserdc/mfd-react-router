import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import CharactersList from "./pages/Сharacters.tsx";
import {Character} from "./pages/Сharacter.tsx";
import BaseLayout from "./layouts/base.tsx";
import ErrorPage from "./pages/page404.tsx";

import "./assets/css/styles.css";
import LocationsList from "./pages/Locations.tsx";
import EpisodesList from "./pages/Episodes.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route index path={'/'} element={<Home/>}/>
                    <Route path={'/characters'} element={<CharactersList/>}/>
                    <Route path={'/characters/:id'} element={<Character/>}/>
                    <Route path={'/locations'} element={<LocationsList/>}/>
                    <Route path={'/locations/:id'} element={<Character/>}/>
                    <Route path={'/episodes'} element={<EpisodesList/>}/>
                    <Route path={'/episodes/:id'} element={<Character/>}/>
                </Route>
                <Route path={'*'} element={<ErrorPage />} />

            </Routes>
        </>
    )
}

export default App
