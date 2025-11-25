import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axiosConfig";
import { toast } from "react-toastify";

export default function EditPatient() {
  const { id } = useParams();
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

  const loadPatient = useCallback(async () => {
    try {
      const res = await api.get(`/api/patients/${id}`);
      setForm(res.data);
    } catch {
      toast.error("Failed to load patient");
    }
  }, [id]);

  useEffect(() => {
    loadPatient();
  }, [loadPatient]);

  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/patients/${id}`, form);
      toast.success("Patient updated");
      navigate("/patients");
    } catch {
      toast.error("Update failed");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-xl rounded-2xl mt-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-700 text-center">
        Edit Patient
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={submitForm}>

        <input
          name="fullName"
          value={form.fullName}
          placeholder="Full Name"
          className="w-full p-2 border rounded-lg"
          onChange={update}
        />

        <input
          name="age"
          value={form.age}
          placeholder="Age"
          type="number"
          className="w-full p-2 border rounded-lg"
          onChange={update}
        />

        <select
          name="gender"
          value={form.gender}
          className="w-full p-2 border rounded-lg"
          onChange={update}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          name="mobileNo"
          value={form.mobileNo}
          placeholder="Mobile Number"
          className="w-full p-2 border rounded-lg"
          onChange={update}
        />

        <input
          name="street"
          value={form.street}
          placeholder="Street"
          className="w-full p-2 border rounded-lg"
          onChange={update}
        />

        <input
          name="city"
          value={form.city}
          placeholder="City"
          className="w-full p-2 border rounded-lg"
          onChange={update}
        />

        <input
          name="state"
          value={form.state}
          placeholder="State"
          className="w-full p-2 border rounded-lg"
          onChange={update}
        />

        <input
          name="pinCode"
          value={form.pinCode}
          placeholder="Pin Code"
          className="w-full p-2 border rounded-lg"
          onChange={update}
        />

        <button
          className="col-span-1 md:col-span-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  );
}
