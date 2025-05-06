import {Outlet} from "react-router-dom";
import {Header} from "../components/Header.tsx";

export function BaseLayout(){
    return <>
            <Header/>
        <main>
            <div className="container">
                <Outlet/>
            </div>
        </main>
    </>
}