import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Test from "./pages/Test";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Test />} />
      </Route>
    </Routes>
  );
}
