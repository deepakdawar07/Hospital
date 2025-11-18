import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1">

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="p-6 overflow-auto mt-20">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
