import { useState } from "react";
import { addDoctor } from "../../api/doctorApi";
import { toast } from "react-toastify";

export default function AddDoctor() {
  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    phone: "",
  });

  const update = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addDoctor(doctor);
      toast.success(response.data.message);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add Doctor");
    }
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
            <input type="text" name="name" value={doctor.name} onChange={update} placeholder="Dr. John Doe"
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">Specialization</label>
            <input type="text" name="specialization" value={doctor.specialization} onChange={update}
              placeholder="Cardiologist"
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">Experience (Years)</label>
            <input type="number" name="experience" value={doctor.experience}onChange={update}placeholder="5"
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold">Contact Number</label>
            <input type="text" name="phone" value={doctor.phone} onChange={update}placeholder="+91 9876543210"
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button type="submit"
            className="w-full h-12 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
}
