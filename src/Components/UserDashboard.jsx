// Reports.js
import React from "react";
import Base from "./Base";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <Base>
    <div className="p-4">
      <h2>User Dashboard</h2>
      <p>This is where you can show analytics, charts, or tables.</p>
       <Outlet />   {/* REQUIRED for nested routes */}
    </div>
    </Base>
  );
};

export default UserDashboard;
