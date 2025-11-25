import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "../../api/axiosConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AuthAdmin() {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = isLogin ? "/admin/login" : "/admin/signup";

      const payload = isLogin
        ? { email: form.email, password: form.password }
        : { name: form.name, email: form.email, password: form.password };

      const response = await axios.post(endpoint, payload);

      // expected response → { token, id, name, email }
      const user = {
        token: response.data.token,
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        role: "admin"
      };

      login(user);

      toast.success(isLogin ? "Login successful!" : "Registered successfully!");

      setTimeout(() => {
        navigate("/");
      }, 400);

    } catch (err) {
      if (err.response) {
        if (err.response.status === 403) {
          toast.error("Invalid credentials!");
        } else if (err.response.status === 409) {
          toast.error("Admin already registered!");
        } else {
          toast.error(err.response.data.message || "Something went wrong!");
        }
      } else {
        toast.error("Server not reachable");
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Admin Login" : "Admin Signup"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          )}

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Signup"}
          </button>
        </form>

        <p
          className="mt-4 text-center text-blue-600 cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create Account" : "Already have an account?"}
        </p>
      </div>
    </div>
  );
}
