import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

// Layout.jsx (Modified to use less top padding)

// ... imports

export default function Layout() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Main content area */}
      <div className="flex flex-1 pt-16">


        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>

      </div>

      {/* Footer */}
      <footer className="bg-white shadow-inner p-4 text-center mt-auto">
        <p className="text-gray-600">&copy; 2025 YourShop. All rights reserved.</p>
      </footer>

    </div>
  );
}