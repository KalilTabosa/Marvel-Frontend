import { useState } from "react";
import { createContext} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})

    const value = {
        auth,
        setAuth,
    };

    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}

export const useAuthContext = () => useAuthContext(AuthContext);