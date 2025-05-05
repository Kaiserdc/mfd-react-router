import {createContext, ReactNode, useState} from "react";

export interface User {
    name: string;
}

export interface AuthContextType {
    user: User | null;
    signIn: (newUser: User, callback: VoidFunction) => void;
    signOut: (callback: VoidFunction) => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(() => localStorage.getItem('user') || null);
    const value: AuthContextType = {
        user,
        signIn: (newUser: User, callback: VoidFunction) => {
            setUser(newUser);
            localStorage.setItem('user', newUser);
            callback();
        },
        signOut: (callback: VoidFunction) => {
            setUser(null);
            localStorage.removeItem('user');
            callback();
        }
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;