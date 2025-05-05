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
import Login from "./pages/Login/Login.tsx";
import {PrivateRoute} from "./components/PrivateRoute.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route index path={'/'} element={<Home/>}/>
                    <Route path={'/characters'} element={<PrivateRoute><Characters/></PrivateRoute>}/>
                    <Route path={'/characters/:id'} element={<PrivateRoute><Character/></PrivateRoute>}/>
                    <Route path={'/locations'} element={<PrivateRoute><Locations/></PrivateRoute>}/>
                    <Route path={'/locations/:id'} element={<PrivateRoute><Location/></PrivateRoute>}/>
                    <Route path={'/episodes'} element={<PrivateRoute><Episodes/></PrivateRoute>}/>
                    <Route path={'/episodes/:id'} element={<PrivateRoute><Episode/></PrivateRoute>}/>
                    <Route path={'/login'} element={<Login/>}/>
                </Route>
                <Route path={'*'} element={<ErrorPage/>}/>

            </Routes>
        </>
    )
}

export default App
