import React from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <div className="flex flex-col items-center animate-fade-in">
        <span className="mb-4">
          <AlertTriangle
            size={60}
            className="text-red-500 drop-shadow-lg animate-bounce"
          />
        </span>
        <h1 className="text-8xl font-extrabold text-slate-600 mb-2 tracking-tight drop-shadow">
          404
        </h1>
        <h2 className="text-2xl font-extrabold mb-2 text-slate-800 tracking-wide">
          Page Not Found
        </h2>
        <p className="mb-8 text-slate-500 text-center max-w-md text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button
          className="cursor-pointer px-8 py-3 text-base font-extrabold rounded-full shadow-md hover:scale-110 transition-transform duration-200"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </div>
  );
};

export default NotFound;
