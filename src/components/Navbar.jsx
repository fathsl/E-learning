import React from 'react';
import { useAlert, useUser } from '../hooks/Hooks';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { dispatchAlert } = useAlert();
  const { user, dispatchUser } = useUser();

  const handleLogout = () => {
    dispatchUser({ type: "LOG_OUT" });
    dispatchAlert({
      type: "SHOW",
      payload: "Déconnexion réussie",
      variant: "Danger",
    });
    window.location.href = "/";
  };

  return (
    <nav className="relative h-64 flex flex-col justify-center px-10 bg-white/80 backdrop-blur-md shadow-md z-50">
      {}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image navbar.jpg')",
          opacity: 0.3,
          zIndex: -1,
        }}
      />
      {}
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        {}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src="/logo.jpg"
              alt="Logo RNB"
              className="h-16 w-auto rounded shadow-md hover:scale-105 transition-transform"
            />
          </Link>
          <Link
            to="/"
            className="text-4xl font-bold text-gray-900 hover:text-indigo-600 transition"
          >
            RNB Formation
          </Link>
        </div>

        {}
        <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700 font-medium">
          <Link to="/about" className="hover:text-indigo-600 transition">À propos</Link>
          <Link to="/Formation" className="hover:text-indigo-600 transition">Formations</Link>
          <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
        </div>

        {}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          {user ? (
            <>
              <Link
                to={`/dashboard/${user.id}`}
                className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-100 transition"
              >
                Connexion
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
              >
                S’inscrire
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
