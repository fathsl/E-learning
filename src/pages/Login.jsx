import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.error || "Login failed");
      }

      navigate("/profile");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Log in</h1>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={userDetails.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={userDetails.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-700 hover:underline">
            {" "}
            Register
          </Link>
          <Link
            to="/login"
            className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
