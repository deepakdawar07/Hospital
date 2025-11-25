import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig"; // your axios instance
import { 
  FaUserInjured, 
  FaUserMd, 
  FaCalendarCheck, 
  FaRupeeSign 
} from "react-icons/fa";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  // ---- STATE FROM BACKEND ----
  const [stats, setStats] = useState({
    patients: 0,
    newPatientsToday: 0,
    doctors: 0,
    newDoctors: 0,
    appointments: 0,
    peakHours: "",
    revenue: "",
    revenueGrowth: "",
  });

  const [weeklyFlow, setWeeklyFlow] = useState([]);
  const [bedStatus, setBedStatus] = useState({
    general: 0,
    icu: 0,
    oxygen: 0,
  });

  const [recentAppointments, setRecentAppointments] = useState([]);

  // ---- FETCH ALL DATA ----
  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const statsRes = await api.get("/api/dashboard/stats");
      const weeklyRes = await api.get("/api/dashboard/weekly-flow");
      const bedRes = await api.get("/api/dashboard/bed-status");
      const appointmentRes = await api.get("/api/dashboard/recent-appointments");

      setStats(statsRes.data);
      setWeeklyFlow(weeklyRes.data);
      setBedStatus(bedRes.data);
      setRecentAppointments(appointmentRes.data);

    } catch (error) {
      console.error("Dashboard fetch error:", error);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">

        {/* HEADER */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Hospital Dashboard</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Sunrise Multi-Speciality Hospital – Live Overview
            </p>
          </div>

          {/* Light / Dark Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 px-3 py-2 rounded-full 
            border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 
            shadow-sm hover:shadow-md transition"
          >
            {darkMode ? (
              <>
                <BsSunFill className="text-yellow-400" />
                <span className="text-sm">Light Mode</span>
              </>
            ) : (
              <>
                <BsMoonStarsFill className="text-slate-800" />
                <span className="text-sm">Dark Mode</span>
              </>
            )}
          </button>
        </header>

        {/* MAIN CONTENT */}
        <main className="px-6 py-6 space-y-8">

          {/* TOP CARDS */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Patients */}
            <DashboardCard
              title="Total Patients"
              value={stats.patients}
              change={`+${stats.newPatientsToday} today`}
              icon={<FaUserInjured className="text-blue-600 dark:text-blue-300 text-xl" />}
              color="bg-blue-100 dark:bg-blue-900"
            />

            {/* Doctors */}
            <DashboardCard
              title="Active Doctors"
              value={stats.doctors}
              change={`+${stats.newDoctors} this week`}
              icon={<FaUserMd className="text-purple-600 dark:text-purple-300 text-xl" />}
              color="bg-purple-100 dark:bg-purple-900"
            />

            {/* Appointments */}
            <DashboardCard
              title="Today's Appointments"
              value={stats.appointments}
              change={`Peak: ${stats.peakHours}`}
              icon={<FaCalendarCheck className="text-emerald-600 dark:text-emerald-300 text-xl" />}
              color="bg-emerald-100 dark:bg-emerald-900"
            />

            {/* Revenue */}
            <DashboardCard
              title="Today's Revenue"
              value={`₹ ${stats.revenue}`}
              change={`${stats.revenueGrowth}% vs yesterday`}
              icon={<FaRupeeSign className="text-orange-600 dark:text-orange-300 text-xl" />}
              color="bg-orange-100 dark:bg-orange-900"
            />
          </section>

          {/* MIDDLE SECTION */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Weekly Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Weekly Patient Flow</h3>

              <div className="flex items-end gap-3 h-40">
                {weeklyFlow.map((item, i) => (
                  <div key={i} className="flex flex-col items-center justify-end flex-1">
                    <div
                      className="w-full rounded-t-xl bg-gradient-to-t from-blue-500 to-indigo-400 
                      dark:from-blue-400 dark:to-cyan-300 transition-all"
                      style={{ height: `${item.value}%` }}
                    ></div>
                    <span className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                      {item.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bed Status */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6 space-y-4">
              <h3 className="text-lg font-semibold mb-2">Bed & ICU Status</h3>

              <BedStatusBar label="General Ward" percent={bedStatus.general} />
              <BedStatusBar label="ICU" percent={bedStatus.icu} />
              <BedStatusBar label="Oxygen Beds" percent={bedStatus.oxygen} />
            </div>
          </section>

          {/* RECENT APPOINTMENTS */}
          <section className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Appointments</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-slate-200 dark:border-slate-700">
                    <th className="py-2">Patient</th>
                    <th className="py-2">Doctor</th>
                    <th className="py-2">Department</th>
                    <th className="py-2">Time</th>
                    <th className="py-2 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">

                  {recentAppointments.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/60">
                      <td className="py-2">{row.patient}</td>
                      <td className="py-2">{row.doctor}</td>
                      <td className="py-2">{row.department}</td>
                      <td className="py-2">{row.time}</td>
                      <td className="py-2 text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${row.color}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

/* ------------------- REUSABLE SMALL COMPONENTS ------------------- */

function DashboardCard({ title, value, change, icon, color }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md p-5 flex items-center justify-between hover:shadow-xl transition">
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
        <h2 className="text-2xl font-bold mt-1">{value}</h2>
        <p className="text-xs text-emerald-500 mt-1">{change}</p>
      </div>
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center`}>
        {icon}
      </div>
    </div>
  );
}

function BedStatusBar({ label, percent }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span className="text-slate-500 dark:text-slate-400">{percent}% occupied</span>
      </div>
      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-green-400"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
