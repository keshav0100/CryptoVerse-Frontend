import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
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
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { getUser } from "./State/Auth/Action";

function App() {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log("Auth State:", auth);
  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
  }, [auth.jwt]);
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          // Default options for specific types
          success: {
            style: {
              background: "#16a34a",
              color: "#ffffff",
              fontWeight: "700",
            },
          },
          error: {
            style: {
              background: "#ef4444",
              color: "#ffffff",
              fontWeight: "700",
            },
          },
        }}
      />
      {auth.user ? (
        <div>
          <Navbar />
          <Routes>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
