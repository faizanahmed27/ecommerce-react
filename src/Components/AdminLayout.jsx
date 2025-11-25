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
                <span className="navbar-brand mt-3">Welcome, {user?.userName} 👋</span>
                {/* Right content (Dashboard / Reports etc.) */}
                <div className="flex-grow-1 p-4">
                    <Outlet />
                </div>
            </div>
        </Base>
    );
};

export default AdminLayout;
