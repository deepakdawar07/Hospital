import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Activity } from "lucide-react";

export default function About() {
  return (
    <div className="p-6 md:p-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* Title Section */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-blue-700 drop-shadow mb-12"
      >
        <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">About Sunrise Multi-Speciality Hospital</h1>
      </motion.h1>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/90 backdrop-blur-md border border-blue-100 shadow-xl rounded-3xl p-10 mb-16 hover:shadow-2xl transition duration-300"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Sunrise Multi-Speciality Hospital ek cutting-edge healthcare center hai jaha
          state-of-the-art medical technology, highly experienced specialists aur
          compassionate care aapko ek safe aur comfortable experience provide karti hai.
          Hum internationally standardized treatment, modern infrastructure aur quick
          patient services ke liye jane jaate hain.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-3xl p-10 border-l-4 border-blue-500 hover:shadow-2xl transition duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            High-quality, transparent aur compassionate healthcare ko har patient tak
            pahunchana — jaha treatment fast, accurate aur patient-friendly ho.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-lg rounded-3xl p-10 border-l-4 border-green-500 hover:shadow-2xl transition duration-300"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-3">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            India ka leading multi-speciality hospital banna— jaha *world‑class diagnostics*, *advanced technology* aur *global medical standards* ek saath seamlessly work karein. Hum technology‑driven healthcare ko **human touch** ke saath balance karte hain, taki patient ko premium aur trustworthy experience mil sake.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mb-16">
        {[
          {
            title: "Experienced Doctors",
            desc: "80+ specialist doctors providing expert medical care.",
            icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
          },
          {
            title: "Advanced Technology",
            desc: "MRI, CT-Scan, Digital X-Ray, Modular OTs & fully equipped ICU.",
            icon: <Activity className="w-12 h-12 text-green-600" />,
          },
          {
            title: "24×7 Emergency Care",
            desc: "Ambulance support, trauma care & rapid response emergency team.",
            icon: <HeartPulse className="w-12 h-12 text-red-600" />,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-xl flex flex-col items-center gap-4 hover:shadow-2xl transition duration-300 border-t-4 border-blue-400"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-center text-md">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
        Our Hospital at a Glance
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {["150+ Beds", "12+ Departments", "80+ Doctors", "300-400 Daily Patients"].map(
          (item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition duration-300 border"
            >
              <h3 className="text-4xl font-bold text-blue-700 mb-2">
                {item.split(" ")[0]}
              </h3>
              <p className="text-gray-700 text-lg font-medium">
                {item.split(" ").slice(1).join(" ")}
              </p>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
