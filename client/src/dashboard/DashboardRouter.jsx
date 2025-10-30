import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

const DashboardRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>} />
      </Routes>
    </div>
  );
};

export default DashboardRouter;
