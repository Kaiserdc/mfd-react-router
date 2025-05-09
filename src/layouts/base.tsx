import {Outlet} from "react-router";
import {Header} from "../components/header.tsx";


export default function BaseLayout(){
    return <>
        <Header/>
        <main>
            <div className="container">
                <Outlet/>
            </div>
        </main>
    </>
}