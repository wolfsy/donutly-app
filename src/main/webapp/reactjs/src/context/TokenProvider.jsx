import { createContext, useEffect, useState, useContext } from "react";
import AuthContext from "./AuthProvider";
import jwt_decode from "jwt-decode";

const TokenContext = createContext({});

export const TokenProvider = ({ children }) => {

    const { auth } = useContext(AuthContext);
    const [token, setToken] = useState({});
    
    useEffect(() => {
        
        var token = {};
        const authToken = auth.token;

        if (authToken) {
            token.raw = authToken;
            token.decoded = jwt_decode(authToken);
        }
        
        setToken(token);
    }, [auth]);

    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export default TokenContext;