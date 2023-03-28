import React from 'react';
import { Navigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const PublicRoute = ({ children }) => {
    const isLoggedIn = useAuth({ children });

    return !isLoggedIn ? children : <Navigate to="/StudentPortal/login" />;
};

export default PublicRoute;
