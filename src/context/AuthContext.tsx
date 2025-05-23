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

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const value: AuthContextType = {
        user,
        signIn: (newUser: User, callback: VoidFunction) => {
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
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

export default AuthContext;