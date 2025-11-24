// components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const PrivateRoute = ({ children, role, allowed }) => {
    const { user } = useAuth();

    if (!user) return <Navigate to="/login" />;

    role = user?.role;
    if (role != null && role !== '') {
    console.log("Role is valid:", role);
} else {
    role = 'USER';
}

    console.log("Children", children);
    console.log("Role", role);
    console.log("Allowed", allowed);
    

    // If route requires a specific role
  if (allowed && !allowed.includes(role.toLowerCase())) {
    // redirect them to their correct dashboard
    return <Navigate to={`/${role.toLowerCase()}/dashboard`} />;
  }

  return children;
};

export default PrivateRoute;