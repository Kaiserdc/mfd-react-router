import {useContext} from "react";
import {AuthContext, AuthContextType} from "../context/AuthContext.tsx";

export function useAuth():AuthContextType {
    const context = useContext(AuthContext);

    if (!context) throw new Error('useAuth must be inside <AuthProvider>');

    return context;

}