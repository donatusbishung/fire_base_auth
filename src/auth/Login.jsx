import React, { useContext, useState } from "react";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.email) {
      setError("All fields required");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }
    try {
      await login(formData.email, formData.password);
      navigate("/dashboard");
      toast.success("Login successfully", { position: "top-right" });
    } catch (error) {
      setError(error.message || "An error occurred");
    }
  };
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-[100vh]">
      <div className="bg-slate-200 p-5 rounded-md shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Log In</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-full max-w-sm">
          <input
            type=""
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="outline-none w-full p-2 rounded-md text-black"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="outline-none w-full p-2 rounded-md text-black"
          />
          <button
            type="submit"
            className="bg-black text-white p-2 rounded-md font-bold hover:bg-slate-700">
            Log In
          </button>
          {error && <p className="text-[12px] text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
