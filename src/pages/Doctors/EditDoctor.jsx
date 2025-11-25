import { useState, useEffect } from "react";

export default function EditDoctor() {
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    phone: "",
  });

  useEffect(() => {
    // Dummy initial data
    setDoctor({
      name: "Dr. Aditi Sharma",
      specialization: "Dermatologist",
      experience: "7",
      phone: "+91 9012345678",
    });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated:", doctor);
    alert("Doctor Updated!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-6 flex justify-center">
      <div className="w-full max-w-xl mt-10 bg-white/70 backdrop-blur-xl shadow-2xl border border-white/40 rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Edit Doctor
        </h2>

        <form onSubmit={handleUpdate} className="space-y-5">

          <div>
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              value={doctor.name}
              onChange={(e) =>
                setDoctor({ ...doctor, name: e.target.value })
              }
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
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
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
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
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">Phone Number</label>
            <input
              type="text"
              value={doctor.phone}
              onChange={(e) =>
                setDoctor({ ...doctor, phone: e.target.value })
              }
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition shadow-lg"
          >
            Update Doctor
          </button>

        </form>
      </div>
    </div>
  );
}
