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
    pincode: "",
  });

  // Load patient data
  const [loading, setLoading] = useState(false);

const loadPatient = useCallback(async () => {
  setLoading(true);
  try {
    const res = await api.get(`/api/patients/${id}`);
    const data = res.data.data;
    setForm({
      fullName: data.fullName || "",
      age: data.age || "",
      gender: data.gender || "",
      mobileNo: data.mobileNo || "",
      street: data.address?.street || "",
      city: data.address?.city || "",
      state: data.address?.state || "",
      pincode: data.address?.pincode || "",
    });
  } catch (err) {
    toast.error("Failed to load patient");
  } finally {
    setLoading(false);
  }
}, [id]);


  useEffect(() => {
    loadPatient();
  }, [loadPatient]);

  // Handle input change
  const update = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Validation
  const validate = () => {
    if (!form.fullName.trim()) return toast.error("Full Name is required");
    if (!form.age || form.age <= 0) return toast.error("Valid Age is required");
    if (!form.gender) return toast.error("Gender is required");
    if (!/^\d{10}$/.test(form.mobileNo)) return toast.error("Mobile number must be 10 digits");
    if (!form.street.trim()) return toast.error("Street is required");
    if (!form.city.trim()) return toast.error("City is required");
    if (!form.state.trim()) return toast.error("State is required");
    if (!/^\d{6}$/.test(form.pincode)) return toast.error("Pin Code must be 6 digits");
    return true;
  };

  // Submit updated data
  const submitForm = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await api.put(`/api/patients/${id}`, form);
      toast.success("Patient updated successfully");
      navigate("/patients");
    } catch (err) {
      console.log(err);
      toast.error("Update failed");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-xl rounded-2xl mt-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-700 text-center">Edit Patient</h2>

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
          type="number"
          value={form.age}
          placeholder="Age"
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
          name="pincode"
          value={form.pincode}
          placeholder="Pin Code"
          className="w-full p-2 border rounded-lg"
          onChange={update}
        />

        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Update
        </button>
      </form>
    </div>
  );
}
