import {FormEvent} from 'react';
import {useLocation, useNavigate, Location} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.ts";
import {Button, Container, Group, Paper, TextInput, Title} from "@mantine/core";
import {LoginForm} from "../../components/LoginForm";



export function Login() {

    return (
        <LoginForm/>
    );
}
