import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPatient } from "../../api/patientApi";
import { toast } from "react-toastify";

export default function AddPatient() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    age: "",
    gender: "",
    mobileNo: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await addPatient(form);
      toast.success(response.data.message);
      navigate("/patients");
    } catch (err) {
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-2xl mt-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        Add New Patient
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={submitForm}>
        
        <input
          name="fullName"
          value={form.fullName}
          placeholder="Full Name"
          onChange={update}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="age"
          type="number"
          value={form.age}
          placeholder="Age"
          onChange={update}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <select
          name="gender"
          value={form.gender}
          onChange={update}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          name="mobileNo"
          value={form.mobileNo}
          placeholder="Mobile Number"
          onChange={update}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="street"
          value={form.street}
          placeholder="Street"
          onChange={update}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="city"
          value={form.city}
          placeholder="City"
          onChange={update}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="state"
          value={form.state}
          placeholder="State"
          onChange={update}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="pincode"
          value={form.pincode}
          placeholder="Pin Code"
          onChange={update}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          disabled={loading}
          className="col-span-1 md:col-span-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>
    </div>
  );
}
