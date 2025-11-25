import { useState } from "react";

export default function AddDoctor() {
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Added:", doctor);
    alert("Doctor Added Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex justify-center">
      <div className="w-full max-w-xl mt-10 bg-white/70 backdrop-blur-xl shadow-2xl border border-white/40 rounded-2xl p-8">
        
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Add New Doctor
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              value={doctor.name}
              onChange={(e) =>
                setDoctor({ ...doctor, name: e.target.value })
              }
              placeholder="Dr. John Doe"
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">Specialization</label>
            <input
              type="text"
              value={doctor.specialization}
              onChange={(e) =>
                setDoctor({ ...doctor, specialization: e.target.value })
              }
              placeholder="Cardiologist"
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">Experience (Years)</label>
            <input
              type="number"
              value={doctor.experience}
              onChange={(e) =>
                setDoctor({ ...doctor, experience: e.target.value })
              }
              placeholder="5"
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">Contact Number</label>
            <input
              type="text"
              value={doctor.phone}
              onChange={(e) =>
                setDoctor({ ...doctor, phone: e.target.value })
              }
              placeholder="+91 9876543210"
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
}
