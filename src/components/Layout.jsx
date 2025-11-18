import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

// Layout.jsx (Modified to use less top padding)

// ... imports

export default function Layout() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      {/* Content pushed down below fixed navbar (pt-16 is often enough for h-16 navbar) */}
      <div className="pt-16 flex"> 
        {/* ... rest of your layout code */}
        {/* <div className="hidden md:block ">
          <Sidebar />
        </div> */}

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
}