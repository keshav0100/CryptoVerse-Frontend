import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Navbar from "./pages/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Activity from "./pages/Activity/Activity";
import Wallet from "./pages/Wallet/Wallet";
import Withdrawal from "./pages/Withdrawal/Withdrawal";
import PaymentDetails from "./pages/Payment Details/PaymentDetails";
import StockDetails from "./pages/Stock Details/StockDetails";
import Watchlist from "./pages/Watchlist/Watchlist";
import Profile from "./pages/Profile/Profile";
import SearchCoin from "./pages/Search Coin/SearchCoin";
import NotFound from "./pages/NotFound/NotFound";

import Auth1 from "./pages/Auth/Auth1"; // 🔵 auth layout with background
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";

import { getUser } from "./State/Auth/Action";

/* ---------- Layouts ---------- */

// Logged-in app (NO background image)
function ProtectedLayout() {
  const { auth } = useSelector((s) => s);
  if (!auth?.user) return <Navigate to="/signin" replace />;
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

// Guests-only auth wrapper (WITH background image)
function AuthLayoutWrapper() {
  const { auth } = useSelector((s) => s);
  if (auth?.user) return <Navigate to="/" replace />;
  return <Auth1 />;
}

export default function App() {
  const { auth } = useSelector((s) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt, dispatch]);

  return (
    <>
      <Toaster position="top-right" />

      <Routes>
        {/* ===== AUTH ROUTES (background active) ===== */}
        <Route element={<AuthLayoutWrapper />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* ===== APP ROUTES (no background) ===== */}
        <Route element={<ProtectedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/market/:id" element={<StockDetails />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchCoin />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
