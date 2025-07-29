import React from "react";
import Signup from "./Signup";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import Signin from "./Signin";

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="h-screen relative ">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="backdrop-blur-md bg-white bg-opacity-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 shadow-xl shadow-white border border-white border-opacity-30 ">
          <h1 className="text-5xl font-extrabold pb-9">CryptoVerse</h1>
          {location.pathname === "/signup" ? (
            <section className="w-[80%] ">
              <Signup />
              <div className="flex items-center justify-center">
                <span>Already have an account?</span>
                <Button
                  variant="ghost"
                  onClick={() => navigate("/signin")}
                  className="ml-2 font-extrabold"
                >
                  Sign In
                </Button>
              </div>
            </section>
          ) : location.pathname === "/forgot-password" ? (
            <section className="w-[80%] ">
              <ForgotPassword />
              <div className="flex items-center justify-center">
                <span>Back to login</span>
                <Button
                  variant="ghost"
                  onClick={() => navigate("/signin")}
                  className="ml-2 font-extrabold"
                >
                  Sign In
                </Button>
              </div>
            </section>
          ) : (
            <section className="w-[80%] ">
              <Signin />
              <div className="flex items-center justify-center">
                <span>Don't have account?</span>
                <Button
                  variant="ghost"
                  onClick={() => navigate("/signup")}
                  className="ml-2 font-extrabold"
                >
                  Sign Up
                </Button>
              </div>

              <div className="flex items-center justify-center mt-5">
                <Button
                  variant="outline"
                  onClick={() => navigate("/forgot-password")}
                  className="ml-1 w-[80%] font-extrabold  py-5 bg-gray-700 text-white hover:bg-gray-700"
                >
                  Forgot Password?
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
