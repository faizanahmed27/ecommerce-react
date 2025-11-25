// Reports.js
import React from "react";
import { Outlet } from "react-router-dom";

const Reports = () => {
  return (
    
    <div className="p-4">
      <h2>Reports Page</h2>
      <p>This is where you can show analytics, charts, or tables.</p>
       <Outlet />   {/* REQUIRED for nested routes */}
    </div>
    
  );
};

export default Reports;
