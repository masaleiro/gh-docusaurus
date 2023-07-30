import React, {useState, createContext, useEffect, useContext} from 'react';
import { AuthContextProvider } from './AuthContext';
import WelcomeMessage from './WelcomeMessage';

// Default implementation, that you can customize
export default function Root({children}) {
  
  return (
        <AuthContextProvider>
          <WelcomeMessage></WelcomeMessage>
          { children }
        </AuthContextProvider>
  );
}
