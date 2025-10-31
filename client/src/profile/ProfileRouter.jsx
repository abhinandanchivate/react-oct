import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import CreateProfile from "./rtk/components/CreateProfile";

const ProfileRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/create-profile" element={<CreateProfile />}></Route>
      </Routes>
    </div>
  );
};

export default ProfileRouter;
