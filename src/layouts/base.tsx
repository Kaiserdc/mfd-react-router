import {Outlet} from "react-router-dom";
import {Header} from "../components/header.tsx";
import AuthStatus from "../components/AuthStatus.tsx";


export default function BaseLayout(){
    return <>
        <AuthStatus/>
        <Header/>
        <main>
            <div className="container">
                <Outlet/>
            </div>
        </main>
    </>
}