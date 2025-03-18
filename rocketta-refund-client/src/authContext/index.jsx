import React, { useContext, createContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
};

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({email: "", id: "", token: "", isAdmin: false});
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        updateUser();      
    }, []);

const updateUser = async () => {
    setIsLoading(false);
};


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