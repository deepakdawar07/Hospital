import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function ProtectedRoute({ allowed, children }) {
  const { user } = useAuth();
  const [showOverlay, setShowOverlay] = useState(false);

  // FULLSCREEN PREMIUM OVERLAY UI
  const Overlay = ({ message }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-lg flex flex-col justify-center items-center z-[9999] animate-fadeIn">
      <div className="bg-white/10 p-10 rounded-2xl border border-white/20 shadow-2xl text-center text-white animate-popUp">
        <div className="text-6xl mb-4 animate-pulse">🔒</div>
        <h1 className="text-2xl font-semibold mb-2">{message}</h1>
        <p className="text-sm opacity-80">Redirecting...</p>
      </div>
    </div>
  );

  // If user not logged in
  if (!user) {
    if (!showOverlay) {
      setShowOverlay(true);
      toast.error("Please login to continue!");
      setTimeout(() => {
        setShowOverlay(false);
      }, 1500);
    }
    return (
      <>
        {showOverlay && <Overlay message="Login Required" />}
        <Navigate to="/" />
      </>
    );
  }

  // If user role not allowed
  if (!allowed.includes(user.role)) {
    if (!showOverlay) {
      setShowOverlay(true);
      toast.error("Access Denied! Unauthorized Role");
      setTimeout(() => {
        setShowOverlay(false);
      }, 1500);
    }
    return (
      <>
        {showOverlay && <Overlay message="Access Denied" />}
        <Navigate to="/" />
      </>
    );
  }

  return children;
}
