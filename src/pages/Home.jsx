// src/pages/Test.jsx
import React from "react";
import ScrollableImages from "../components/ScrollableImages";
import DepartmentsList from "./Department/DepartmentList";
import About from "./About";
import Footer from "../components/Footer";

export default function Home() {
  const images = [
    "/HomeImage/hospital1.jpg",
    "/HomeImage/hospital2.jpg",
    "/HomeImage/hospital3.jpg",
    "/HomeImage/hospital4.jpg",
  ];

  return (
    <div className="p-4">
      {/* Scrollable banner */}
      <ScrollableImages images={images} />

      <DepartmentsList />
      <About/>
    </div>
  );
}
