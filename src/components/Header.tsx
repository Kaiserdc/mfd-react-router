import {NavLink} from "react-router-dom";
import AuthStatus from "./AuthStatus.tsx";
import {AppShell, Container, Group} from "@mantine/core";
import {ReactComponent as Logo} from '../assets/img/logo.svg';
import App from "../App.tsx";

interface LinkItem {
    link: string;
    label: string;
}

const links: LinkItem[] = [
    {link: '/', label: 'Главная',},
    {link: '/characters', label: 'Персонажи',},
    {link: '/episodes', label: 'Эпизоды',},
    {link: '/locations', label: 'Локации',}
]
export const Header = () => {
    const linkItems = links.map((link, index) => {
        <NavLink
            key={index}
            to={link.link}
            className={({isActive}) =>
                isActive ? "active" : ""
            }
        >
            {link.label}
        </NavLink>
    })
    return (
        <AppShell.Header p={16}>
            <Container>
                <Group>
                    <Logo/>
                </Group>
                Header
            </Container>
        </AppShell.Header>

    )
}