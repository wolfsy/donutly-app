import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const initialState = { email: '', password: '', token: '', isLogged: false };

    const [auth, setAuth] = useState(() => {
        const data = localStorage.getItem('auth');
        return data ? JSON.parse(data) : initialState;
    });

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth]);

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;