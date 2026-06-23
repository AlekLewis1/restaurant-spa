/* Author: Shawn Schafer
* Date: 6/20/2026
* File: RequireAuth.jsx
* Description: requires authorization
*/

import {Navigate, useLocation} from "react-router-dom";
import {useAuth} from "../src/services/useAuth.jsx";

import React from 'react';

const RequireAuth = ({children}) => {
    let {isAuthed} = useAuth();
    let location = useLocation();
    if (!isAuthed) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children;
};
export default RequireAuth;