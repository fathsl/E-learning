import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Gère les changements dans les champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  // Gère la soumission du formulaire
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* -------- NAVBAR -------- */}
      <header className="w-full bg-white shadow-md py-4 text-center">
        <Navbar />
      </header>

      {/* -------- FORMULAIRE LOGIN -------- */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Log in</h1>

          {/* Message d'erreur */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-center mb-4">
              {error}
            </div>
          )}

          {/* Formulaire */}
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

          {/* Lien vers l'inscription */}
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-purple-700 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </main>

      {/* -------- FOOTER -------- */}
      <footer className="w-full bg-white shadow-inner py-4 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Login;


