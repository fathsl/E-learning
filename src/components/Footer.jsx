import React from "react";

const Footer = () => {
    return (
    <footer className="bg-yellow-600 text-white text-center py-3 mt-auto">
      &copy; {new Date().getFullYear()} RNB Formation. Tous droits réservés.
      <h2 className="text-xl font-semibold text-gray-800 mb-2">📞 Contact</h2>
          <p className="text-gray-700">
            Email : support@elearningapp.com <br />
            Téléphone : +216 XX XXX XXX
          </p>
    </footer>
  );
}

export default Footer