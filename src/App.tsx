import {Outlet, RouterProvider} from "react-router-dom";
import {lazy, Suspense, JSX} from "react";
import {createBrowserRouter} from "react-router-dom";

import {BaseLayout} from "./layouts/base.tsx";
import {RequireAuth} from "./components/RequireAuth";
import {Loader} from "@mantine/core";

const withSuspense = (el: JSX.Element) => (
    <Suspense fallback={
        <Loader color="blue" size="lg" pos="absolute" top="50%" left="50%" style={{ transform: 'translate(-50%, -50%)' }} />}
    >{el}</Suspense>
);

const Home = lazy(() =>
    import("./pages/Home").then((module) => ({
        default: module.Home
    })))
const Login = lazy(() =>
    import("./pages/Login/Login").then((module) => ({
        default: module.Login
    })))
const Characters = lazy(() => import("./pages/Character/Characters").then(module => ({
    default: module.Characters
})))
const Character = lazy(() => import("./pages/Character/Character").then(module => ({
    default: module.Character
})))
const Locations = lazy(() => import("./pages/Location/Locations").then(module => ({
    default: module.Locations
})))
const Location = lazy(() => import("./pages/Location/Location").then(module => ({
    default: module.Location
})))
const Episodes = lazy(() => import("./pages/Episode/Episodes").then(module => ({
    default: module.Episodes
})))
const Episode = lazy(() => import("./pages/Episode/Episode").then(module => ({
    default: module.Episode
})))

const ErrorPage = lazy(() => import("./pages/page404").then(module => ({
    default: module.ErrorPage
})))


const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout/>,
        children: [
            {index: true, element: withSuspense(<Home/>)},
            {path: 'login', element: withSuspense(<Login/>)},
            {
                path: 'characters',
                element: withSuspense(<RequireAuth><Outlet/></RequireAuth>),
                children: [
                    {index: true, element: withSuspense(<Characters/>)},
                    {path: ':id', element: withSuspense(<Character/>)},
                ]
            },
            {
                path: 'locations',
                element: withSuspense(<RequireAuth><Outlet/></RequireAuth>),
                children: [
                    {index: true, element: withSuspense(<Locations/>)},
                    {path: ':id', element: withSuspense(<Location/>)}
                ]
            },
            {
                path: 'episodes',
                element: withSuspense(<RequireAuth><Outlet/></RequireAuth>),
                children: [
                    {index: true, element: withSuspense(<Episodes/>)},
                    {path: ':id', element: withSuspense(<Episode/>)}
                ]
            },
        ]
    },
    {path: '*', element: withSuspense(<ErrorPage/>)},
])

export default function App() {
       return <RouterProvider router={router}/>
}


