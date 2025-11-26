import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import Base from "./Base";
import { useAuth } from '../Context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const AdminLayout = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };
    return (
    <Base>
        <div className="d-flex">
            {/* Left sidebar */}
            <AdminSidebar />

            {/* Right section */}
            <div className="flex-grow-1 p-3">

                {/* Top header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="navbar-brand mb-0">
                        Welcome, {user?.userName} 👋
                    </h4>
                </div>

                {/* Page content */}
                <Outlet />
            </div>
        </div>
    </Base>
);

};

export default AdminLayout;
