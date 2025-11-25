import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import { Link,  useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";   // <-- AUTH CONTEXT

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const location = useLocation();
  const navigate = useNavigate();
  const { admin, faculty } = useAuth();  // <-- admin/faculty logged-in data

  // MENU ITEMS
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

  // CLICK HANDLER – ADMIN
  const handleAdminClick = () => {
    if (admin) {
      navigate("/admin/home");
    } else {
      navigate("/admin/login");
    }
  };

  // CLICK HANDLER – FACULTY
  const handleFacultyClick = () => {
    if (faculty) {
      navigate("/faculty/home");
    } else {
      navigate("/faculty/login");
    }
  };

  return (
    <nav className="bg-white shadow-xl fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600">
            Sunrise Multi-Speciality Hospital
          </h1>
        </Link>

        {/* MAIN MENU */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-600">
          {menuItems.map((item, index) => (
            <li key={index} className="group relative cursor-pointer">
              <Link
                to={item.to}
                className="hover:text-blue-600 transition duration-200"
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
        </ul>

        {/* RIGHT SIDE ICONS */}
        <div className="hidden md:flex items-center gap-6">

          <div
          className="flex items-center bg-gray-100 px-3 py-1 rounded-full border 
          border-gray-300 transition-all duration-300 
          focus-within:border-blue-500 focus-within:shadow-[0_0_6px_2px_rgba(59,130,246,0.6)]"
        >
          <FaSearch className="text-gray-500 mr-2" />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-700 w-36"
          />
        </div>


          {/* NOTIFICATION */}
          <div className="relative group">
            <FaBell className="text-blue-600 text-xl cursor-pointer hover:text-blue-800" />
            <span className="absolute right-0 top-8 w-max bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 shadow-lg">
              No new notifications
            </span>
          </div>

          {/* PROFILE MENU */}
          <div className="relative group">
            <FaUserCircle className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />

            <div
              className="absolute right-0 mt-3 w-48 bg-white shadow-xl rounded-xl opacity-0 invisible
              group-hover:opacity-100 group-hover:visible transition-all duration-300 p-3"
            >
              {/* ONLY 2 OPTIONS */}
              <button
                onClick={handleAdminClick}
                className="block w-full text-left px-3 py-2 hover:bg-blue-50 rounded-lg"
              >
                Admin
              </button>

              <button
                onClick={handleFacultyClick}
                className="block w-full text-left px-3 py-2 hover:bg-blue-50 rounded-lg"
              >
                Faculty
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden flex items-center gap-4 text-blue-600">
          <FaBell className="text-2xl" />
          <FaUserCircle className="text-3xl" />
          <button className="text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium text-gray-700">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}

          <li>
            <button
              onClick={handleAdminClick}
              className="block w-full text-left px-2 py-2 hover:bg-blue-50 rounded-lg"
            >
              Admin
            </button>
          </li>

          <li>
            <button
              onClick={handleFacultyClick}
              className="block w-full text-left px-2 py-2 hover:bg-blue-50 rounded-lg"
            >
              Faculty
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
