import React, { createContext, useEffect, useState } from "react";
import firebaseApp from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

// Step 1: Create a context and export it for using from anywhere
export const AuthContext = createContext(null);

// Step 4: Create an auth as Firebase documentation
// const auth = getAuth(firebaseApp); 

// Step 2: Set 'children' object and use it inside AuthContext.Provider
const AuthProvider = ({ children }) => {

    // Set user state
    const [user, setUser] = useState(null)
    // Step 7: Prevent route to auto login page after authentication
    const [loader, setLoader] = useState(true);

    

  // Step 5: Dummy Object for Auth Info for the time being
//   const user = null;
//   const user = { displayName: "John Henry" }; // From Ln- 15 now

//   Step 6: Create Context objects as needed
    // step 6.1 - Create user object
const createUser = (email,password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
};
    //  Step 6.2 - Create Login object
    const logInUser = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Step 6.3 - Create Log Out object
    const logOutUser = () => {
        setLoader(true);
        return signOut(auth);
    };

    // Step 7.1: Unsubscribe useEffect: If user logged in or not
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            console.log('Logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            setLoader(false);
        });
        return () => {
         unsubscribe();
        }
    } , [])
  // Step 3: Create Auth context object for Provider values
  const AuthInfo = {
    user,
    createUser,
    logInUser,
    loader,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;
