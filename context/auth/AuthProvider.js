import  { useReducer,createContext } from "react";
import { authReducer, initialState } from "./authReducers";

export const authContext = createContext();

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    return (
        <authContext.Provider value={[state, dispatch]}>
            {children}
        </authContext.Provider>
    );
}

export default AuthProvider;
