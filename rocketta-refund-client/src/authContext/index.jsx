import React, { useContext, createContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
};

const AuthProvider = ({children}) => {
    const cookieObj = {};
    const [currentUser, setCurrentUser] = useState({email: "", id: "", token: "", isAdmin: false});
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        updateUser();      
    }, []);

const updateUser = async () => {
    parseCookie(document.cookie);
    const {email, id, token, isAdmin} = cookieObj;
    try{
        if(token && isAdmin == "true") {
            setCurrentUser((prevUser) => (
                {...prevUser, email, id, token, isAdmin: true}
            ));
            setUserLoggedIn(true);
        } else if(token) {
            setCurrentUser((prevUser) => (
                { ...prevUser, email, id, token, isAdmin: false }
            ));
            setUserLoggedIn(true);  
        }
    } catch(err) {
        console.log(err);
    } finally {
        setIsLoading(false);
    }
};


const parseCookie = (cookieString) => {
    const splitCookie = cookieString.split(";");
    splitCookie.forEach(cookie => {
        const [key, value] = cookie.trim().split("=");
        cookieObj[key] = value;
    });
    return cookieObj;
}

    const value  = {
        currentUser,
        userLoggedIn,
        isLoading,
        setCurrentUser,
        setUserLoggedIn,
    }
    

  return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;