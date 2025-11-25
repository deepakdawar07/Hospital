import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";

export default function CalendarView() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    const res = await api.get("/api/appointments");
    setAppointments(res.data);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        Calendar View
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {appointments.map((a) => (
          <div
            key={a.id}
            className="bg-white shadow-xl rounded-2xl p-5 border-l-4 border-purple-500 hover:shadow-2xl transition"
          >
            <h2 className="text-lg font-semibold">{a.patientName}</h2>
            <p className="text-gray-600">Doctor: {a.doctorName}</p>

            <div className="mt-3 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm inline-block">
              {a.date} — {a.time}
            </div>

            <div className="mt-3">
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  a.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : a.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {a.status}
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
