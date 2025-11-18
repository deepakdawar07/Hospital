import { useState } from "react";
import { FaBell, FaUserCircle, FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-deepBlue shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/dashboard" className="text-3xl font-mullish font-extrabold text-white tracking-wide">
          CarePlus
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-mullish text-base">
          
          <li className="relative group py-7">
            <Link to="/dashboard" className="hover:text-lightBlue transition-all">
              Dashboard
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-lightBlue hidden group-hover:block"></div>
          </li>

          <li className="relative group py-7">
            <Link to="/patients" className="hover:text-lightBlue transition-all">
              Patients
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-lightBlue hidden group-hover:block"></div>
          </li>

          <li className="relative group py-7">
            <Link to="/doctors" className="hover:text-lightBlue transition-all">
              Doctors
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-lightBlue hidden group-hover:block"></div>
          </li>

          <li className="relative group py-7">
            <Link to="/appointments" className="hover:text-lightBlue transition-all">
              Appointments
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-lightBlue hidden group-hover:block"></div>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white/10 px-3 py-1 rounded-full border border-white/20">
          <FaSearch className="text-white mr-2 text-sm" />
          <input
            placeholder="Search..."
            className="bg-transparent text-white placeholder-white/70 outline-none text-sm font-mullish"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-white text-2xl">

          {/* Notifications */}
          <div className="relative">
            <FaBell
              className="cursor-pointer"
              onClick={() => {
                setNotifOpen(!notifOpen);
                setProfileOpen(false);
              }}
            />
            {notifOpen && (
              <div className="absolute right-0 mt-2 bg-deepBlue p-4 w-60 rounded-xl shadow-xl border border-white/20 text-white text-sm">
                No new notifications
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <FaUserCircle
              className="cursor-pointer"
              onClick={() => {
                setProfileOpen(!profileOpen);
                setNotifOpen(false);
              }}
            />
            {profileOpen && (
              <div className="absolute right-0 mt-3 bg-deepBlue p-4 rounded-xl w-44 shadow-xl border border-white/20 text-white">
                <Link to="/profile" className="block py-1">Profile</Link>
                <Link to="/settings" className="block py-1">Settings</Link>
                <button className="block py-1 w-full text-left text-red-300">Logout</button>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <FaBars
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-deepBlue text-white text-lg px-6 py-5 space-y-5 border-t border-white/20">
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link><br />
          <Link to="/patients" onClick={() => setMenuOpen(false)}>Patients</Link><br />
          <Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link><br />
          <Link to="/appointments" onClick={() => setMenuOpen(false)}>Appointments</Link><br />
        </div>
      )}
    </div>
  );
}
