import React, { createContext } from 'react';
import Usefirebase from '../pages/Hooks/Usefirebase';

export const Auth = createContext()
const AuthProvider = ({children}) => {
const allContext = Usefirebase()
    return (
         <Auth.Provider value={allContext}>
             {children}
         </Auth.Provider>
    );
};

export default AuthProvider;