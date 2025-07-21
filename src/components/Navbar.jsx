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
    <nav
      className="h-64 px-50 text-white flex justify-between items-center w-full shadow-md"
      style={{
        backgroundImage: "url('/image navbar.jpg')",// 💡 Remplace par ton image
        backgroundSize: "cover",
        backgroundPosition: "center",
       opacity: 0.40,
    
      }}
    >
      {}
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src="/logo.jpg"
            alt="Logo RNB"
            className="h-16 w-auto transition-transform duration-500 hover:rotate-6"
          />
        </Link>
        <Link to="/" className="text-2xl font-bold hover:underlinabsolute top-4 left-4 text-xl font-lighte">
          RNB Formation
        </Link>
      </div>

      {/* ✅ Liens de navigation */}
      <div className="space-x-6 text-lg">
        <Link to="/about" className="hover:underline">À propos</Link>
        {user ? (
          <>
            <Link to={`/dashboard/${user.id}`} className="hover:underline">Dashboard</Link>
            <button onClick={handleLogout} className="hover:underline">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
