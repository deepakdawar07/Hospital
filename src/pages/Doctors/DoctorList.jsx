import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaUserMd, FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";
import { deleteDoctore, getAllDoctor } from "../../api/doctorApi";

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDoctors();
  }, []);

const loadDoctors = async () => {
  try {
    const res = await getAllDoctor();
    setDoctors(res.data);
  } catch (err) {
    toast.error(err.response?.data?.message || "Failed to load doctors");
  }
};


  const deleteDoctor = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const res = await deleteDoctore(id);
      toast.success(res.data.message);
      loadDoctors();
    } catch (err) {
      toast.error(err.response?.data?.message||"Delete failed");
    }
  };

  const filtered = doctors.filter((d) => {
  const query = search.toLowerCase();
  return (
    d.name.toLowerCase().includes(query) ||
    d.id.toString().includes(query)
  );
});



  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 drop-shadow-sm">
          Doctors Management
        </h1>

        <Link
          to="/doctors/add"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          <FaPlus /> Add Doctor
        </Link>
      </div>

      <div className="relative mb-6 max-w-md">
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search doctor by name..."
          className="w-full pl-10 pr-4 py-2.5 bg-white/60 backdrop-blur-lg border border-gray-300 
                    rounded-xl shadow focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((d) => (
            <div
              key={d.id}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl 
                        shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all p-6"
            >
              {/* TOP ICON + NAME */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 
                                flex items-center justify-center shadow-md">
                  <FaUserMd className="text-white text-2xl" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{d.name}</h2>
                  <p className="text-blue-600 font-medium">{d.specialization}</p>
                </div>
              </div>

              {/* DETAILS */}
              <div className="text-gray-600 mb-4">
                <p><span className="font-semibold">Phone:</span> {d.phone}</p>
                <p><span className="font-semibold">Experience:</span> {d.experience} yrs</p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex justify-end gap-4">
                <Link
                  to={`/doctors/edit/${d.id}`}
                  className="text-green-600 hover:text-green-800 hover:scale-110 transition"
                >
                  <FaEdit size={20} />
                </Link>

                <button
                  onClick={() => deleteDoctor(d.id)}
                  className="text-red-600 hover:text-red-800 hover:scale-110 transition"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3 text-lg">No doctors found</p>
        )}
      </div>
    </div>
  );
}
