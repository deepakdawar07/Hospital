import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";

export default function AddAppointment() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    time: "",
    status: "Pending",
  });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/api/appointments", form);
    navigate("/appointments");
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="bg-white/80 backdrop-blur-xl shadow-2xl p-8 rounded-3xl w-full max-w-xl border border-blue-100">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Add Appointment
        </h1>

        <form onSubmit={submit} className="space-y-5">

          <div>
            <label className="font-medium">Patient Name</label>
            <input
              name="patientName"
              onChange={update}
              className="w-full border p-2 rounded-xl mt-1 bg-gray-50"
              required
            />
          </div>

          <div>
            <label className="font-medium">Doctor Name</label>
            <input
              name="doctorName"
              onChange={update}
              className="w-full border p-2 rounded-xl mt-1 bg-gray-50"
              required
            />
          </div>

          <div>
            <label className="font-medium">Date</label>
            <input
              type="date"
              name="date"
              onChange={update}
              className="w-full border p-2 rounded-xl mt-1 bg-gray-50"
              required
            />
          </div>

          <div>
            <label className="font-medium">Time</label>
            <input
              type="time"
              name="time"
              onChange={update}
              className="w-full border p-2 rounded-xl mt-1 bg-gray-50"
              required
            />
          </div>

          <button
            className="w-full py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition text-lg font-semibold"
          >
            Save Appointment
          </button>

        </form>
      </div>
    </div>
  );
}
