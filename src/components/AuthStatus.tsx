import {AuthContextType} from "../context/AuthProvider.tsx";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.ts";


export function AuthStatus({}) {
    const auth:AuthContextType = useAuth()
    const navigate = useNavigate();
    const handleSignOut = () => {
        auth.signOut(() => {
            navigate('/')
        })
    }
    if (auth.user === null) {
        return <>You are not authorized.
            Please <Link to={'login'}>login</Link></>;
    }
    return (
        <>
            <span className="me-2">Welcome user {auth.user}</span>
            <button onClick={handleSignOut}>Sign out</button>
        </>
    );
}

export default AuthStatus;