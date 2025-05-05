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
import {Login} from "./pages/Login/Login.tsx";
import {RequireAuth} from "./components/RequireAuth.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route index path={'/'} element={<Home/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/characters'} element={<RequireAuth><Characters/></RequireAuth>}/>
                    <Route path={'/characters/:id'} element={<RequireAuth><Character/></RequireAuth>}/>
                    <Route path={'/locations'} element={<RequireAuth><Locations/></RequireAuth>}/>
                    <Route path={'/locations/:id'} element={<RequireAuth><Location/></RequireAuth>}/>
                    <Route path={'/episodes'} element={<RequireAuth><Episodes/></RequireAuth>}/>
                    <Route path={'/episodes/:id'} element={<RequireAuth><Episode/></RequireAuth>}/>
                </Route>
                <Route path={'*'} element={<ErrorPage/>}/>

            </Routes>
        </>
    )
}

export default App
