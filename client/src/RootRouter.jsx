import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthRouter from "./auth/AuthRouter";
import Landing from "./core/components/layouts/Landing";
import DashboardRouter from "./dashboard/DashboardRouter";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/dashboard/*" element={<DashboardRouter />} />
      </Routes>
    </>
  );
  // rootarouter will actaivaTE UR specific router
  // specific router to the module will render the specific component depending on the path.

  // /auth/login ==> authrouter ==> login component
};

export default RootRouter;
