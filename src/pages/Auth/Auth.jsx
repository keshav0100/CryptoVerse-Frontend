import React from "react";
import { Outlet } from "react-router-dom";

/**
 * Clean wrapper without any background.
 * Keep this if you want a neutral layout elsewhere.
 */
const Auth = () => {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
};

export default Auth;
