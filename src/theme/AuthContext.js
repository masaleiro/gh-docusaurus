// AuthContext.js
import React, { createContext, useEffect, useState } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const AuthContext = createContext({
    username: null,
    login: () => {},
    logout: () => {},
    authReady: true,
    role : null
});

export const AuthContextProvider = ({ children }) => {

const [authData, setAuthData] = useState({ authReady: true, username: 'tom' }); // Replace with your actual authentication data
//const [authData, setAuthData] = useState(null);

useEffect(() => {
    // init netlify identity connection
    netlifyIdentity.init();
}, [])

const login = () => {
    netlifyIdentity.open();
}

//const context = { user, login };

    return (
        //<AuthContext.Provider value={authData}>
        <AuthContext.Provider value={authData}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;

