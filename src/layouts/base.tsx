import {Outlet} from "react-router-dom";
import {Header} from "../components/Header.tsx";
import ErrorBoundary from "../components/ErorrBoundry.tsx";

export function BaseLayout() {
    return <>
        <Header/>
        <main>
            <div className="container">
                <ErrorBoundary>
                    <Outlet/>
                </ErrorBoundary>
            </div>
        </main>
    </>
}