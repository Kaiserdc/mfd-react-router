import {AuthContextType} from "../context/AuthProvider.tsx";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.ts";


export function AuthStatus({}): AuthContextType {
    const auth = useAuth()
    const navigate = useNavigate();
    const handleSignout = () => {
        auth.signOut(() => {
            navigate('/')
        })
    }
    if (auth.user === null) {
        return '<p>Please login</p>';
    }
    return (
        <>
            Welcome user {auth.user}
            <button onClick={handleSignout}>Sign out</button>
        </>
    );
}

export default AuthStatus;