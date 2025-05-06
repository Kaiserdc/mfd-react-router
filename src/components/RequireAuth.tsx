import {ReactNode} from "react";
import {useAuth} from "../hooks/useAuth.ts";
import {Navigate, useLocation} from "react-router-dom";

interface PrivateRouteProps {
    children: ReactNode;
}

export function RequireAuth({children}: PrivateRouteProps) {
    const auth = useAuth();
    const location = useLocation();
    if (!auth.user) {
        return <Navigate to={'/login'} state={{from: location.pathname}} replace/>
    }
    return <>{children}</>
}
