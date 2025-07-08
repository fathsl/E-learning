import React from "react";

const Footer = () => {
    return (
    <footer className="bg-blue-600 text-white text-center py-3 mt-auto">
      &copy; {new Date().getFullYear()} RNB Formation. Tous droits réservés.
    </footer>
  );
}

export default Footer