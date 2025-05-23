import {AuthContextType} from "../context/AuthContext.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {Button, Group} from "@mantine/core";


export function AuthStatus({}) {
    const auth: AuthContextType = useAuth()
    const navigate = useNavigate();
    const handleSignOut = () => {
        auth.signOut(() => {
            navigate('/')
        })
    }
    if (!auth.user) {
        return <Group gap={3}>
            You are not authorized.
            Please
            <Button
                px={6}
                component={Link}
                to={'login'}
                variant="transparent">
                Sign In
            </Button>
        </Group>
    }
    return (
        <>
            <span className="me-2">Welcome user {auth.user.name}</span>
            <Button
                variant="filled"
                onClick={() => handleSignOut()}>
                Sign out
            </Button>
        </>
    );
}

export default AuthStatus;