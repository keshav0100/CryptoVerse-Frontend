import {
  ActivityIcon,
  BookMarkedIcon,
  CreditCardIcon,
  HomeIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
  User,
  UserIcon,
  WalletIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import {
  DashboardIcon,
  ExitFullScreenIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "@/State/Auth/Action";

const menu = [
  { name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: <LayoutDashboardIcon className="h-6 w-6" />,
  },
  {
    name: "Watchlist",
    path: "/watchlist",
    icon: <BookMarkedIcon className="h-6 w-6" />,
  },
  {
    name: "Activity",
    path: "/activity",
    icon: <ActivityIcon className="h-6 w-6" />,
  },
  {
    name: "Wallet",
    path: "/wallet",
    icon: <WalletIcon className="h-6 w-6" />,
  },
  {
    name: "Payment Details",
    path: "/payment-details",
    icon: <LandmarkIcon className="h-6 w-6" />,
  },
  {
    name: "Withdrawal",
    path: "/withdrawal",
    icon: <CreditCardIcon className="h-6 w-6" />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <UserIcon className="h-6 w-6" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <ExitIcon className="h-6 w-6" />,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const handleNavigation = (path) => {}
  const handleLogout = () => {
    dispatch(logout());
  }
  return (
    <div className="mt-10 space-y-5 px-4">
      {menu.map((item) => (
        <div key={item.name}>
          <SheetClose className="w-full" asChild>
            <Button
              variant="outline"
              onClick={() => {
                navigate(item.path);
                if (item.name === "Logout") {
                  handleLogout();
                }
              }}
              className="flex items-center gap-2 py-5 w-56 bg-white text-black cursor-pointer shadow-sm border border-gray-200 hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-110 rounded-xl hover:shadow-lg"
            >
              <span className="w-8">{item.icon}</span>
              <p className="font-extrabold">{item.name}</p>
            </Button>
          </SheetClose>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
