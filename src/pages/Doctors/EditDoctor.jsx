import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getDoctorById, updateDoctor } from "../../api/doctorApi";

export default function EditDoctor() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    experience: "",
    phone: "",
  });

  const [loading, setLoading] = useState(true);

  const update = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await getDoctorById(id);
        setDoctor(res.data.data);
      } catch (err) {
        toast.error(err.response?.data?.message || "Failed to load doctor");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedDoctor = {
      ...doctor,
      experience: Number(doctor.experience),
    };

    console.log("Sending Doctor Data:", updatedDoctor);

    try {
      const res = await updateDoctor(id, updatedDoctor);
      toast.success(res.data.message);
      navigate("/doctors");
    } catch (err) {
      console.log("Update Error:", err.response);
      toast.error(err.response?.data?.message || "Update failed");
    }
  };

  if (loading)
    return (
      <p className="p-6 text-center text-lg font-semibold text-gray-600">
        Loading...
      </p>
    );

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
              name="name"
              value={doctor.name}
              onChange={update}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 
                        focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Specialization</label>
            <input
              type="text"
              name="specialization"
              value={doctor.specialization}
              onChange={update}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 
                        focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Experience (Years)</label>
            <input
              type="number"
              name="experience"
              value={doctor.experience}
              onChange={update}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 
                        focus:ring-2 focus:ring-purple-500 outline-none"
              min={0}
              required
            />
          </div>

          <div>
            <label className="font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={doctor.phone}
              onChange={update}
              className="w-full h-12 px-4 rounded-xl border border-gray-300 bg-gray-50 
                        focus:ring-2 focus:ring-purple-500 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-purple-600 text-white font-semibold 
                       hover:bg-purple-700 transition shadow-lg"
          >
            Update Doctor
          </button>
        </form>
      </div>
    </div>
  );
}
