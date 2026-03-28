
import React,{useState,useEffect,useContext} from 'react'
const AuthContext=React.createContext();
export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider(props){
    const [authUser,setauthUser]=useState('Sundram');
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    const value={
        authUser,
        setauthUser,
        isLoggedIn,
        setIsLoggedIn
    }
    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
