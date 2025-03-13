import React, { useContext, createContext, useEffect, useState } from "react";


const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext)
};

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        updateUser();      
    }, []);

const updateUser = async () => {
    const getUserEmail = await cookieStore.get("userEmail");
    const getUserId = await cookieStore.get("userId");
    const getUserPerm = await cookieStore.get("isAdmin");
    if (getUserEmail && getUserId) {
        if (getUserPerm.value == "true") {
            setCurrentUser({ email: getUserEmail.value, id: getUserId.value, isAdmin: true });
        } else if (getUserPerm.value == "false") {
            setCurrentUser({ email: getUserEmail.value, id: getUserId.value, isAdmin: false });
        }
        setUserLoggedIn(true);
    }
    setIsLoading(false);
};


    const value  = {
        currentUser,
        userLoggedIn,
        isLoading,
    }
    

  return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;