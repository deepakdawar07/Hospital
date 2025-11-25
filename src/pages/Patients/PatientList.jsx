import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    try {
      const res = await api.get("/api/patients");
      setPatients(res.data);
    } catch (err) {
      toast.error("Failed to load patients");
    }
  };

  const deletePatient = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await api.delete(`/api/patients/${id}`);
      toast.success("Patient deleted");
      loadPatients();
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  const filtered = patients.filter((p) =>
    p.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-blue-700">Patient Management</h1>

        <Link
          to="/patients/add"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          <FaPlus /> Add New Patient
        </Link>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search patients..."
          className="w-full md:w-72 px-4 py-2 border rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
       <table className="w-full min-w-[700px] text-left border border-gray-300">
  <thead className="bg-blue-600 text-white">
    <tr>
      <th className="p-3 border border-gray-300">Name</th>
      <th className="p-3 border border-gray-300">Age</th>
      <th className="p-3 border border-gray-300">Gender</th>
      <th className="p-3 border border-gray-300">Phone</th>
      <th className="p-3 border border-gray-300">Address</th>
      <th className="p-3 border border-gray-300">Actions</th>
    </tr>
  </thead>
  <tbody>
    {filtered.length > 0 ? (
      filtered.map((p) => (
        <tr key={p.id} className="hover:bg-blue-50 transition-all duration-200">
          <td className="p-3 border border-gray-300">{p.fullName}</td>
          <td className="p-3 border border-gray-300">{p.age}</td>
          <td className="p-3 border border-gray-300">{p.gender}</td>
          <td className="p-3 border border-gray-300">{p.mobileNo}</td>
          <td className="p-3 border border-gray-300 max-w-xs break-words">
            {p.address
              ? `${p.address.street}, ${p.address.city}, ${p.address.state} - ${p.address.pinCode}`
              : ""}
          </td>
          <td className="p-4 border border-gray-300 flex gap-3">
            <Link
              to={`/patients/edit/${p.id}`}
              className="text-green-600 hover:text-green-800"
            >
              <FaEdit size={18} />
            </Link> 
            <button
              onClick={() => deletePatient(p.id)}
              className="text-red-600 hover:text-red-800"
            >
              <FaTrash size={18} />
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td
          className="p-3 text-center text-gray-500 border border-gray-300"
          colSpan="6"
        >
          No patients found
        </td>
      </tr>
    )}
  </tbody>
</table>

      </div>
    </div>
  );
}
