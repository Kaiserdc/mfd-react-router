import {Button, Container, Paper, TextInput, Title} from "@mantine/core";
import {Location, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.ts";
import {FormEvent} from "react";
import classes from "./LoginForm.module.css";
interface LocationState {
    from: { pathname: string };
}
export function LoginForm() {
    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation() as Location & { state?: LocationState };


    const fromPath = location.state?.from.pathname ?? '/';
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);

        const raw = formData.get('username');
        const username = typeof raw === 'string' ? raw : '';

        auth.signIn({name: username}, () => {
            navigate(fromPath, {replace: true})
        })

    }
    return (
        <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
                Welcome back!
            </Title>
            <form onSubmit={handleSubmit}>
                <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
                    <TextInput
                        label="Name"
                        name={'username'}
                        placeholder="Enter your name"
                        required
                        radius="md"/>

                    <Button type={'submit'} fullWidth mt="xl" radius="md">
                        Sign in
                    </Button>
                </Paper>
            </form>
        </Container>
    );
}
