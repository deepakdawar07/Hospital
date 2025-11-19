import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home"; // ← scrollable banner yahan hai
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
