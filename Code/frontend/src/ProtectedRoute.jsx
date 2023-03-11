import React from 'react'
import { Navigate, useLocation } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem("user");

    if (!user) {
        return <Navigate to="/signin" replace />
    }
    return children

};

export default ProtectedRoute;