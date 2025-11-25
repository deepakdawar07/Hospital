import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/axiosConfig";
import { FaPlus, FaEdit, FaTrash, FaCalendarAlt } from "react-icons/fa";

export default function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const res = await api.get("/api/appointments");
      setAppointments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteAppointment = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await api.delete(`/api/appointments/${id}`);
      loadAppointments();
    } catch (err) {
      console.log(err);
    }
  };

  const filtered = appointments.filter((a) =>
    a.patientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Appointment Management</h1>

        <div className="flex gap-4">
          <Link
            to="/appointments/add"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            <FaPlus /> Add Appointment
          </Link>

          <Link
            to="/appointments/calendar"
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-xl shadow hover:bg-purple-700 transition"
          >
            <FaCalendarAlt /> Calendar View
          </Link>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search appointments..."
          className="w-full md:w-72 px-4 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="w-full text-left">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              filtered.map((a) => (
                <tr key={a.id} className="border-b hover:bg-blue-50 transition">
                  <td className="p-3">{a.patientName}</td>
                  <td className="p-3">{a.doctorName}</td>
                  <td className="p-3">{a.date}</td>
                  <td className="p-3">{a.time}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        a.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : a.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>

                  <td className="p-3 flex gap-3">
                    <Link
                      to={`/appointments/edit/${a.id}`}
                      className="text-green-600 hover:text-green-800"
                    >
                      <FaEdit size={18} />
                    </Link>

                    <button
                      onClick={() => deleteAppointment(a.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 text-center text-gray-500" colSpan="6">
                  No appointments found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
