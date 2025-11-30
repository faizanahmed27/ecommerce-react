import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard, MdBarChart, MdShoppingBag, MdMenu
} from "react-icons/md";

const AdminSidebar = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="btn d-md-none m-2 position-fixed"
        onClick={() => setOpen(!open)}
        style={{ zIndex: 999 }}
      >
        <MdMenu size={28} />
      </button>

      {/* Sidebar */}
      <div
  className={`admin-sidebar bg-white d-flex flex-column p-3 shadow-lg ${
    open ? "d-block" : "d-none d-md-block"
  }`}
  style={{ width: "250px", minHeight: "100vh" }}
>
        {/* Header */}
        <div
          className="text-center py-3 mb-4 rounded-3 text-white fw-bold"
          style={{
            background: "linear-gradient(135deg, #4b79a1, #283e51)",
            fontSize: "18px",
          }}
        >
          My Dashboard
        </div>

        {/* Nav Items */}
        <nav>
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => isActive ? "side-item side-active" : "side-item"}
          >
            <MdDashboard size={22} /> <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/reports"
            className={({ isActive }) => isActive ? "side-item side-active" : "side-item"}
          >
            <MdBarChart size={22} /> <span>Reports</span>
          </NavLink>

          <NavLink
            to="/admin/demoProducts"
            className={({ isActive }) => isActive ? "side-item side-active" : "side-item"}
          >
            <MdShoppingBag size={22} /> <span>Products</span>
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="mt-auto text-center text-muted small">
          © 2025 Admin Panel
        </div>
      </div>

      {/* Embedded Style */}
      <style>{`
        .side-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          margin-bottom: 10px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 500;
          color: #444;
          transition: 0.2s;
        }

        .side-item:hover {
          background: #f5f7fa;
          color: #283e51;
          transform: translateX(4px);
        }

        .side-active {
          background: #e3ebf2;
          color: #1d3557;
          font-weight: 700;
          border-left: 4px solid #4b79a1;
        }

        nav {
          position: relative;
        }
      `}</style>
    </>
  );
};

export default AdminSidebar;
