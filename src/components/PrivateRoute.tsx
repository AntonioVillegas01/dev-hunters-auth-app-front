import { Route, Navigate } from 'react-router-dom';
import React from "react";

interface PrivateRouteProps {
    path: string;
    element: React.ReactNode;
    isAuthenticated: boolean;
}


export
const PrivateRoute =({ path, element, isAuthenticated, ...rest }: PrivateRouteProps) =>{
    return (
        <Route
            path={path}
            {...rest}
            element={isAuthenticated ? element : <Navigate to="/login" replace />}
        />
    );
}
