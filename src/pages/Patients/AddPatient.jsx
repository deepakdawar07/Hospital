import { useState } from "react";
import api from "../../api/axiosConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
    pinCode: "",
  });

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await api.post("/api/patients", form);
      toast.success("Patient added successfully");
      navigate("/patients");
    } catch {
      toast.error("Failed to add patient");
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
          placeholder="Full Name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={update}
        />

        <input
          name="age"
          placeholder="Age"
          type="number"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={update}
        />

        <select
          name="gender"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={update}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          name="mobileNo"
          placeholder="Mobile Number"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={update}
        />

        <input
          name="street"
          placeholder="Street"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={update}
        />

        <input
          name="city"
          placeholder="City"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={update}
        />

        <input
          name="state"
          placeholder="State"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={update}
        />

        <input
          name="pinCode"
          placeholder="Pin Code"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={update}
        />

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
