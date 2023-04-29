import React, { createContext } from 'react';
import firebaseApp from '../Firebase/firebase.config';
import { getAuth } from "firebase/auth";


// Step 1: Create a context and export it for using from anywhere
export const AuthContext = createContext(null)

// Step 4: Create an auth as Firebase documentation
const Auth = getAuth(firebaseApp);


// Step 2: Set 'children' object and use it inside AuthContext.Provider
const AuthProvider = ({children}) => {

// Step 5: Dummy Object for Auth Info for the time being
const user = {displayName: 'John Handry'}
    // Step 3: Create Auth context object for Provider values
    const AuthInfo = {
        user,
    }


    return (
        <AuthContext.Provider value = {AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;