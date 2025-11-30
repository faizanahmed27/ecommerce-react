import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import Base from "./Base";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Base>
  <div className="d-flex">
      {/* Sidebar takes space naturally now */}
      <div className="d-none d-md-block">
          <AdminSidebar open={open} setOpen={setOpen} />
      </div>

      {/* ✅ Main Content will never overlap sidebar on desktop */}
      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold">Welcome, {user?.userName} 👋</h4>
            {/* <button className="btn logout-btn" onClick={handleLogout}>🚪 Logout</button> */}
        </div>

        <Outlet />
      </div>
  </div>

  {/* ✅ Add this CSS to stop overlap */}
  <style>{`
    /* Desktop sidebar fixed space */
    @media (min-width: 768px) {
      .main-content {
         margin-left: 0 !important;
       }
      .admin-sidebar {
         position: relative !important;
       }
    }

    /* Mobile sidebar overlay */
    @media (max-width: 768px) {
      .admin-sidebar {
         position: absolute;
         left: 0;
         top: 0;
         z-index: 1200;
         animation: slide 0.3s ease-out;
      }

      @keyframes slide {
         from { transform: translateX(-100%); }
         to { transform: translateX(0); }
      }
    }

    .logout-btn {
        background: #1d3557;
        color: white;
        border-radius:10px;
        padding: 8px 16px;
        border:none;
        font-weight:600;
        transition:0.2s;
    }
    .logout-btn:hover {
        background:#457b9d;
        transform:scale(1.05);
    }
  `}</style>
</Base>
  );
};

export default AdminLayout;
