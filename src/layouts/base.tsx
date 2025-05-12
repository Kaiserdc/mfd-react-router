import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header.tsx";
import ErrorBoundary from "../components/ErorrBoundry.tsx";
import {AppShell, Container} from "@mantine/core";

export function BaseLayout() {
    return <>
        <AppShell
            header={{height:61}}
        >
            <Header/>
            <AppShell.Main>
                <Container>
                    <ErrorBoundary>
                        <Outlet/>
                    </ErrorBoundary>
                </Container>
            </AppShell.Main>
        </AppShell>
    </>
}