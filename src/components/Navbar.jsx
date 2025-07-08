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
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center w-full">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo RNB" className="h-8 w-8" />
        <Link to="/" className="text-xl font-bold">
          RNB Formation
        </Link>
      </div>
      <div className="space-x-4">
        <Link to="/about" className="hover:underline">À propos</Link>
        {user ? (
          <>
            <Link to={`/dashboard/${user.id}`} className="hover:underline">Dashboard</Link>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-green-500 px-3 py-1 rounded hover:bg-green-600">Login</Link>
            <Link to="/signup" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
