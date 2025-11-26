import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div className="d-flex flex-column bg-light vh-100 p-3" style={{ width: "220px", minHeight: "100vh" }}>
            <h4 className="mb-4">My Dashboard</h4>
            <ul className="list-unstyled">
                <NavLink
                    to="/admin/dashboard"
                    className={({ isActive }) =>
                        "nav-link mb-2 " + (isActive ? "fw-bold text-primary" : "text-dark")
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/admin/reports"
                    className={({ isActive }) =>
                        "nav-link mb-2 " + (isActive ? "fw-bold text-primary" : "text-dark")
                    }
                >
                    Reports
                </NavLink>

                <NavLink
                    to="/admin/product"
                    className={({ isActive }) =>
                        "nav-link mb-2 " + (isActive ? "fw-bold text-primary" : "text-dark")
                    }
                >
                    Product
                </NavLink>

            </ul>
        </div>
    );
};

export default AdminSidebar;
