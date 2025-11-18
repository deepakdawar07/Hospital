import { FaBell, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      to: "/dashboard",
      label: "Dashboard",
      gradient: "from-blue-400 via-blue-600 to-blue-800",
      glow: "shadow-[0_0_8px_rgba(59,130,246,0.8)]",
    },
    {
      to: "/patients",
      label: "Patients",
      gradient: "from-purple-400 via-purple-600 to-purple-800",
      glow: "shadow-[0_0_8px_rgba(147,51,234,0.8)]",
    },
    {
      to: "/doctors",
      label: "Doctors",
      gradient: "from-green-400 via-green-600 to-green-800",
      glow: "shadow-[0_0_8px_rgba(34,197,94,0.8)]",
    },
    {
      to: "/appointments",
      label: "Appointments",
      gradient: "from-pink-400 via-pink-600 to-pink-800",
      glow: "shadow-[0_0_8px_rgba(236,72,153,0.8)]",
    },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-blue-600">CarePlus Hospital</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-600">
          {menuItems.map((item, index) => (
            <li key={index} className="group relative cursor-pointer">
              <Link to={item.to} className="hover:text-blue-600 transition duration-200">
                {item.label}
              </Link>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 
                bg-gradient-to-r ${item.gradient}
                opacity-0 group-hover:w-full group-hover:opacity-100
                transition-all duration-500 ease-out rounded-full ${item.glow}`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6 text-blue-600 text-xl">
          <div className="relative group">
            <FaBell className="cursor-pointer hover:text-blue-800 duration-200" />
            <span className="absolute right-0 top-8 w-max bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
              No new notifications
            </span>
          </div>

          <FaUserCircle className="cursor-pointer hover:text-blue-800 duration-200" />
        </div>

        {/* Mobile button */}
        <button className="md:hidden text-3xl text-blue-600" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium text-gray-700">

          {menuItems.map((item, index) => (
            <li key={index} className="group relative pb-1 cursor-pointer">
              <Link
                to={item.to}
                className="block hover:text-blue-600 transition duration-200"
              >
                {item.label}
              </Link>

              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 
                bg-gradient-to-r ${item.gradient}
                opacity-0 group-hover:w-full group-hover:opacity-100
                transition-all duration-500 ease-out rounded-full ${item.glow}`}
              ></span>
            </li>
          ))}

          {/* Mobile Icons */}
          <div className="flex items-center gap-6 text-blue-600 text-xl pt-3">
            <div className="relative group">
              <FaBell className="cursor-pointer hover:text-blue-800 duration-200" />
              <span className="absolute left-10 top-1 w-max bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
                No new notifications
              </span>
            </div>

            <FaUserCircle className="cursor-pointer hover:text-blue-800 duration-200" />
          </div>
        </ul>
      )}
    </nav>
  );
}
