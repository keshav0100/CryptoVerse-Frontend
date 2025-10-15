import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Auth1 = () => {
  // ✅ Add background class on mount, remove on unmount — prevents leak
  useEffect(() => {
    document.body.classList.add("has-auth-bg");
    return () => document.body.classList.remove("has-auth-bg");
  }, []);

  return (
    <div className="min-h-screen flex items-start justify-center px-4">
      <div
        className="relative w-full max-w-md p-8 text-white rounded-xl
                   backdrop-blur-xl bg-gradient-to-b from-transparent via-black/20 to-black/30"
        style={{ marginTop: "130px" }} // ✅ Push form down to show image text behind
      >

        <Outlet />
      </div>
    </div>
  );
};

export default Auth1;
