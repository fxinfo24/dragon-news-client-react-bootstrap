import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext)
    const location  = useLocation()
    console.log(location);

    // Check the Loader (Loader from react bootstrap)
    if (loader) {
        return <Spinner animation="border" variant="info" />
    }
    

    if (user) {
        return children;
    }
    return <Navigate to = '/login' state = {{from: location}} replace></Navigate>;
};

export default PrivateRoute;

/**
 * ------------------
 *          STEPS
 * -------------------
 * 1. Check user is logged in or not (onAuthStateChanged in AuthProvider).
 * 2. If user is logged in, then allow them to visit the route
 * 3. Else redirect the user to the login page
 * 4. Setup the private router 
 * 5. Handle loading 
*/