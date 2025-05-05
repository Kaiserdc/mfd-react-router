import {AuthContextType} from "../context/AuthContext.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {JSX} from "react";


export function AuthStatus({}):JSX.Element {
    const auth:AuthContextType = useAuth()
    const navigate = useNavigate();
    const handleSignOut = () => {
        auth.signOut(() => {
            navigate('/')
        })
    }
    if (!auth.user) {
        return <>You are not authorized.
            Please <Link to={'login'}>login</Link></>;
    }
    return (
        <>
            <span className="me-2">Welcome user {auth.user.name}</span>
            <button onClick={handleSignOut}>Sign out</button>
        </>
    );
}

export default AuthStatus;