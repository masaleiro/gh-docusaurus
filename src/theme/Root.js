import React, {useState, createContext, useEffect, useContext} from 'react';
import { AuthContextProvider } from './AuthContext';

// Default implementation, that you can customize
export default function Root({children}) {
  
  return (
        <AuthContextProvider>
          { children }
        </AuthContextProvider>
  );
}
