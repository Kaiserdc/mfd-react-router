import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import {Character} from "./pages/Character/Character";
import BaseLayout from "./layouts/base.tsx";
import ErrorPage from "./pages/page404.tsx";

import "./assets/css/styles.css";

import Characters from "./pages/Character/Characters";
import Locations from "./pages/Location/Locations";
import Episodes from "./pages/Episode/Episodes";
import Location from "./pages/Location/Location";

import Episode from "./pages/Episode/Episode";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route index path={'/'} element={<Home/>}/>
                    <Route path={'/characters'} element={<Characters/>}/>
                    <Route path={'/characters/:id'} element={<Character/>}/>
                    <Route path={'/locations'} element={<Locations/>}/>
                    <Route path={'/locations/:id'} element={<Location/>}/>
                    <Route path={'/episodes'} element={<Episodes/>}/>
                    <Route path={'/episodes/:id'} element={<Episode/>}/>
                </Route>
                <Route path={'*'} element={<ErrorPage />} />

            </Routes>
        </>
    )
}

export default App
