// AuthContext.js
import React, { createContext, useEffect, useState } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: true,
    role : null
});

export const AuthContextProvider = ({ children }) => {

//const [authData, setAuthData] = useState({ authReady: true, username: 'tom' }); // Replace with your actual authentication data
//const [authData, setAuthData] = useState(null);
const [user, setUser] = useState(null);

useEffect(() => {
    netlifyIdentity.on('login', (user) => {
        setUser(user);
        netlifyIdentity.close();
        console.log("Login event!");
        //document.getElementById("authButton").
    })

    netlifyIdentity.on('logout', () => {
        setUser(null);
        console.log("Logout event!");
    })

    // init netlify identity connection
    netlifyIdentity.init();

    return () => {
        netlifyIdentity.off('login');
        netlifyIdentity.off('logout');
    }
}, [])

const login = () => {
    netlifyIdentity.open();
}

const logout = () => {
    netlifyIdentity.logout();
}

const context = { user, login, logout };

    return (
        //<AuthContext.Provider value={authData}>
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;
