import {NavLink} from "react-router-dom";
import AuthStatus from "../AuthStatus.tsx";
import {AppShell, Container, Group} from "@mantine/core";
import classes from "./Header.module.css";

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
        return <NavLink
            key={index}
            to={link.link}
            className={({isActive}) =>
                isActive ? `${classes.link} ${classes.active}` : classes.link
            }
        >
            {link.label}
        </NavLink>
    })
    return (
            <AppShell.Header p={15}>
                <Container>
                    {/*<Logo/>*/}
                    <Group justify="space-between">
                        <Group gap={16}>
                            {linkItems}
                        </Group>
                        <Group>
                            <AuthStatus/>
                        </Group>
                    </Group>
                </Container>
            </AppShell.Header>

    )
}